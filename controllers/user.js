const { response } = require('express') 

const usuariosGet = (req, res = response) => {
    //Leo lo que viene por query params
    const {id, page, limit} = req.query
    res.json({
        msg: 'get API',
        id,
        page,
        limit
    })
}
const usuariosPut = (req, res) => {
    //Leo lo que viene por segmento que especifique en rutas, VIENE COMO STRING SIEMPRE !!!
    const {id} = req.params

    res.status(403).json({
        msg: 'put API',
        id
    })
}
const usuariosPost = (req, res) => {
    //Leo lo que me mandan por body
    const {nombre, edad} = req.body; 

    res.status(403).json({
        msg: 'post API',
        nombre,
        edad
    })
}
const usuariosDelete = (req, res) => {
    res.status(403).json({
        msg: 'delete API'
    })
}
const usuariosPatch = (req, res) => {
    res.status(403).json({
        msg: 'patch API'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}