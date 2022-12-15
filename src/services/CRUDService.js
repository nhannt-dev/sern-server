const bcrypt =  require('bcryptjs')

const db = require('../models')

const salt = bcrypt.genSaltSync(10)

const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await hashUserPass(data.password)
            await db.User.create({
                email: data.email,
                password: hash,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            })
            resolve('Luu DB thanh cong!')
        } catch (error) {
            console.log(`createNewUser dang bi loi: ${error}`)
            reject(error)
        }
    })
}

const hashUserPass = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt)
            resolve(hash)
        } catch (error) {
            console.log(`hashUserPass dang bi loi: ${error}`)
            reject(error)
        }
    })
}

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            })
            console.log('getAllUsers------>>', users)
            resolve(users)
        } catch (error) {
            console.log(`getAllUsers dang bi loi: ${error}`)
            reject(error)
        }
    })
}

const getUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            })
            if(user) {
                resolve(user)
            }
        } catch (error) {
            console.log(`getUserById dang bi loi: ${error}`)
            reject(error)
        }
    })
}

const updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })

            if(user) {
                user.email = data.email
                user.password = data.password
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address
                user.phoneNumber = data.phoneNumber

                await user.save()
                let allUsers = await db.User.findAll()
                resolve(allUsers)
            }
        } catch (error) {
            console.log(`updateUser dang bi loi: ${error}`)
            reject(error)
        }
    })
}

const deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })

            if(user) {
                await user.destroy()
            }
            resolve()
        } catch (error) {
            console.log(`deleteUserById dang bi loi: ${error}`)
            reject(error)
        }
    })
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById
}