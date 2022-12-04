const db = require('../models')
const { createNewUser, getAllUsers } = require('../services/CRUDService')

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
    console.log(`Day la req.body${req.body}`)
    return res.send('post CRUD')
}

const getCRUD = async (req, res) => {
    let data = await getAllUsers()
    console.log('data---------->>', data)
    return res.render('get_crud.ejs', { data })
}

module.exports = {
    getHomePage: getHomePage,
    crud: crud,
    postCRUD: postCRUD,
    getCRUD: getCRUD
}