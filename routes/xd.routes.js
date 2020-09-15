const express = require('express');
const router = express.Router();
const dbConn = require('../db/connection');

router.get('/', async (req, res)=>{

           const sql = 'SELECT FECHA_EMISION,ID_PROVEEDOR,ID_SUCURSAL FROM rct.revision_xd';
        dbConn.query(sql, null, function(error, results, fields){

            error?
            res.status(404).json({message : error})
            :res.status(200).json(results);
            
        });

});

module.exports = router;

