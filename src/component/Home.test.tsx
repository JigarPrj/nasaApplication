import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import Home from './Home';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "../reducers/reducer";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const middleware = [thunk, promise];

const store = createStore(
  combineReducers(),
  composeEnhancers(applyMiddleware(...middleware))
);

test('Should home render', () => {
  render(
  <Provider store={store}>
  <Home />
  </Provider>
  );
  const homeElement = screen.getByTestId('html-element')
  expect(homeElement).toBeInTheDocument()
});

test('home render', () => {
  render(
  <Provider store={store}>
  <Home />
  </Provider>
  );
  const homeElement = screen.getByPlaceholderText('Enter Asteroid ID')
  expect(homeElement).toBeInTheDocument()
});

test('render home', () => {
  render(
  <Provider store={store}>
  <Home />
  </Provider>
  );
  const homeElement = screen.getByText('Random Asteroid')
  expect(homeElement).toBeInTheDocument()
});