const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/Enviar_correo/:DIR_CORREO', (req,res)=>{
    const reqQuery = req.params;
    const correo = { DIR_CORREO:reqQuery.DIR_CORREO}
    mysqlConnection.query('SELECT * FROM USUARIOS_REGISTRADOS WHERE ? ',[correo], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});



module.exports = router;