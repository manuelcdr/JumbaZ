const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chamadadb', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
});

server.start();