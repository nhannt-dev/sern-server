const db = require('../models')

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

module.exports = {
    getHomePage: getHomePage
}