---
title: Comment j’ai développé mon premier plugin Strapi
publicationDate: "2023-09-08"
updateDate: "2023-09-08"
description: Imaginez pouvoir générer du contenu directement dans votre CMS. Le rêve non ? C'est ce que j'ai voulu faire en développant pour la première fois un plugin Strapi pour intégrer OpenAI (ChatGPT).
cover: "/images/strapi.jpg"
---

![](/assets/images/strapi.jpg)

## L’objectif de base

Initialement, je voulais créer un plugin pour connecter Strapi à Jarside via leur API afin de créer automatiquement des
articles optimisés pour le SEO.

Cependant, en discutant sur
X, [Victor m'a envoyé une vidéo](https://twitter.com/vcoisne/status/1694021354394460533) montrant qu'une
entreprise polonaise avait développé un plugin pour générer le titre, l'introduction, le corps, le meta title, la meta
description, des images, un script vidéo, etc. mais avec l’API d’OpenAI (ChatGPT).

C'était exactement ce qu'il me fallait. J'ai donc cherché à le télécharger, mais j'ai réalisé que le plugin n'était pas
disponible en open source. Ils l'ont gardé pour eux (et ils ont sans doute raison).

Mon objectif était donc de reproduire ce qui est montré dans la vidéo, à savoir un champ contenant un bouton qui ouvre
une fenêtre modal où l'on saisit quelques paramètres avant de générer le contenu. On attend quelques secondes que le
contenu se génère et on clique sur "appliquer" pour remplir nos champs avec le contenu généré.

Ainsi, à partir de cette vidéo et sans aucune connaissance en développement de plugin Strapi, j'ai entrepris de créer un
plugin de génération de contenu nommé "Generator AI".

## Préparer le terrain

La première chose que j'ai faite a été d'éplucher la documentation de Strapi pour voir comment créer un plugin.

Les développeurs de Strapi ont facilité la tâche en créant une commande CLI pour générer le boilerplate du
plugin : `yarn strapi generate` ou `npm run strapi generate`.

Il suffit ensuite d'activer le plugin en
suivant [les instructions](https://docs.strapi.io/dev-docs/plugins-development), d'aller dans le dossier du plugin,
d'installer toutes les dépendances avec `yarn install` ou `npm install`, puis de revenir à la racine du projet pour
lancer le serveur local avec `yarn develop --watch-admin` ou `npm run develop -- --watch-admin`.

Jusque-là, rien de bien compliqué. Il suffit de suivre la documentation. Cependant, ce qui suit demande plus de
réflexion.

## Comprendre l’architecture d’un plugin Strapi

Étonnement, l’architecture d’un plugin Strapi n’est pas expliquée dans la documentation. Heureusement, j’ai fini par
tomber sur [cet article](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-file-structure-2-6) qui explique comme
cela se passe malgré qu’il date de 2022 et que des choses ont changés entre temps.

Voici donc la version 2023 de l’architecture d’un plugin Strapi :

```plaintext
├── README.md                 // Un read me classique
├── admin                     // Partie front-end du plugin
│   └── src
│       ├── components        // Components React du plugin
│       │   ├── Initializer
│       │   │   └── index.js  // Initialisation des components
│       │   └── PluginIcon
│       │       └── index.js  // Icône du plugin affichée dans le menu de navigation
│       ├── index.js          // Configuration du plugin
│       ├── pages             // Différentes pages du plugin
│       │   ├── App
│       │   │   └── index.js  // Squelette autour de votre page. Il est commun à toutes vos pages. C'est donc là que vous devrez mettre une navigation par exemple
│       │   └── HomePage
│       │       └── index.js  // Home page du plugin. Page créé par défaut
│       ├── pluginId.js       // Variable pluginId récupéré à partir du package.json
│       ├── translations      // Fichiers de traductions de votre plugin en i18n
│       │   ├── en.json
│       │   └── fr.json
│       └── utils             // Dossier contenant toutes les fonctions que vous allez réutiliser dans votre front
│           └── getTrad.js    // Function getTrad qui renvoie le fichier de traduction correspondant à votre langue
├── server                    // Partie back-end du plugin
│   ├── bootstrap.js          // Function appelée juste après que le plugin soit enregistré
│   ├── config
│   │   └── index.js          // Fichier qui contient les paramètres par défaut du plugin
│   ├── content-types         // Dossier qui contient les schémas des content-types (models) particuliers pour votre plugin
│   │   └── index.js          // Fichier qui charges tous les content-types
│   ├── controllers
│   │   ├── index.js          // Fichier qui charge tous les controllers
│   │   └── my-controller.js  // Controller créé par défaut. Vous pouvez le renommé ou supprimer
│   ├── destroy.js            // Fonction qui est appelé pour nettoyer le plugin après que l'instance de Strapi est détruite
│   ├── index.js              // Fichier qui exportes tous les autres dossiers/fichiers de la partie server
│   ├── middlewares           // Dossier qui contient tous les middlewares
│   │   └── index.js
│   ├── policies              // Dossier qui contient toutes les policies (logique excécutée avant d'atteindre le controller)
│   │   └── index.js
│   ├── register.js           // Function appelée pour charger le plugin, avant boostrap
│   ├── routes
│   │   └── index.js          // Fichier qui contient les routes par défaut du plugin
│   └── services
│       ├── index.js          // Fichier qui charges tous les services (fonctions réutilisables des controllers)
│       └── my-service.js     // Service par défaut. Vous pouvez rennomer ou supprimer
├── strapi-admin.js           // Point d'entrée du front-end
└── strapi-server.js          // Point d'entrée du back-end
```

## Ajouter un nouveau type de champ

Pour que l’on puisse interagir avec le plugin dans l’éditeur de contenu, il faut créer un nouveau type de champ sur la
partie admin (le front-end). Pour cela, il faut commencer par le déclarer dans le
fichier `mon-plugin/admin/src/index.js` en ajoutant la fonction `app.customFields.register()` à l’objet `register` :

```jsx filename="index.js"
// mon-plugin/admin/src/index.js

app.customFields.register({
  name: "generator",
  pluginId: "generator-ai",
  type: "string",
  intlLabel: {
    id: `${pluginId}.plugin.field.generator.field`,
    defaultMessage: "Generator button",
  },
  intlDescription: {
    id: `${pluginId}.plugin.field.generator.description`,
    defaultMessage: "Let AI do your writing !",
  },
  icon: PluginIcon,
  components: {
    Input: async () =>
      import("./components/Input"), // Component qui va être appelé à l'affichage de la page d'édition de contenu
  },
})
```

Après cet ajout, si l’on va dans le Content-Type Builder et que l’on ajoute un nouveau champ, notre champ apparaît dans
l’onglet “Custom”. Parfait !

![Le champ personnalisé](/assets/images/field.png)

## Développer l’interface utilisateur du plugin

Comme je l’ai dit en préambule, je voulais que notre nouveau champ soit un bouton qui, quand on clique dessus, ouvre une
modal de génération de contenu.

Pour faire cela, rendez-vous dans le fichier du composant qui est déclaré dans `app.customFields.register()`. Dans notre
cas, il se trouve dans `mon-plugin/admin/src/components/index.js`.

Pour nous simplifier la vie et surtout garder une unité de design dans l’interface, les équipes de Strapi ont développé
un “[design system](https://design-system.strapi.io/)”. Un design system défini des règles, des bonnes pratiques, des
couleurs, des tailles, des polices etc. pour assurer la cohérence d’UI/UX sur un même univers.

Dans ce design system, Strapi met à disposition des components React qui permettent de gagner beaucoup de temps. Ainsi,
pour le bouton, nous n’allons pas le créer nous même mais nous allons utiliser le component mis à disposition dans le
design system. Nous pouvons alors faire un `import { Button } from "@strapi/design-system"`

```jsx
// mon-plugin/admin/src/components/index.js

import React from "react";
import {Button} from "@strapi/design-system";
import getTrad from "../../utils/getTrad";

export default function Input() {
    return (
        <Button onClick={() => console.log("click")}>
            // formatMessage() est une fonction qui vient récupérer la clé de
            traduction et afficher le texte correpsondant
            {formatMessage({
                id: getTrad("plugin.field.generator.button"),
            })}
        </Button>
    );
}
```

En réalité, ce même principe de composant existe quasiment pour toutes les balises HTML. En effet, pour mon plugin, je
n’ai pas eu besoin d’écrire une seule balise HTML native. J’ai uniquement utiliser des composants venant du design
system de Strapi.

Finalement, je suis arrivé à ce résultat pour ma modal :

![Interface de paramètrages de la génération](/assets/images/generate.gif)

Comme vous pouvez le voir dans le gif ci-dessus, les champs demandés sont uniquement des champs de paramètre, comme le
ton ou la longueur du contenu demandé. Ces paramètres sont ensuite envoyés dans la requête à l’IA.

Cependant, afin que l’IA comprenne ce qu’on lui dise, il faut être un peu plus exhaustif. Où se cachent donc les prompts
complets ?

## Permettre à l’utilisateur de définir les prompts envoyés à l’IA

Tout d’abord, je voulais pouvoir faire cela individuellement par champ. Je me suis donc dit qu’il fallait profiter de
l’onglet “Advanced” à la création du champ et de mettre mes réglages ici.

![Réglages avancés du champs](/assets/images/advanced_settings.png)

Cependant, après avoir galéré à essayer, j’ai enfin trouvé dans
la [documentation](https://docs.strapi.io/dev-docs/custom-fields) le fait que l’on ne pouvait pas faire ce que l’on
voulait et qu’il fallait respecter la liste de champs
disponibles [ici](https://github.com/strapi/strapi/blob/main/packages/core/content-type-builder/admin/src/components/FormModal/attributes/attributeOptions.js).
C’est-à-dire des choses assez simple comme rendre le champ obligatoire, définir une longueur maximale ou encore une
définir une regex de validation.

L’alternative a été de faire quelque chose de plus basique, à savoir créer une page de configuration dans les paramètres
Strapi pour permettre à l’utilisateur de personnaliser ses prompts.

Ainsi, dans le dossier `mon-plugin/admin/src/pages`, nous pouvons une nouvelle page. Pour cela, il faut créer le
dossier `Settings` puis le sous-dossier `Configuration` contenant le fichier `index.js`. Toutefois, cette page n’est
encore chargée par Strapi puisque nous ne l’avons pas averti que nous voulions la charger.

Pour cela, il faut modifier le fichier `mon-plugin/admin/src/index.js` et ajouter/modifier la
fonction `app.createSettingSection()` pour ajouter le code suivant :

```jsx
// mon-plugin/admin/src/index.js

app.createSettingSection(
  {
    id: pluginId,
    intlLabel: {
      id: `${pluginId}.plugin.name`,
      defaultMessage: "Generator AI",
    },
  },
  [
    {
      intlLabel: {
        id: `${pluginId}.plugin.page.configuration`,
        defaultMessage: "Configuration",
      },
      id: "settings.configuration",
      to: `/settings/${pluginId}/configuration`,
      Component: async () => {
        return import("./pages/Settings/Configuration");
      },
    },
  ]
);
```

Puis, de la même manière que sur l’`Input` nous pouvons créer le layout de la page en utilisant les components du design
system pour arriver au résultat ci-dessous.

![Interface de la configuration](/assets/images/configuration.png)

Mais, à partir de là, j’ai rencontré un nouveau problème : comment et où sauvegarde-t-on ces réglages ?

## Sauvegarder les réglages du plugin Strapi

Figurez-vous que ce n’est expliqué nul part dans la documentation de Strapi. J’ai du fouiller longuement sur Google. De
plus, il est impossible de se faire aider par ChatGPT car la dernière version de Strapi qu’il connait est la 3.6.0.
Heureusement, l’article que j’ai mentionné au début
explique [comment faire cela](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-server-customization-4-6).

Nous pouvons donc faire cela en créant une `route`, qui est gérée par un `controller` qui fait appel à un `service`.

```jsx
// Ajout de la route dans mon-plugin/server/routes/index.js

module.exports = [
    {
        method: "POST",
        path: "/settings",
        handler: "settingsController.setSettings",
        config: {
            policies: [],
        },
    }
];
```

```jsx
// Création du controller dans mon-plugin/server/controllers/settings.js

"use strict";

module.exports = ({strapi}) => ({
    async setSettings(ctx) {
        const {body} = ctx.request;
        try {
            ctx.body = await strapi
                .plugin("generator-ai")
                .service("settings")
                .setSettings(body);
        } catch (err) {
            ctx.throw(500, err);
        }
    },
});
```

```jsx
// Export du nouveau controller dans mon-plugin/server/controllers/index.js

"use strict";

const settingsController = require("./settings");

module.exports = {
    settingsController,
};
```

```jsx
// Création du service utilisé par le controller dans mon-plugin/server/services/settings.js

"use strict";

module.exports = ({strapi}) => {
    const pluginStore = strapi.store({
        environment: "",
        type: "plugin",
        name: "generator-ai",
    });

    return {
        async setSettings(settings) {
            const value = settings;
            await pluginStore.set({key: "settings", value});
            return "SOMETHING";
        },
    };
};
```

```jsx
// Export du nouveau service dans mon-plugin/server/services/index.js

"use strict";

const settings = require("./settings");

module.exports = {
    settings,
};
```

Cependant, en copiant le code
du [tutoriel](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-server-customization-4-6), je n’arrivais pas
accéder à la méthode `strapi.store()`. En effet, il la met en dehors du `module.exports` et mon IDE ne trouvait pas la
variable `strapi`.

Puis, j’ai réalisé que son code était basé sur une ancienne version de Strapi. J’ai donc utiliser la
méthode `strapi.store()` mais cette fois dans le `module.exports` car j’avais accès à la variable `strapi` en paramètre
du `module.exports`.

À partir de là, bingo, on peut enregistrer nos paramètres dans ce fameux store qui est en réalité une ligne dans la base
de données à la table `main.strapi_core_store_settings`.

## Faire des requête HTTP depuis la partie admin (front)

Néanmoins, j’ai rencontré un nouveau problème. Je n’arrivais pas faire des requêtes HTTP depuis mon front, avec React.

En effet, toujours sur le
même [tutoriel](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-admin-customization-5-6), la personne effectue
ses requêtes sur une instance d’Axios qui n’a pas été générée par le CLI Strapi. J'ai donc pensé que c'était un oubli.
J'ai alors copié/collé son fichier et je me suis rendu compte qu’il y avait une erreur dans la console node disant que
c’était une fonction dépréciée. Encore une fois, rien n'est mentionné dans la documentation de Strapi à propos de cela …

Finalement, après avoir effectué des recherches sur Google, je suis tombé
sur [cette page](https://forum.strapi.io/t/axios-instance-in-strapi/30425/4) qui indique qu'il faut désormais utiliser
la fonction `useFetchClient()`. J'ai donc cherché cette fonction dans la documentation, mais je n'ai, une nouvelle fois,
rien trouvé. J'ai finalement découvert sur
la [documentation des contributeurs](https://contributor.strapi.io/docs/core/helper-plugin/hooks/use-fetch-client) à
quoi sert ce hook. Il suffit alors de l’utiliser comme ceci :

```jsx
import {useState} from "react";
import {useFetchClient} from "@strapi/helper-plugin";

const Component = () => {
  const {get} = useFetchClient();
  const requestURL = "/some-endpoint";

  const handleGetData = async () => {
    const {data} = await get(requestURL);
    setItems(data.items);
  };

  return <button onClick={handleGetData}>Show Items</button>;
};
```

Ainsi, une fois cela résolu, nous pouvons faire une requête “POST” pour enregistrer les réglages dans la base de donnée.

## Fournir des prompts par défaut

Afin de faciliter la vie de l’utilisateur, je voulais fournir une base de prompts prêts à être utilisés.

J’ai donc cherché où est-ce que je pouvais stocker cela. Dans
la [documentation](https://docs.strapi.io/dev-docs/api/plugins/server-api#configuration), j’ai trouvé que l’on pouvait
enregistrer les paramètres par défauts du plugin dans le fichier `mon-plugin/server/config/index.js`.

```jsx
// Paramètres par défaut du plugin dans mon-plugin/server/config/index.js

"use strict";

module.exports = {
    default: ({env}) => ({
        prompts: {
            base: `You're an experienced copywriter, you know how to write SEO-optimized blog post for the topic "__TOPIC__", targeting __TARGET__ audience with a __TONE__ tone. You must write in __LANGUAGE__. Don't make any comments. Keep theses instructions in memory for every answers you will give.`,
            title: `Generate the title for this blog post. Don't put your answer into quotes.`,
            introduction: `Generate an introduction for this blog post.`,
            body: `Generate only the body and with level 2 subtitles for this blog post. Add a lot of details. It must be formatted in markdown and have in bold what’s important. The body must make __LENGTH__ words approximatively.`,
            metaTitle: `Generate the meta title optimized for SEO with a maximum of 60 characters (white spaces and punctuation included,). Don't put your answer into quotes.`,
            metaDescription: `Generate the meta description optimized for SEO with a maximum of 160 characters (white spaces and punctuation included). Don't put your answer into quotes.`,
        },
        language: "english",
        length: 800,
        model: "gpt-3.5-turbo-16k",
    }),
    validator() {
    },
};
```

Une fois les paramètres par défaut définis, il faut les lire et les enregistrer dans la base de données. Le plus logique
selon moi est de le faire au moment de la première requête `getSettings()`. Ainsi, nous pouvons vérifier si les réglages
existent dans la base de données et réagir en fonction :

- Si oui, on les renvoie
- Si non, on récupère les réglages par défaut que j’enregistre dans la base de données et que je renvoie.

```jsx
// Service settings dans mong-plugin/server/services/settings.js

"use strict";

const {array, object, string, number} = require("yup");

const settingsValidationSchema = object({
  prompts: object({
    base: string().required().trim(),
    title: string().required().trim(),
    introduction: string().required().trim(),
    body: string().required().trim(),
    metaTitle: string().required().trim(),
    metaDescription: string().required().trim(),
  }),
  model: string().required().trim(),
  target: string().trim(),
  language: string().trim(),
  tone: string().trim(),
  length: number().integer().positive(),
  contentTypes: array().of(
    object().shape({
      uid: string().required().trim(),
      mapping: array().of(
        object().shape({
          generatedField: string().required().trim(),
          normalField: string().required().trim(),
        })
      ),
    })
  ),
});

module.exports = ({strapi}) => {
  // Création du store (connexion avec la base de données)
  const pluginStore = strapi.store({
    environment: "",
    type: "plugin",
    name: "generator-ai",
  });

  async function createDefaultConfig() {
    const settings = {
      prompts: {
        base: strapi.plugin("generator-ai").config("prompts.base"),
        title: strapi.plugin("generator-ai").config("prompts.title"),
        introduction: strapi
          .plugin("generator-ai")
          .config("prompts.introduction"),
        body: strapi.plugin("generator-ai").config("prompts.body"),
        metaTitle: strapi.plugin("generator-ai").config("prompts.metaTitle"),
        metaDescription: strapi
          .plugin("generator-ai")
          .config("prompts.metaDescription"),
      },
      language: strapi.plugin("generator-ai").config("language"),
      length: strapi.plugin("generator-ai").config("length"),
      model: strapi.plugin("generator-ai").config("model"),
      contentTypes: [],
    };

    // Enregistrer dans la base de données les réglages par défaut
    await pluginStore.set({
      key: "settings",
      value: settings,
    });

    // Renvoie des settings par défaut
    return settings;
  }

  return {
    async getSettings() {
      // Appel à la base de données pour récupérer les settings
      let config = await pluginStore.get({key: "settings"});
      // Si ça ne récupère rien, ça vient récupérer les réglages par défaut
      if (config === null) {
        config = await createDefaultConfig();
      }

      return config;
    },

    async setSettings(settings) {
      // Valider si l'objet settings est correct
      await settingsValidationSchema.validate(settings);
      // Enregistrer dans la base de données si la validation est bonne
      await pluginStore.set({key: "settings", value: settings});
      // Renvoie de tous les réglages
      return settings;
    },

    async resetDefaultPrompt({prompt}) {
      return strapi.plugin("generator-ai").config(`prompts.${prompt}`);
    },
  };
};
```

Comme vous pouvez le voir dans l’extrait de code ci-dessus, nous pouvons questionner le fichier de configuration par
défaut grâce à `strapi.plugin("generator-ai").config("prompts.base")`

## Accéder aux clés d’API stockés dans le fichier .env

Pour pouvoir faire des requêtes à une API externe, il faut bien souvent des clés d’API. Dans le cas de Strapi, elles
sont à stocker dans le fichier `.env`. Afin que le plugin puisse les lire, il faut aller à la racine de Strapi dans le
fichier `config/plugins.js` pour ajouter la configuration utilisateur comme ceci:

```jsx
// config/plugin.js

module.exports = {
    "generator-ai": {
        enabled: true,
        config: {
            openaiApiKey: process.env.OPENAI_API_KEY,
        },
        resolve: "./src/plugins/generator-ai",
    },
};
```

Ce n’était pas l’unique solution car nous aurions pu le mettre dans le fichier de config du
plugin (`mon-plugin/server/config/index.js`), de la même manière que les paramètres par défaut. Cependant, ça ne laisse
pas à l’utilisateur la possibilité de changer, si besoin, le nom de sa variable d’environnement. Il est donc préférable
de le faire dans le configuration à la racine pour que l’utilisateur ait la main.

Ensuite, lu par Strapi, nous pouvons accéder à la variable d’environnement de la même manière que les paramètres par
défaut. Ainsi, dans le fichier `mon-plugin/server/services/openai.js`, nous pouvons lire la clé de cette
manière `strapi.plugin("generator-ai").config("openaiApiKey")`.

```jsx
// mon-plugin/server/services/openai.js

const openai = new OpenAI({
    apiKey: strapi.plugin("generator-ai").config("openaiApiKey"),
});
```

## Faire des requêtes à OpenAI

Grâce à la clé d’API, nous pouvons désormais faire des requêtes à l’API d’OpenAI. Toutefois, en essayant d’avoir une
discussions avec l’IA, je me suis rendu compte qu’elle oubliait le contexte à chaque requête. La raison est simple mais
étonnante.

En effet, lorsque l’on utilise la `completions` sur la partie Chat d’OpenAI (en gros les requêtes à ChatGPT), d’une
requête à l’autre, le contexte n’est pas conservé alors que l’API renvoie un ID de conversation. Ainsi, à chaque appel
d’API, il faut renvoyer non seulement tous les messages précédents mais aussi les réponses précédentes de l’IA.

Nous pouvons solutionner le problème en faisant une boucle qui garde en mémoire les résultats précédents et qui les
renvoie pour la requête suivante.

```jsx
/**
 * Generates content by having a conversation with the OpenAI API.
 *
 * @param {Object} params - The parameters for content generation:
 * @param {string} params.topic - The topic to generate content about.
 * @param {string} params.language - The language to generate the content in.
 * @param {string} params.tone - The desired tone of the generated content.
 * @param {number} params.length - The approximate word count for generated body content.
 * @param {string} params.target - The target audience for the content.
 * @param {string[]} params.fieldsToGenerate - The content fields to generate like title, body etc.
 *
 * @returns {Object} - The generated content results and usage stats.
 * @returns {Object} results - The generated content for each requested field.
 * @returns {number} token - The total tokens used to generate the content.
 *
 * This uses the OpenAI SDK to interact with the OpenAI API.
 * It gets the prompt templates from the generator plugin's settings.
 * The prompts are parameterized based on the input params.
 * A conversation is constructed with the base prompt and prompt for each field.
 * The OpenAI API is called to generate completions for each prompt.
 * The results are extracted and usage tokens tracked.
 */

"use strict";

const OpenAI = require("openai");
const generatedFieldsList = [
    "title",
    "introduction",
    "body",
    "metaTitle",
    "metaDescription",
];

module.exports = ({strapi}) => ({
    async startGenerating({
                              topic,
                              language,
                              tone,
                              length,
                              target,
                              fieldsToGenerate,
                          }) {
        function replaceMagicKeys(prompt) {
            return prompt
                .replace("__TOPIC__", topic)
                .replace("__LANGUAGE__", language)
                .replace("__TONE__", tone)
                .replace("__LENGTH__", length)
                .replace("__TARGET__", target);
        }

        const settings = await strapi
            .plugin("generator-ai")
            .service("settings")
            .getSettings();

        const openai = new OpenAI({
            apiKey: strapi.plugin("generator-ai").config("openaiApiKey"),
        });

        const results = {};
        let totalTokens = 0;
        const messages = [
            {
                role: "system",
                content: replaceMagicKeys(settings.prompts.base),
            },
        ];

        const orderedFieldsToGenerate = fieldsToGenerate.sort(function (a, b) {
            return generatedFieldsList.indexOf(a) - generatedFieldsList.indexOf(b);
        });

        for (const field of orderedFieldsToGenerate) {
            switch (field) {
                case "title":
                    messages.push({
                        role: "user",
                        content: replaceMagicKeys(settings.prompts.title),
                    });
                    break;
                case "introduction":
                    messages.push({
                        role: "user",
                        content: replaceMagicKeys(settings.prompts.introduction),
                    });
                    break;
                case "body":
                    messages.push({
                        role: "user",
                        content: replaceMagicKeys(settings.prompts.body),
                    });
                    break;
                case "metaTitle":
                    messages.push({
                        role: "user",
                        content: replaceMagicKeys(settings.prompts.metaTitle),
                    });
                    break;
                case "metaDescription":
                    messages.push({
                        role: "user",
                        content: replaceMagicKeys(settings.prompts.metaDescription),
                    });
                    break;
            }

            const completion = await openai.chat.completions
                .create({
                    messages: messages,
                    model: settings.model,
                })
                .catch((err) => {
                    if (err instanceof OpenAI.APIError) {
                        console.log(err.status);
                        console.log(err.name);

                        console.log(err.headers);
                    } else {
                        console.log("error");
                        throw err;
                    }
                });

            console.log(completion);
            messages.push({
                role: "assistant",
                content: completion.choices[0].message.content,
            });

            results[field] = completion.choices[0].message.content;
            totalTokens = totalTokens + completion.usage.total_tokens;
        }

        return {
            results,
            token: totalTokens,
        };
    }
});
```

## Valider les paramètres saisis par l’utilisateur

Maintenant que nous arrivons à faire des requêtes à OpenAI ou enregistrer nos réglages, il faut valider les champs
saisis par l’utilisateur.

N’ayant aucune idée de comment faire cela, j’ai fouillé dans le code source de Strapi. Je me suis aperçu voir qu’ils
utilisaient [formik](https://formik.org/) pour la gestion du formulaire [yup](https://github.com/jquense/yup) pour la
validation des données. Je ne connaissais pas du tout mais c’est super simple à utiliser. Vous pouvez voir un
exemple [ici](https://formik.org/docs/tutorial#schema-validation-with-yup).

Cependant, j’ai buté sur une petite difficulté avec l’utilisation du design system de Strapi. En effet, pour les autres
champs qu’un input classique, `formik` ne fonctionnait pas. Normalement, il détecte automatiquement le `onChange` du
champ, mais étant donné que c’est un composant personnalisé, ça ne fonctionnait. Mains, après un peu de réflexion, j’ai
fini par trouver la solution. L’astuce a été d’utiliser la fonction `formik.setFieldValue()` comme ci-dessous :

```jsx
<Field
    as={SingleSelect}
    hint={formatMessage({
        id: getTrad("Settings.Configuration.ContentLayout.prompt.model.hint"),
    })}
    label={formatMessage({
        id: getTrad("Settings.Configuration.ContentLayout.prompt.model.label"),
    })}
    name="model"
    required
    error={formik?.errors?.model && formik.errors.model}
    onClear={() => formik.setFieldValue("model", "")} // Faire manuellement l'action
    onChange={(value) => formik.setFieldValue("model", value)}  // Faire aussi ici manuellement l'action
>
    {openaiModelsList.map((item, index) => (
        <SingleSelectOption value={item} key={index}>
            {item}
        </SingleSelectOption>
    ))}
</Field>;
```

## Appliquer le contenu généré aux champs de la page

Avec tout ce que l’on a fait précédemment, nous pouvons désormais générer du contenu. Mais, une fois que le contenu est
généré, comment sait-on dans quel champ reporter ce contenu généré ?

Pour cela, nous avons créé une page de réglages qui permet de faire la correspondance des champs. Globalement, elle
permet de dire : “Pour ce type de contenu, je veux que le champ généré *content* corresponde au champ existant
*richText”*.

![Interface de la correspondance des champs](/assets/images/correspondances_champs.png)

Cependant, une fois que nous avons fait cette correspondance, je ne trouvais pas le moyen de faire le rapprochement
entre les champs de ma modal et ceux de l’éditeur de contenu.

![Reporter une valeur générer dans le contenu](/assets/images/reporter_valeur.png)

J’ai d’abord pensé qu’il était possible de faire cela en ciblant un id avec `document.getElementById()` ou avec un query
selector `document.querySelector()` mais je me suis rendu compte que Strapi n’expose, dans le code source, aucun moyen
de cibler les champs voulu. Ce n’était donc pas possible de la faire de cette manière.

Or, je me suis aperçu que le component `Input` (celui qui est utilisé pour générer le bouton et la modal) reçoit des
props qui contient la fonction `onChange()`. Et, cette fonction permet de modifier un champ dans l’éditeur de contenu.

```jsx
onChange({
    target: {
        name, // Nom de l'input à modifier
        value, // Valeur à donner à l'input
        type, // (Optionnel) le type de champ
    },
});
```

Encore une fois, elle n’est documenté nul part. Il faut fouiller dans le code source et sur internet pour comprendre à
quoi elle sert.

Il faut donc passer un nom de champ à la fonction `onChange()`. Ça tombe bien puisque nous les avons grâce à la
correspondance de champ. Ils sont stockés dans la base de données. Nous avons donc juste à lire ces donner et à appeler
la fonction `onChange()` pour modifier un-à-un les champs de la correspondance.

![Appliquer le contenu généré au contenu](/assets/images/application_contenu.gif)

## Traduire le plugin

Finalement, la dernière chose que nous avons fait a été de traduire le plugin. D’un point de vue fun, c’est la pire
chose à faire. Mais, bon, c’est nécessaire et pratique une fois que c’est fait.

Avec Strapi, cela reste relativement simple de traduire un plugin. En effet, ils utilisent la très connu
librairie [react-intl](https://formatjs.io/docs/react-intl/).

Il suffit alors de faire un import `import { useIntl } from "react-intl"` et récupérer la
fonction `const { formatMessage } = useIntl()`. Ensuite, nous pouvons utiliser la fonction `formatMessage()` en passant
un objet contenant un `id` et un `defaultMessage`. Pour lui passer l’`id`, nous pouvons utiliser la
fonction `getTrad()` (décrite plus haut dans l’article, au niveau de l’architecture du plugin). Cette fonction va
récupérer la clé de traduction correspondante dans notre fichier de langue (ex: `fr.json`)

```jsx
formatMessage({
  id: getTrad("global.notification.generation.get.warning.title"),
  defaultMessage: "Attention il y a une erreur"
})
```

Pour faire vos traductions, je vous conseille de faire terminer totalement une langue, puis vous le donner à ChatGPT et
vous lui demandez de le traduire dans la langue que vous souhaitez. C’est magique !

## Conclusion

N’ayant jamais touché à Strapi auparavant, et encore moins développé un plugin, j’ai trouvé l’exercice très instructif.

Néanmoins, sur les 47 heures passés à développé le plugin (dont beaucoup d’heures d’apprentissage), je pense que j’ai dû
perdre au moins 7 heures à cause d’une documentation trop légère, voire inexistante. Cela créé une véritable barrière à
l’entrée, qui, je pense, est préjudiciable à la croissance du nombre de plugin Strapi. Toutefois, l’expérience
développeur est bonne, l’architecture est simple, les API sont biens faites et faciles à utiliser.

Je compte mettre le plugin en open source prochainement. J’attends d’abord de l’utiliser dans des cas réels pour
peaufiner ce qui est nécessaire. L’objectif est de le mettre sur le store de plugin Strapi. Pensez donc à me suivre
sur [X/X](https://twitter.com/LouisCuvelier_) pour être tenu au courant.
