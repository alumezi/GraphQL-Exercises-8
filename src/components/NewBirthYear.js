import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";

const NewBirthYear = ({ authors }) => {
  const [name, setName] = useState(authors[0]?.name ?? "");
  const [born, setBorn] = useState("");
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      alert(error.graphQLErrors[0].message);
    },
  });

  const submit = async (event) => {
    event.preventDefault();
    editAuthor({ variables: { name, born } });
    setBorn("");
  };

  const handleSelect = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          name
          <select value={name} onChange={handleSelect}>
            {authors.map((item) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          born
          <input
            value={born}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default NewBirthYear;
