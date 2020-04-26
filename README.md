This is a starter template for [Next.js](https://nextjs.org/) and [Graphql](https://graphql.org/) [Apollo Server](https://www.apollographql.com/).

## Starting the project in Development mode

Run the following script for concurrently starting `graphql server` and `next.js` application

```bash
yarn dev
```

Open [http://localhost:4000/graphql](http://localhost:4000/graphql) with your browser to see the graphiQL interface.

You can perform queries and mutations using this GUI

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

---

## What you get with this starter template

##### With this starter template you get following features

- This starter template comes with the apollo configured for using graphql in next.js application.
- A complete user authentication with graphql server at the backend and sample protected routes in the next.js application.
- Higher order component [withAuth](https://github.com/blurry-x-face/Nextjs-Graphql-Starter-Template/blob/master/client/components/withAuth.jsx), you can wrap thi HOC around any component for authenthicating if the user is logged-in.
- By wrapping a component with [withAuth](https://github.com/blurry-x-face/Nextjs-Graphql-Starter-Template/blob/master/client/components/withAuth.jsx) HOC you get `{isAuth: Boolean!, user: Object!}` as a prop to the child component.
- The project uses authentication header for sending token to verify if the user is logged in although it can be changed if you want to send cookies instead to verify users, for this you have to just make some changes to [with-appollo-client.js](https://github.com/blurry-x-face/Nextjs-Graphql-Starter-Template/blob/master/client/lib/with-apollo-client.js).

##### Graphql features that you get wth this project
- You can create/update a user, the databas used is `MongoDB` although it can be changed easily.
- You can login/register with `email` and `password`, the password is stored as a hash using `Bcrypt.js`.
- You can also listen for events such as when the user is created using `subscription`.

##### Next.js features
- `Next.js` comes with Apollo fully configured.
- It comes with a withAuth HOC.
- It also has [Material-UI](https://material-ui.com/) preconfigured so you can easily start building beautiful UI using this library

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Graphql](https://graphql.org/learn/)
- [Apollo Sever](https://www.apollographql.com/docs/apollo-server/)
