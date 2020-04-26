const { PubSub } = require("apollo-server");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("../config");
const User = require("../models/user");
const pubsub = new PubSub();

const USER_ADDED = "USER_ADDED";

/**
 * User Queries
 */
const UserQueries = {
  users: async (parent, args, context) => {
    try {
      if (context.isAuth) {
        const users = await User.find();
        return users;
      } else {
        throw Error("You need to authenticate first");
      }
    } catch (err) {
      throw err;
    }
  },
  user: async (parent, { userId }, context) => {
    try {
      if (context.isAuth) {
        const user = await User.findById(userId);
        if (!user) throw Error("You need to authenticate first");
        return user;
      } else {
        throw Error("You need to authenticate first");
      }
    } catch (err) {
      throw err;
    }
  },
  self: async (parent, args, context) => {
    try {
      if (context.isAuth) {
        const user = await User.findById(context.userId);
        if (!user) throw Error("You need to authenticate first");
        return user;
      } else {
        throw Error("You need to authenticate first");
      }
    } catch (err) {
      throw err;
    }
  }
};

/**
 * User Mutations
 */
const UserMutation = {
  login: async (parent, { email, password }) => {
    try {
      const user = await User.findOne({ email, password });
      if (!user) {
        throw new Error("User does not Exists");
      }
      const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
        expiresIn: "1h"
      });
      console.log(user.name);
      return {
        userId: user.id,
        userName: user.name,
        token,
        tokenExpiration: 1
      };
    } catch (err) {
      throw err;
    }
  },
  createUser: async (parent, { userInput }) => {
    try {
      const user = await User.findOne({
        email: userInput.email
      });
      if (user) {
        throw new Error("User already Exists");
      } else {
        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          email: userInput.email,
          name: userInput.name,
          password: userInput.password
        });
        const savedUser = await newUser.save();
        pubsub.publish(USER_ADDED, {
          userAdded: savedUser
        });
        const token = jwt.sign({ userId: savedUser.id }, config.jwtSecret, {
          expiresIn: "1h"
        });
        return {
          userId: savedUser.id,
          token,
          tokenExpiration: 1
        };
      }
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (parent, { updateUser }, context) => {
    // If not authenticated throw error
    if (!context.isAuth) {
      throw new Error("Non Authenticated");
    }
    try {
      const user = await User.findByIdAndUpdate(context.userId, updateUser, {
        new: true
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
};

/**
 * User Subscriptions
 */
const UserSubscription = {
  userAdded: {
    subscribe: () => pubsub.asyncIterator([USER_ADDED])
  }
};

module.exports = { UserQueries, UserMutation, UserSubscription };
