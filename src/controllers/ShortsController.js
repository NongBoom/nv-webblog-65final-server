const { Shorts } = require('../models')

module.exports = {

    async create(req, res) {
        try {
            const shorts = await Shorts.create(req.body)
            res.send(shorts.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create shorts incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Shorts.update(req.body, {
                where: {
                    id: req.params.shortsId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update shorts incorrect'
            })
        }

    },

    async remove(req, res) {
        try {
            const shorts = await Shorts.findOne({
                where: {
                    id: req.params.shortsId
                }
            })
            if (!shorts) {
                return res.status(403).send({
                    error: 'The shorts information was incorrect'
                })
            }
            await shorts.destroy()
            res.send(shorts)
        } catch (err) {
            res.status(500).send({
                error: 'The shorts information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const shorts = await Shorts.findByPk(req.params.shortsId)
            res.send(shorts)
        } catch (err) {
            res.status(500).send({
                error: 'The shorts information was incorrect'
            })
        }
    },

    async index(req, res) {
        try {
            const shorts = await Shorts.findAll()
            res.send(shorts)
        } catch (err) {
            res.status(500).send({
                error: 'The shorts information was incorrect'
            })
        }
    }

}