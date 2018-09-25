import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ConnectedApp, { App } from "./../App";
import { BooksList } from "../components/BooksList";
import NewBookForm from "../components/NewBookForm";

const initialState = {};
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(<ConnectedApp store={store} />).dive();
});

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders conected without crashing", () => {
  shallow(<wrapper />);
});

it("includes BooksList", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<BooksList />)).toEqual(true);
});

it("includes NewBookForm", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<NewBookForm />)).toEqual(true);
});
