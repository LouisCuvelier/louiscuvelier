---
title: "La technique : le deuxième pilier du référencement naturel"
publicationDate: "2023-09-23"
updateDate: "2023-09-25"
description: "Découvrez ce que vous allez apprendre au travers de ce guide sur le référencement naturel."
---

Le second pilier du référencement naturel est celui de la technique. Il permet de donner toute sa puissance au contenu
afin de maximiser les chances de bien se classer dans les résultats de recherches. Nous allons alors traiter des
implémentations techniques à mettre en place afin d'avoir un bon référencement naturel.

## Définition du SEO technique ou "technical SEO"

Pour bien comprendre ce qu'est le SEO technique, il est important de commencer
par le définir. Ainsi, le SEO technique est "le
[processus de s'assurer qu'un site internet répond aux attentes techniques](https://backlinko.com/technical-seo-guide)
des moteurs de recherche modernes dans le but d'améliorer le référencement naturel" [traduction libre].

## Comprendre le budget de crawl

Avant d'aller plus loin dans le SEO technique, il est nécessaire de comprendre la base, à savoir le budget de crawl. Il
correspond "[aux nombres de pages d'un site que les robots d'indexation peuvent parcourir et indexer dans une certaine plage de temps](https://backlinko.com/hub/seo/crawl-budget)" [traduction libre].

Chaque site dispose d'un budget de crawl qui lui est propre, mais selon Google, "si un site répond très rapidement
pendant un certain temps, le budget augmente, ce qui signifie que davantage de connexions peuvent être utilisées pour
explorer. À l'inverse, si le site ralentit ou répond avec des erreurs
serveur, [le budget diminue et le Googlebot (robot d'indexation de Google) ralenti son crawl](https://webmasters.googleblog.com/2017/01/what-crawl-budget-means-for-googlebot.html)" [traduction libre].

Ainsi, comme tout budget, il est essentiel de l'utiliser intelligemment pour maximiser son efficacité, car si une page
n'est pas parcourue par un robot d'indexation, elle n'a aucune chance d'exister dans les moteurs de recherche. Par
conséquent, pour être sûr que les pages qui sont intéressantes et qui méritent d'apparaître dans les moteurs de
recherche soient parcourues, il faut veiller à ne pas faire indexer des pages inutiles.

Par exemple, indexer les pages du moteur de recherche interne d'un site n'est d'aucune utilité. En effet, cela permet à
l'utilisateur, et non pas aux robots d'indexation, de trouver ce qu'ils recherchent. Il n'est donc pas pertinent de
faire indexer ces pages par les robots d'indexation d'autant plus qu'il peut y avoir une infinité de résultats. Cela
épuiserait donc le budget de crawl pour rien, privant alors d'autres pages d'être indexées. Sur Coursier Job, nous avons
donc bloqué l'indexation du moteur de recherche interne.

![Message d'erreur montant que Google ne peut pas crawler cette page.](/images/impossible_crawler.png)

## Avoir la bonne architecture

L'architecture d'un site correspond à la structure des pages et à la liaison qu'elles ont entre elles. Afin de la rendre
la plus performante possible, et éviter aux humains ainsi qu'aux robots d'indexation de se perdre, il est nécessaire de
viser la simplicité avec une architecture horizontale plutôt que verticale.

![ Schéma d'une bonne architecture.](/images/bonne_architecture.jpg)

Ainsi, en suivant une architecture horizontale, nous facilitons le travail d'indexation des pages de notre site en
offrant un schéma logique et cohérent, tout en permettant quatre choses.

Premièrement, l'architecture horizontale permet d'éviter d'avoir des pages qui se retrouvent dans les profondeurs du
site, c'est-à-dire
à [plus de quatre clics de la page d'accueil](https://www.searchenginejournal.com/google-click-depth-matters-seo-url-structure/256779/).

Deuxièmement, comme nous l'avons vu dans la partie sur les liens internes, l'autorité d'une page est transmise de lien
en lien. Ainsi, plus la page est éloignée de la page d'accueil (qui a généralement le plus d'autorité) moins la page
récoltera d'autorité venant de celle-ci, car l'autorité venant de la page d'accueil aura été dissoute sur toutes les
pages menant à la page éloignée. Une architecture horizontale permet alors de mieux distribuer l'autorité d'une page à
une autre, tout en évitant de dissoudre l'autorité en passant par de trop nombreuses pages.

Troisièmement, ce type d'architecture permet d'éviter l'erreur courante des pages orphelines. Ce sont des pages qui
existent sur le site mais qui ne sont liées à aucune autre page par un lien interne. Ainsi, elles sont très peu, voire
pas du tout, indexées, car elles sont quasi introuvables par les robots d'indexation.

Quatrièmement, l'architecture horizontale permet de développer des groupes thématiques. Un groupe thématique est composé
d'une page pilier (ou contenu principal) et de pages enfants (ou contenus de groupes). Selon HubSpot, la page pilier "
[couvre tous les aspects d'un sujet donné sur une seule page et propose des liens vers des articles plus approfondis](https://blog.hubspot.fr/marketing/page-pilier-strategie-seo)"
qui sont les contenus de groupe.

![Exemple d'une architecture en groupes thématiques](/images/architecture_groupe_thematique.png)

![Exemple d'un groupe thématique](/images/groupe_thematique.png)

Par conséquent, comme nous l'avons expliqué précédemment, grâce aux liens internes entre les pages du groupe thématique,
lorsqu'une page remonte dans les résultats de recherche, son autorité sera distribuée. Cela permet ainsi de faire
remonter toutes les pages du même groupe dans les résultats de recherche.

Par exemple, pour Coursier Job, nous avons défini un groupe thématique pour "devenir coursier". Il est composé de la
page pilier "Comment devenir coursier ?" et d'une dizaine de pages enfants comme "Démarches pour devenir
micro-entrepreneur" ou encore "Choisir de devenir coursier à vélo, en scooter ou en voiture".

## Être rapide comme l'éclair

Comme nous l'avons évoqué dans l'état de l'art, la rapidité d'un site internet est un critère de référencement
depuis 2018. Toutefois, au-delà de cette information, il est intéressant de comprendre pourquoi la rapidité est devenue
un critère de référencement.

Premièrement, lorsque nous avons parlé du budget de crawl, nous avons vu que plus un site est rapide, plus son budget de
crawl sera élevé et donc plus les robots d'indexation pourront le parcourir.

Deuxièmement, avoir un site rapide et performant permet d'améliorer l'expérience utilisateur globale et donc
d'améliorer [des chiffres clés](https://developers.google.com/web/fundamentals/performance/why-performance-matters)
comme le temps passé sur le site, le taux de conversion, le nombre de pages par sessions ou encore le taux de rebond.
Par conséquent, le temps (de chargement), c'est de l'argent.

Troisièmement, la dernière raison qui fait que Google pousse de plus en plus pour que les sites soient rapides est une
question d'argent. En effet, si les robots d'indexation passent moins de temps sur un site, cela leur coûte moins cher
en ressources et donc en argent. De plus, ce temps gagné peut alors être utilisé pour indexer encore plus de sites et
donc générer plus de revenus.

Ainsi, pour Coursier Job, nous utilisons des techniques modernes (PWA, CDN, pages statiques, Lazyloading ...) permettant
d'avoir un site rapide et optimisé.

## Faire un fichier sitemap.xml

Un sitemap est un fichier au format XML qui est lu par les robots d'indexation. Il permet de répertorier, à un seul
endroit, tous les liens des pages et médias (images, vidéo, PDF …) d'un site.

![Exemple d'un sitemap.xml de Coursier Job](/images/sitemap.png)

Pour les petits sites, même si c'est l'une des premières bonnes pratiques SEO, le sitemap n'est pas forcément pertinent,
car les robots d'indexation ne devraient pas avoir de mal à trouver et indexer toutes les pages du site.

Cependant, pour les sites ayant une grande quantité de pages, où le maillage interne n'est pas forcément bon et où peu
de liens externes pointent vers celui-ci, sans un sitemap, les robots d'indexation peuvent passer à côté de nombreuses
pages.

Finalement, peu importe la taille du site et la qualité de son maillage interne, il est recommandé de faire un sitemap.
De nos jours, la plupart des CMS ont des outils intégrés pour générer et maintenir à jour des sitemaps automatiquement.
C'est le cas pour Coursier Job. Ainsi, grâce à ces outils, à part les réglages de base, le sitemap ne demande aucune
intervention humaine.

## Avoir un fichier robots.txt

Le fichier robots.txt est un fichier texte qui donne des directives aux robots d'indexation, notamment sur ce qu'ils ont
le droit de parcourir (et donc d'indexer) ou non, et qui permet de spécifier où se trouve le fichier sitemap.xml.

![Exemple d'un robots.txt de Coursier Job](/images/robots.png)

Les directives de parcours données, via le fichier robots.txt, aux robots d'indexation permettent trois choses.

Premièrement, elles offrent la possibilité de ne pas gaspiller le budget de crawl. En effet, comme évoqué précédemment,
dans la sous-partie sur le budget de crawl, il peut être pertinent d'empêcher l'indexation de certaines parties d'un
site. Par exemple, comme vous pouvez le voir sur la figure ci-dessus, le blocage de l'indexation du moteur de recherche
interne d'un site se fait grâce à la directive "Disallow: /recherche/".

Deuxièmement, il permet de bloquer l'indexation de pages non-publiques comme des pages de connexions ou des pages
sensibles qui n'ont rien à faire sur un moteur de recherche.

Troisièmement, le fichier robots.txt peut permettre d'éviter d'indexer des ressources médias inutiles comme des PDF ou
des images.

Ainsi, tout comme le sitemap.xml, le fichier robots.txt est indispensable pour avoir une base saine en SEO. Il est très
facile à implémenter car tout comme le sitemap.xml, la plupart des CMS disposent d'outils intégrés pour gérer ce
fichier.

## Sécuriser avec HTTPS

Désormais, avoir un site internet avec HTTPS fait partie, non seulement de la base du web, mais aussi du minimum à avoir
pour commencer à être référencé. En effet, dès 2014, Google a annoncé que le fait qu'un site soit
en [HTTPS était un signal positif pour le référencement](https://security.googleblog.com/2014/08/https-as-ranking-signal_6.html).

Cela étant dit, l'impact direct du HTTPS sur le SEO reste très relatif car maintenant la vaste majorité des sites
internet sont passés en HTTPS. Toutefois, avoir un site sécurisé avec HTTPS peut avoir un effet bénéfique sur
l'internaute et indirectement sur le SEO.

En effet, cela permet au visiteur d'être mis en confiance, car désormais lorsqu'un site n'est pas en HTTPS, il est
affiché comme étant "non sécurisé" sur la plupart des navigateurs. Ainsi, si un site est affiché comme étant "non
sécurisé", un visiteur aura tendance à quitter le site web. Or, si Google s'aperçoit que le visiteur quitte le site
après seulement quelques secondes, cela sera interprété comme un mauvais signal qui pourra négativement affecter le
référencement.

Ainsi, avoir un site en HTTPS peut non seulement améliorer le SEO mais aussi l'expérience utilisateur. C'est pourquoi,
sur Coursier Job, depuis ses débuts, le site a toujours été en HTTPS.

![Affichage dans Google Chrome d'un site sécurisé avec HTTPS.](/images/https.png)

## Adapter ses URLs pour le SEO

Construire son site avec des URLs simples, c'est-à-dire qui ont une structure logique, courte, et
avec des mots plutôt que des identifiants,
est [recommandé par Google](https://support.google.com/webmasters/answer/7451184?hl=en).

En réalité, Google recommande surtout cela d'un point de vue expérience utilisateur. Mais, d'un point de vue SEO, ces
recommandations sont aussi intéressantes. En effet, [avoir des URLs courtes est corrélé au fait d'être mieux classé dans
les résultats de recherches](https://backlinko.com/search-engine-ranking), et utiliser le terme-clé cible de notre page
dans une URL augmente
les chances
de [mieux se classer dans les moteurs de recherche](https://cognitiveseo.com/blog/11701/title-influence-on-rankings/).
Ainsi, il est donc important de
bien construire les URLs de ses pages pour, encore une fois, augmenter ses chances de mieux se référencer.

Par exemple, pour Coursier Job, nous avons construit les URLs suivantes qui sont claires, courtes et qui utilisent les
termes-clés :

- /devenir-coursier/
- /devenir-coursier/devenir-coursier-micro-entrepreneur/
- /devenir-coursier/acre-coursier/

## Optimiser pour le mobile

Comme nous l'avons évoqué dans l'état de l'art, Google indexe désormais le web en "mobile first", c'est-à-dire en
vue
mobile. Il est donc important d'avoir un site internet aussi bien conçu pour un ordinateur que pour un appareil mobile.
Ainsi, afin d'adapter son site pour les deux types d'appareils, il existe trois techniques.

### Sous-domaine

La première technique consiste à avoir un sous-domaine en "m." ("m" pour mobile). Concrètement, lorsqu'un
visiteur
charge la page, nous déterminons le type d'appareil qu'il utilise. Si c'est un ordinateur, il est redirigé vers le site
classique, si c'est un mobile, il est redirigé vers le site mobile.

Cependant, cette solution est problématique, car qui dit deux versions du site, dit deux fois plus de travail et donc
deux fois plus de chance de faire des erreurs, surtout d'un point de vue SEO. En effet, si le site n'est pas
correctement réglé, étant donné que le contenu est similaire sur deux URLs distinctes, les moteurs de recherche peuvent
interpréter cela comme du contenu dupliqué. Or, le contenu dupliqué est pénalisé par les moteurs de recherche car il est
considéré comme étant du contenu de mauvaise qualité.

Finalement, cette technique était populaire au début de l'apparition des smartphones mais est de moins en moins utilisée
pour les raisons évoquées ci-dessus.

### Affichage dynamique

La deuxième technique se nomme l'affichage dynamique. Cette technique consiste à servir au visiteur différentes
variantes du code HTML et CSS en fonction du type d'appareil qu'il utilise.

Néanmoins, avec cette technique, la charge de travail reste élevée, car il est toujours nécessaire de maintenir une
multitude de versions différentes. De plus, d'un point de vue SEO, c'est une meilleure technique que le sous-domaine,
car tout se passe sur la même URL et nous évitons donc la problématique du contenu dupliqué. Cependant, les robots
d'indexation devront tout de même multiplier les passages sur le site pour pouvoir indexer les différentes versions
d'une page. Cela impactera donc négativement le budget de crawl.

Finalement, cette technique peut être utile dans des cas très spécifiques comme dans une application où les robots
d'indexation ne peuvent pas parcourir les pages.

### Design adaptatif

La dernière technique, qui
est [recommandée par Google](https://developers.google.com/search/mobile-sites/mobile-seo/responsive-design), pour qu'un
site soit adapté à chaque appareil est de coder en "design adaptatif". Concrètement, c'est une technique qui permet
de
coder une page HTML unique mais dont le rendu est adapté à tous les appareils grâce au CSS.

Non seulement, c'est la technique qui demande le moins de travail et qui est la plus simple à mettre en place, mais
c'est aussi la plus adaptée pour le référencement. En effet, avec le design adaptatif, il suffit d'une seule exploration
des robots d'indexation pour avoir connaissance de toutes les versions différentes du site. C'est donc parfait pour
minimiser l'impact sur le budget de crawl.

Ainsi, le design adaptatif est la technique à privilégier lorsque nous souhaitons adapter un site internet à tous les
types d'appareils.

Dans le cas de Coursier Job, c'est particulièrement important que le site soit parfaitement adapté au mobile, car 75 %
des sessions du site sont réalisées sur celui-ci.

![Répartition des sessions en fonction du type d'appareil](/images/sessions_par_type_appareil.png)

## Rich Snippets

Les "Rich Snippets" sont des résultats de recherches qualifiés de riches, car ils comportent plus d'informations
qu'un résultat classique. À l'heure actuelle, il existe une trentaine
de [Rich Snippets](https://developers.google.com/search/docs/guides/search-gallery) différents comme les articles, les
livres, les notes ou encore les extraits d'avis.

![Exemple de Rich Snippet pour la recherche "recette de cookie".](/images/resultat_cookie.png)

Exemple de Rich Snippet pour la recherche "recette de cookie".

Afin de générer ces Rich Snippets, les moteurs de recherche se servent des données structurées qui sont un format
normalisé permettant de fournir des informations sur une page et son contenu.

![Exemple de données structurées.](/images/donnees_structurees.png)

Concrètement, les données structurées permettent aux webmasters de prémâcher le travail des robots d'indexation en leur
fournissant des données facilement exploitables. Comme nous l'avons évoqué précédemment, plus le travail des robots
d'indexation est facilité, plus le site est apprécié par ces mêmes robots. Cependant, Google a clarifié la chose en
annonçant
que [l'utilisation des données structurées n'est pas un critère de classement](https://www.seroundtable.com/google-structured-data-ranking-factor-25510.html)
dans les résultats de recherches.

De plus, comme vous pouvez l'observer sur la figure ci-dessus, les Rich Snippets ressemblent aux "Featured
Snippets".
L'explication est simple, car, en réalité, un Featured Snippet est un Rich Snippet qui a la particularité d'être
uniquement en position zéro et qui ne nécessite pas forcément de données structurées pour être généré par les moteurs de
recherche.

Par conséquent, qu'il soit Featured ou Rich, un Snippet prend plus de place dans les résultats de recherches permettant
ainsi d'attirer plus l'œil et d'augmenter le CTR. Par ailleurs, en facilitant le travail des robots d'indexation, les
données structurées permettent d'améliorer le référencement naturel de manière indirecte.

## Synthèse

Durant cette sous-partie dédiée à la technique, qui est le second pilier du référencement naturel, nous avons tout
d'abord défini ce qu'était la technique dans le SEO, à savoir répondre aux exigences techniques des moteurs de
recherche.

Ensuite, nous avons compris le principe du budget de crawl qui est, en quelque sorte, le total des ressources que les
moteurs de recherche allouent à l'indexation d'un site. Il a un lien étroit avec l'architecture d'un site, car celle-ci
doit rester cohérente, sans être trop profonde, afin de ne pas gaspiller ce fameux budget et de maximiser le transfert
d'autorité entre les pages.

Puis, nous avons expliqué différents facteurs techniques impactant le référencement naturel comme l'importance d'avoir
un site rapide, d'avoir un fichier sitemap.xml complet, de bien paramétrer son fichier robots.txt, d'activer la
sécurisation du site avec HTTPS ou le fait d'avoir des URLs adaptées lisible pour un humain.

Finalement, nous avons vu qu'il fallait construire des URLs courtes, simples et utilisant le terme-clé pour favoriser le
SEO. Nous avons aussi compris pourquoi il faut optimiser son site pour le mobile en mettant en place un design adaptatif
et nous avons démontré l'importance d'utiliser des données structurées pour faciliter le travail des robots
d'indexation.
