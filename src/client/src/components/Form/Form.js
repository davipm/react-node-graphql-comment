import React, { useReducer } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const SAVE_COMMENT = gql`
  mutation save($input: CommentInput) {
    saveComment(input: $input) {
      id
    }
  }
`;

const initial = {
  name: "",
  content: "",
};

function Form({ onAddComment }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initial
  );

  const [addComment] = useMutation(SAVE_COMMENT, {
    variables: {
      input: {
        name: userInput.name,
        content: userInput.content,
      },
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await addComment();
    setUserInput(initial);
    onAddComment();
  }

  function handleChange(event) {
    setUserInput({ [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={userInput.name}
        required
      />
      <textarea
        name="content"
        id="comment"
        cols="30"
        rows="10"
        placeholder="Your Comment"
        onChange={handleChange}
        value={userInput.content}
        required
      />
      <button type="submit">Send Comment</button>
    </form>
  );
}

export default Form;
