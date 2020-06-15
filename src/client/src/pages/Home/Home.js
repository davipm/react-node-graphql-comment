import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Comment from "../../components/Comment";
import Form from "../../components/Form";

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`;

const DELETE_COMMENTS = gql`
  mutation DeleteComment($id: String!) {
    deleteComments(id: $id) {
      id
    }
  }
`;

function Home() {
  const { loading, data, error, refetch } = useQuery(GET_COMMENTS);
  const [deleteComment] = useMutation(DELETE_COMMENTS);

  function handleAddComment() {
    refetch();
  }

  function handleDelete(id) {
    deleteComment({ variables: { id } });
    refetch();
  }

  if (error) return "Error...";

  return (
    <section className="section-home">
      <h1>Tell me your comment</h1>
      <Form onAddComment={handleAddComment} />
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div className="comment-content">
          {data.comments.map(({ id, name, content }) => (
            <Comment
              key={id}
              id={id}
              name={name}
              description={content}
              onClick={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
