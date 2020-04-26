import gql from "graphql-tag";

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query {
          self {
            _id
            name
          }
        }
      `
    })
    .then(data => {
      return { loggedInUser: data.data.self };
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} };
    });
