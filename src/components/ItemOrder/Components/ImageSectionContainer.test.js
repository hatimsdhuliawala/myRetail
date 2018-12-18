import React from 'react';
import ReactDOM from 'react-dom';
import ImageSectionContainer from './ImageSectionContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageSectionContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
