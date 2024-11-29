export const typeDefs = `#graphql
  
  type Dinosaur {
    id: ID!
    name: String!
    type: String!
  }

  type Query{
    getDinosaurs: [Dinosaur!]!
    getDinoFamily(type:String!): [Dinosaur!]!
    getDinosaur(id:ID!): Dinosaur

  }

  type Mutation{
    addDinosaur(name: String!, type: String!): Dinosaur!
    updateDinosaur(id: ID!,name: String!, type: String!): Dinosaur
    deleteDinosaur(id: ID!): Dinosaur
  }

`;
