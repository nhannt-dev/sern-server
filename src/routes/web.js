const router = require('express').Router()

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Chao mung ban den voi binh nguyen vo tan')
    })
    return app.use('/', router)
}

module.exports = initWebRoutes