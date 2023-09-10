"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import ChevronDownIcon from "../public/images/chevron-down.svg";

export default memo(function TableOfContent() {
  const [isOpen, setIsOpen] = useState(false);
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
      <ol className={"body body-1 toc ml-5"}>
        {headings.map((item, index) => {
          if (item.childrens.length > 0) {
            return (
              <li key={`nested-${index}-${item.id}`}>
                <Link
                  href={`#${item.id}`}
                  className={
                    "link link-secondary no-underline mb-2 inline-flex"
                  }
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
                  className={
                    "link link-secondary no-underline mb-2 inline-flex"
                  }
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
    <nav
      aria-label="Sommaire"
      className={`border-hatch mb-14 pr-5 py-5 border-[12px] rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out`}
    >
      <div className={"flex justify-between items-center ml-5"} id={"sommaire"}>
        <div className={"surtitle surtitle-1"}>Sommaire</div>
        <button
          aria-expanded={isOpen}
          className={`btn btn-icon-secondary `}
          aria-controls={"sommaire-liste"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDownIcon
            className={`transition ease-in-out duration-300 ${
              isOpen ? "-rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {/*// Add transition headlessUI to hide element when not shown*/}
      <div
        id={"sommaire-list"}
        role="region"
        aria-labelledby="sommaire"
        aria-hidden={!isOpen}
        className={`toc mt-5 grid transition-[grid-template-rows] ease-in-out duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={"overflow-hidden"}>{renderToc(headings)}</div>
      </div>
    </nav>
  );
});
