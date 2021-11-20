import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Leaf } from '../../service/sortCategoriesForInsert';
import { simpleTree } from '../../service/trees/simpleTree';
import { DEFAULT_TREES, Home } from './index';

const VALID_TREE: Leaf[] = [
  {
    name: 'A',
    id: 1,
    parent_id: null,
  },
  {
    name: 'B',
    id: 10,
    parent_id: 1,
  },
  {
    name: 'C',
    id: 20,
    parent_id: 1,
  },
  {
    name: 'D',
    id: 100,
    parent_id: 10,
  },
  {
    name: 'E',
    id: 200,
    parent_id: 10,
  },
];

const INVALID_TREE: { test: boolean } = { test: true };

const VALID_TREE_AS_STRING = JSON.stringify(VALID_TREE);
const INVALID_TREE_AS_STRING = JSON.stringify(INVALID_TREE);
const INVALID_STRING = 'sss';

const expectAllNamesFromTree = (tree: Leaf[]) => {
  tree.forEach((leaf) => {
    const listItems = screen.getAllByText(leaf.name);
    expect(listItems.length).toBeGreaterThan(0);
  });
};

test.each(DEFAULT_TREES)(
  'given home screen, when pressing $name button, then displays valid tree',
  ({ name, tree }) => {
    render(<Home />);

    const simpleTreeButton = screen.getByText(name);
    fireEvent.click(simpleTreeButton);

    expectAllNamesFromTree(tree);
  },
);

test('given home screen, when entering valid json string, then displays tree', () => {
  render(<Home />);

  const treeInput = screen.getByPlaceholderText('Enter your own JSON');
  fireEvent.change(treeInput, { target: { value: VALID_TREE_AS_STRING } });

  expectAllNamesFromTree(VALID_TREE);
});

test('given home screen, when entering invalid json string, then display error', () => {
  render(<Home />);

  const treeInput = screen.getByPlaceholderText('Enter your own JSON');
  fireEvent.change(treeInput, { target: { value: INVALID_TREE_AS_STRING } });

  expect(treeInput.className).toContain('shared-text-input-error');
});

test('given home screen, when entering invalid string, then display error', () => {
  render(<Home />);

  const treeInput = screen.getByPlaceholderText('Enter your own JSON');
  fireEvent.change(treeInput, { target: { value: INVALID_STRING } });

  expect(treeInput.className).toContain('shared-text-input-error');
});

test('given home screen, when entering json then empty string, displays simple tree', () => {
  render(<Home />);

  const treeInput = screen.getByPlaceholderText('Enter your own JSON');
  fireEvent.change(treeInput, { target: { value: VALID_TREE_AS_STRING } });
  fireEvent.change(treeInput, { target: { value: '' } });

  expectAllNamesFromTree(simpleTree);
});
