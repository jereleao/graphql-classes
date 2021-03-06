import { resolvers as clientResolvers } from './Client/Client';
import { resolvers as demandResolvers } from './Demand/Demand';
import { resolvers as nodeResolvers } from './Node/Node';
import { resolvers as listResolvers } from './List/List';

const resolvers = {
  ...nodeResolvers,
  ...listResolvers,
  ...clientResolvers,
  ...demandResolvers,
  Query: {
    ...demandResolvers.Query,
    ...clientResolvers.Query,
  },
  Mutation: {
    ...clientResolvers.Mutation,
  },
};

export default resolvers;
