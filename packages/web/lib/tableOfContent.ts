import { toc } from "mdast-util-toc";
import { remark } from "remark";

interface TocHeading {
  value: string;
  url: string;
}

export interface TocNode extends TocHeading {
  children: TocNode[];
}

const visitTree = (node: any, current: TocNode[]): TocNode[] => {
  if (!node) return current;

  if (node.type === "list" || node.type === "listItem") {
    return node.children.map((child: any) => visitTree(child, current)).flat();
  }

  if (node.type === "paragraph") {
    if (node.children[0].type === "link") {
    const item: TocNode = {
      value: node.children[0].children[0].value,
      url: node.children[0].url,
      children: []
    };

    if (node.children[1]) {
      item.children = visitTree(node.children[1], []);
    }

    return [item];
    }
  }

  return current;
};

const makeToc = () => (node: any, file: any) => {
  const tree = toc(node);
  const res = visitTree(tree.map, []);
  file.data = res;
};

export const getTableOfContents = async (content: string) => {
  const res = await remark().use(makeToc).process(content);
  return res.data as any as TocNode[];
};
