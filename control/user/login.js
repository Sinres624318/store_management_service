var db = require('./../../db');

const login = (req, res, next) => {
    let { userId, password } = req.body;
    
    db.query(`select * from account where userId='${userId}'`, (err, result) => {
        if(err) throw err;
        res.json({
            code: '0',
            data: result,
            message: 'success'
        })
    });
};
module.exports = login;