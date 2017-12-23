import React from 'react';
import ReactDOM from 'react-dom';
import SplitFlexItem from '../SplitFlexItem';

describe('SplitFlexItem component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SplitFlexItem />, div);
  });
})