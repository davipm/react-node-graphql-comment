import React from "react";

function Comment({ id, name, description, onClick }) {
  return (
    <div className="comment">
      <div className="comment__content">
        <p className="comment__name">Name: {name}</p>
        <p>{description}</p>
      </div>

      <div className="comment__action">
        <button onClick={() => onClick(id)}>X</button>
      </div>
    </div>
  );
}

export default Comment;
