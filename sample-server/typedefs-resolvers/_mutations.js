const { gql } = require('apollo-server');

const typeDefs = gql`
    type Mutation {
        postPerson(input: PostPersonInput): People!
        deleteEquipment(id: String): Equipment
        deleteSupply(id: String): Supply
    }
`;

console.log(typeDefs);

module.exports = typeDefs;
