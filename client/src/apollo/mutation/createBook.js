import gql from "graphql-tag";

export default gql`
  mutation createBook($title: String!, $description: String!, 
  $artwork: String, $price: String, $authorName: String) {
        createBook(input: {
          title:$title, description: $description, 
          artwork: $artwork, price: $price, authorName: $authorName})
    {
            title, description, artwork, price, authorName}
    }
`;