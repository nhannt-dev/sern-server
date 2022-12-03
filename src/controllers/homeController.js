const getHomePage = (req, res) => {
    return res.render('homPage.ejs')
}

module.exports = {
    getHomePage: getHomePage
}