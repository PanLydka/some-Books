import React from "react";
import { shallow } from "enzyme";

import { BooksList } from "../components/BooksList";

const books = [
  {
    id: 1,
    title: "book1",
    link: "link1"
  },
  {
    id: 2,
    title: "book2",
    link: "book2"
  }
];

it("show list of books ", () => {
  const booksList = shallow(<BooksList books={books} />);
  expect(booksList.find("li").length).toEqual(books.length);
});

it("show button for each book", () => {
  const booksList = shallow(<BooksList books={books} />);
  expect(booksList.find("button").length).toEqual(books.length);
});

describe("list of books", () => {
  const booksList = shallow(<BooksList books={books} />);
  books.forEach(book => {
    it(`includes book ${book.title},${book.link} and ${
      book.id
    } on the list`, () => {
      expect(
        booksList.containsMatchingElement(
          <li>
            {book.title} link: {book.link}{" "}
            <button id={book.id}> &#10006; </button>
          </li>
        )
      );
    });
  });
});
