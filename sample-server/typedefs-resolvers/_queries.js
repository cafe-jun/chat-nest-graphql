const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        equipments: [Equipment]
        equipmentAdvs: [EquipmentAdv]
        supplies: [Supply]
        givens: [Given]
        tools: [Tool]
        softwares: [Software]
        software: [Software]
        people: [People]
    }
`;

module.exports = typeDefs;
