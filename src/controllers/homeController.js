const db = require('../models')
const createNewUser = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log(`Data tra ve co dang nhu sau: ${data}`)
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
        
    } catch (error) {
        console.log(`getHomePage dang bi loi: ${error}`)
    }
}

const crud = async (req, res) => {
    return res.render('crud.ejs')
}

const postCRUD = async (req, res) => {
    let msg = await createNewUser(req.body)
    console.log(msg)
    return res.send('post CRUD')
}

module.exports = {
    getHomePage: getHomePage,
    crud: crud,
    postCRUD: postCRUD
}