import { books } from "../reducers/books";
import * as types from "../actions/index";

describe("books reducer", () => {
  it("should return the initial state", () => {
    expect(books(undefined, {})).toEqual([]);
  });
});
