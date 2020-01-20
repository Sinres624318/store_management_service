const db = require('./../../db');

const register = (req, res, next) => {
    let { userId, password } = req.body;
    db.query(`insert into account(userId,password) values('${userId}','${password}')`, (err, result) => {
        if (err) throw err;
        res.json({
            code: '',
            data: result,
            message: 'success'
        })
    });
};
module.exports = register;