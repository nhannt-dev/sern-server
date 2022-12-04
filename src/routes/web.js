const { getHomePage, crud, postCRUD } = require('../controllers/homeController')

const router = require('express').Router()

const initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/crud', crud)
    router.post('/post-crud', postCRUD)
    return app.use('/', router)
}

module.exports = initWebRoutes