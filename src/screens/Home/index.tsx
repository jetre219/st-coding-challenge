import './Home.css';

import React, { useEffect, useState } from 'react';

import {
  Leaf,
  sortCategoriesForInsert,
} from '../../service/sortCategoriesForInsert';
import { emptyTree } from '../../service/trees/emptyTree';
import { multipleEntryPointsTree } from '../../service/trees/multipleEntryPointsTree';
import { simpleTree } from '../../service/trees/simpleTree';
import { Button } from '../../shared/Button';
import { TextInput } from '../../shared/TextInput';
import { Tree } from './Tree';

const SIMPLE_TREE_NAME = 'Simple tree';
const EMPTY_TREE_NAME = 'Empty tree';
const MULTIPLE_ROOT_TREE_NAME = 'Tree with multiple root';

export const DEFAULT_TREES = [
  { tree: simpleTree, name: SIMPLE_TREE_NAME },
  { tree: emptyTree, name: EMPTY_TREE_NAME },
  { tree: multipleEntryPointsTree, name: MULTIPLE_ROOT_TREE_NAME },
];

export const Home: React.FC = () => {
  const [selectedTree, setSelectedTree] = useState<Leaf[]>(simpleTree);
  const [rootLeaves, setRootLeaves] = useState<Leaf[]>([]);
  const [inputHasError, setInputHasError] = useState<boolean>(false);

  useEffect(() => {
    setRootLeaves(selectedTree.filter((leaf) => leaf.parent_id === null));
  }, [selectedTree]);

  const setTree = (newTree: Leaf[]) => () => {
    setSelectedTree(newTree);
  };

  const onJSONChange = (jsonAsString: string) => {
    if (!jsonAsString) {
      setSelectedTree(simpleTree);
      setInputHasError(false);
      return;
    }

    try {
      const json = JSON.parse(jsonAsString);
      const formattedJson = sortCategoriesForInsert(json);
      setSelectedTree(formattedJson);

      setInputHasError(false);
    } catch (error) {
      setInputHasError(true);
    }
  };

  return (
    <div className="home-container">
      <h2>Welcome to Shop Token front-end challenge</h2>
      <h3>
        You may select one of the three pre-built JSON or enter your own. If
        there's an error while parsing or sorting the tree in the input field,
        the input border will become red.
      </h3>
      <div className="buttons-container">
        {DEFAULT_TREES.map(({ name, tree }) => (
          <Button key={name} onClick={setTree(tree)} label={name} />
        ))}
      </div>
      <TextInput
        placeholder="Enter your own JSON"
        onTextChange={onJSONChange}
        hasError={inputHasError}
      />
      <div className="tree-container">
        {rootLeaves.map((rootLeaf) => (
          <Tree key={rootLeaf.id} tree={selectedTree} leaf={rootLeaf} />
        ))}
      </div>
    </div>
  );
};
