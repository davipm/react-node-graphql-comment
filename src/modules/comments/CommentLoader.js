import Comment from "./CommentModel";

export async function saveComment(_, { input }) {
  return Comment.create(input);
}

export async function getComments() {
  return await Comment.find().sort({ createdAt: -1 })
}

export async function deleteComments(_, { id }) {
  return await Comment.findByIdAndDelete(id);
}
