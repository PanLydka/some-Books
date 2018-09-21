import React from "react";

export const BooksList = ({ books, removeBook }) => {
  return (
    <ul>
      {books.map((book, id) => (
        <li key={id}>
          {" "}
          {book.title} link: {book.link}{" "}
          <button id={book.id} onClick={removeBook}>
            &#10006;
          </button>
        </li>
      ))}
    </ul>
  );
};
