import React from "react";

export const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map((book, id) => (
        <li key={id}>
          {" "}
          {book.title} link: {book.link}
        </li>
      ))}
    </ul>
  );
};
