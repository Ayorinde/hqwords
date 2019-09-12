export const bookFragment = {
    book: gql`
      fragment BookFragment on Book {
        _id, title, description, authorName, price, artwork
        user {
          username
          email
          lastName
          firstName
        }
      }
    `
  }