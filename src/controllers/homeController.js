const db = require('../models')
const { createNewUser, getAllUsers, getUserById, updateUser, deleteUserById } = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
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
    return res.send('post CRUD')
}

const getCRUD = async (req, res) => {
    let data = await getAllUsers()
    return res.render('get_crud.ejs', { data: data })
}

const editCRUD = async (req, res) => {
    let userId = req.query.id
    try {
        let userData = await getUserById(userId)
        if(userData) {
            return res.render('edit_crud.ejs', { user: userData })
        }
    } catch (error) {
        console.log('userId khong nhan duoc gia tri truyen vao!', error)
        return res.send('userId khong nhan duoc gia tri truyen vao!')
    }
}

const putCRUD = async (req, res) => {
    try {
        let data = req.body
        let allUser = await updateUser(data)
        return res.render('get_crud.ejs', { data: allUser })
    } catch (error) {
        console.log('data khong nhan duoc gia tri truyen vao!', error)
        return res.send('userId khong nhan duoc gia tri truyen vao!')
    }
}

const deleteCRUD = async (req, res) => {
    let userId = req.query.id
    try {
        await deleteUserById(userId)
        let data = await getAllUsers()
        return res.render('get_crud.ejs', { data: data })
    } catch (error) {
        console.log('data khong nhan duoc gia tri de xoa!', error)
        return res.send('userId khong nhan duoc gia tri truyen vao!')
    }
}

module.exports = {
    getHomePage: getHomePage,
    crud: crud,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}