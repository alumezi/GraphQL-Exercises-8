import React from "react";
import NewBirthYear from "./NewBirthYear";

const Authors = ({ show, authors }) => {
  if (!show) {
    return null;
  }

  if (!authors) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <NewBirthYear authors={authors} />
    </div>
  );
};

export default Authors;
