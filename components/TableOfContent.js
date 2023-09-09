"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import CardEffect from "./CardEffect";

export default memo(function TableOfContent() {
  const [headings, setHeadings] = useState([]);
  let shownHeadings = [];

  useEffect(() => {
    const getTocStructure = (headingsNodes) => {
      // Get heading level from node name
      const getHeadingLevel = (node) => {
        return parseInt(node.nodeName.substring(1));
      };

      // Find closest ancestor heading
      const findAncestorHeading = (nodes, index, level) => {
        return nodes
          .slice(0, index)
          .find((node) => getHeadingLevel(node) === level - 1)?.id;
      };

      // Get headings
      const getHeadings = (nodes) => {
        return nodes.map((node, index) => {
          const level = getHeadingLevel(node);
          const parentId = findAncestorHeading(nodes, index, level);

          return {
            parentId,
            text: node.innerText,
            id: node.id,
            childrens: [],
          };
        });
      };

      // Attach child to parent
      const attachChild = (child, parent) => {
        return parent.childrens.push(child);
      };

      // Recursively attach child nodes
      const attachChildren = (nodes, parent) => {
        return nodes.forEach((node) => {
          if (node.parentId === parent.id) {
            attachChild(node, parent);
            attachChildren(nodes, node);
          }
        });
      };

      // Build nested structure
      const nest = (nodes) => {
        const nested = [];

        nodes.forEach((node) => {
          if (!node.parentId) {
            delete node.parentId;
            nested.push(node);
            attachChildren(nodes, node);
          }
        });

        return nested;
      };

      return nest(getHeadings([...headingsNodes]));
    };

    const titlesNodes = document.querySelectorAll(
      "article h2, article h3, article h4, article h5, article h6"
    );

    setHeadings(getTocStructure(titlesNodes));
  }, []);

  function renderToc(headings) {
    return (
      <ol className={"body body-1 ml-5"}>
        {headings.map((item, index) => {
          if (item.childrens.length > 0) {
            return (
              <li key={`nested-${index}-${item.id}`}>
                <Link
                  href={`#${item.id}`}
                  className={"link link-primary mb-1 inline-flex"}
                >
                  {item.text}
                </Link>
                {renderToc(item.childrens)}
              </li>
            );
          } else {
            return (
              <li key={`nested-${index}-${item.id}`}>
                <Link
                  href={`#${item.id}`}
                  className={"link link-primary mb-1 inline-flex"}
                >
                  {item.text}
                </Link>
              </li>
            );
          }
        })}
      </ol>
    );
  }

  return (
    <CardEffect as={"nav"} aria-label="Sommaire" className={"py-5 pr-5 mb-14"}>
      <div className={"surtitle surtitle-1 ml-5 mb-2"}>Sommaire</div>
      {renderToc(headings)}
    </CardEffect>
  );
});
