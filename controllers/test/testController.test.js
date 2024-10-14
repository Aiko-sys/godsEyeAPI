const { getInfoPeopleByCpf, getInfoPeopleByName  } = require("./../../models/queries/getInfoPeople")

exports.getTest = async (req, res) => {

    infoPeople = await getInfoPeopleByName("Aiko Oliveira Leitão")
    res.json(infoPeople)
}   