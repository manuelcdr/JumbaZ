const path = require('path');
const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schemas');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chamadadb', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('servidor iniciado...'));