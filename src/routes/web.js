const { getHomePage, crud, postCRUD, getCRUD, editCRUD, putCRUD, deleteCRUD } = require('../controllers/homeController')

const router = require('express').Router()

const initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/crud', crud)
    router.post('/post-crud', postCRUD)
    router.get('/get-crud', getCRUD)
    router.get('/edit-crud', editCRUD)
    router.post('/put-crud', putCRUD)
    router.get('/delete-crud', deleteCRUD)
    return app.use('/', router)
}

module.exports = initWebRoutes