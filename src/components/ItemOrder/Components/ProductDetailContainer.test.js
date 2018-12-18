import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetailContainer from './ProductDetailContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductDetailContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
