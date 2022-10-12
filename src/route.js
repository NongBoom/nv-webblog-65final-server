const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./controllers/isAuthenController')
const Shorts = require('./models/Shorts.js');
const ShortsController = require('./controllers/ShortsController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', UserController.index)

    app.post('/shorts', ShortsController.create)
    app.put('/shorts/:shortsId', ShortsController.put)
    app.delete('/shorts/:shortsId', ShortsController.remove)
    app.get('/shorts/:shortsId', ShortsController.show)
    app.get('/shorts', ShortsController.index)

    app.post('/upload', function (req, res) {
        upload(req, res, function (err) {
            // isUserAuthenicated,
            if (err) {
                return res.end("Error uploading file.")
            }
            res.end("File is uploaded")
        })
    })
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs');
            console.log(req.body.filename)
            fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
                (err) => {
                    if (err) throw err;
                    res.send("Delete sucessful")
                    // console.log('successfully deleted material file');
                });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete file the material'
            })
        }

    })


}