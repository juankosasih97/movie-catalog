import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/RootReducer';

const store = createStore(RootReducer);

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const linkElement = screen.getByText(/DEMO Streaming/i);
  expect(linkElement).toBeInTheDocument();
});
