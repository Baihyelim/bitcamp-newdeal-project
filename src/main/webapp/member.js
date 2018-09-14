// 주제: DAO 분리

const mysql = require('mysql')
const express = require('express')
const router = express.Router();
const memberdao = require('./memberdao')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '18.223.113.138', 
    port: '3306',
    database: 'studydb',
    user: 'study',
    password: '1111'
});

memberdao.setConnectionPool(pool);


// get 요청에 대해 핸들러를 등록하기
router.get('/get', (req, res) => {

    memberdao.get(req.query, (err, results) => {
        if (err) {
            return;
        }
        res.send(results);
    });
});

router.get('/getPro', (req, res) => {

    memberdao.getPro(req.query, (err, results) => {
        if (err) {
            return;
        }
        res.send(results);
    });
});

router.post('/add0', (req, res) => {
    
    memberdao.add0(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    }); 

    return;
});

router.post('/add1', (req, res) => {
    
    memberdao.add1(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    }); 
});

router.post('/update', (req, res) => {
    memberdao.update(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

router.post('/updatePro', (req, res) => {
    memberdao.updatePro(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

router.post('/delete', (req, res) => {
    memberdao.remove(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

router.post('/deletePro', (req, res) => {
    memberdao.removePro(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

router.get('/chkStu', (req, res) => {
    memberdao.chkStu(req.query, (err, result) => {
        if (result.length>0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

router.get('/chkPro', (req, res) => {
    memberdao.chkPro(req.query, (err, result) => {
        if (result.length>0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

module.exports = router;