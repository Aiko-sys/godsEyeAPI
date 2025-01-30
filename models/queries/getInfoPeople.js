const { loadQueries } = require("../../config/database/loadQuery.js")
const pool = require("./../../config/database/pool.js")

const getInfoPeopleByCpf =  async (cpf) => { // TO DO BIRTH DATE FILTER
    const queries = await loadQueries();
    const peopleQueryByCpf = queries.infoPeople.infoPeopleByCpfQuery
    const queryParams = [cpf]
    const peopleRows = await pool.query(peopleQueryByCpf, queryParams)
    return peopleRows.rows

}

const getInfoPeopleByName = async (name) => {
    const queries = await loadQueries();
    const peopleQueryByName = queries.infoPeople.infoPeopleByNameQuery
    const queryParams = [name.toLowerCase()]
    const peopleRows = await pool.query(peopleQueryByName, queryParams)
    return peopleRows.rows
}

const getInfoPeopleByPhone = async (name) => {

}

const getInfoPeopleByRg = async (name) => {

}

const getInfoPeopleByMom = async (name) => {


}

module.exports = { 
    getInfoPeopleByCpf,
    getInfoPeopleByName,
    getInfoPeopleByPhone,
    getInfoPeopleByRg,
    getInfoPeopleByMom
}