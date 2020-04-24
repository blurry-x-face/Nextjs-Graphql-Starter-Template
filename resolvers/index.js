const { UserMutation, UserQueries, UserSubscription } = require('./user');

const rootResolver = {
  Query: {
    ...UserQueries
    // Add other queries here
  },
  Mutation: {
    ...UserMutation
    // Add other mutations here
  },
  Subscription: {
    ...UserSubscription
    // Add other subscriptions here
  }
};

module.exports = rootResolver;
