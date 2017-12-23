import React from 'react';
import ReactDOM from 'react-dom';
import SplitFlexView from '../SplitFlexView';

describe('SplitFlexView component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SplitFlexView />, div);
  });
})