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

module.exports = createNewUser