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
        peopleFiltered(team: Int, sex: Sex, blood_type: BloodType, from: String): [People]
        peoplePaginated(page: Int!, per_page: Int!): [People]
    }
`;

module.exports = typeDefs;
