export type Leaf = {
  name: string;
  id: number;
  parent_id: number | null;
};

type Tree = { [parentId: number]: Leaf[] };

const ROOT_DEFAULT_ID = 0;

export const sortCategoriesForInsert = (leaves: Leaf[]): Leaf[] => {
  const tree: Tree = {};

  leaves.forEach((leaf) => {
    const parentId = leaf.parent_id || ROOT_DEFAULT_ID;
    tree[parentId] ? tree[parentId].push(leaf) : (tree[parentId] = [leaf]);
  });

  return getSortedLeaves(ROOT_DEFAULT_ID, tree);
};

const getSortedLeaves = (parentId: number, tree: Tree): Leaf[] => {
  const childLeaves = tree[parentId];

  if (!childLeaves) {
    return [];
  }

  const leaves: Leaf[][] = childLeaves.map((leaf) => [
    leaf,
    ...getSortedLeaves(leaf.id, tree),
  ]);
  return flattenLeaves(leaves);
};

const flattenLeaves = (toFlattenLeaves: Leaf[][]): Leaf[] => {
  const flattenedLeaves: Leaf[] = [];
  toFlattenLeaves.forEach((leaves) => flattenedLeaves.push(...leaves));
  return flattenedLeaves;
};

export {};
