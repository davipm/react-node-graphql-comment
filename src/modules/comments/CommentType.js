import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";

export default new GraphQLObjectType({
  name: "CommentType",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updateAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    oderBy: {
      type: GraphQLDateTime,
    },
  },
});
