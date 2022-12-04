const { getHomePage, crud, postCRUD, getCRUD } = require('../controllers/homeController')

const router = require('express').Router()

const initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/crud', crud)
    router.post('/post-crud', postCRUD)
    router.get('/get-crud', getCRUD)
    return app.use('/', router)
}

module.exports = initWebRoutes