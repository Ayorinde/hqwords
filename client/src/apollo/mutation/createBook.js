import gql from "graphql-tag";

export default gql`
  mutation createBook($title: String!, $description: String! $artwork: String) {
        createBook(input: {
          title:$title, description: $description, artwork: $artwork})
    {
            title, description, artwork}
    }
`;