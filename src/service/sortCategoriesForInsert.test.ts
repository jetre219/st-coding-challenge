import { Leaf, sortCategoriesForInsert } from './sortCategoriesForInsert';
import { emptyTree } from './trees/emptyTree';
import { multipleEntryPointsTree } from './trees/multipleEntryPointsTree';
import { simpleTree } from './trees/simpleTree';

const assertParentsAreInsertedBeforeChild = (leaves: Leaf[]) => {
  leaves.forEach((leaf, index) => {
    if (!leaf.parent_id) {
      return;
    }

    const parentIndex = leaves.findIndex(
      (parentLeaf) => parentLeaf.id === leaf.parent_id,
    );
    expect(index).toBeGreaterThan(parentIndex);
  });
};

describe('sortTreeForInsert', () => {
  it.each([
    { tree: emptyTree, name: 'empty tree' },
    { tree: simpleTree, name: 'simple tree' },
    { tree: multipleEntryPointsTree, name: 'tree with multiple entry points' },
  ])(
    'given $tree when sorting it then put all parents before child',
    ({ tree }) => {
      const sortedTree = sortCategoriesForInsert(tree);
      assertParentsAreInsertedBeforeChild(sortedTree);
    },
  );
});
