import './Tree.css';

import React, { useEffect, useState } from 'react';

import { Leaf } from '../../service/sortCategoriesForInsert';

type TreeProps = {
  tree: Leaf[];
  leaf: Leaf;
  index?: number;
};

export const Tree: React.FC<TreeProps> = ({ tree, leaf, index = 0 }) => {
  const [childLeaves, setChildLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const childs = tree.filter((childLeaf) => childLeaf.parent_id === leaf.id);
    setChildLeaves(childs);
  }, [tree]);

  const padding = 16 * index;

  return (
    <ul
      className={index === 0 ? 'tree' : ''}
      style={{ padding: `0 0 0 ${padding}px` }}
    >
      <li>{leaf.name} </li>

      {childLeaves.map((childLeaf) => (
        <Tree
          key={childLeaf.id}
          tree={tree}
          leaf={childLeaf}
          index={index + 1}
        />
      ))}
    </ul>
  );
};
