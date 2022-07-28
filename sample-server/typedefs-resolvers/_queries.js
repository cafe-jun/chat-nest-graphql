const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        equipments: [Equipment]
        equipmentAdvs: [EquipmentAdv]
    }
`;

module.exports = typeDefs;
