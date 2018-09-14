// 주제: DAO 모듈 만들기

var pool;

exports.setConnectionPool = (connectionPool) => {
    pool = connectionPool;
};

exports.get = (num, handler) => {
    pool.query('select * from P3_Student where sNum=?',
            [num.id],
            function(err, results) {
        handler(err, results);
    });
};

exports.getPro = (num, handler) => {
    pool.query('select * from P3_Professor where pNum=?',
            [num.id],
            function(err, results) {
        handler(err, results);
    });
};

exports.add0 = (data, handler) => {

    data.max = 18;
    pool.query(
        'insert into P3_Student(sNo,sPassword,sName,sTel,sMajor,sEmail,sYear,sMaxClass)\
        values(?, password(?), ?, ?, ?, ?, ?, ?)',
        [data.no, data.password, data.name, data.tel, data.major, data.email, data.year, data.max],
        function(err, result) {
            handler(err, result);
    });
};

exports.add1 = (data, handler) => {

    data.year = 0;
    pool.query(
        'insert into P3_Professor(pNo,pPassword,pName,pTel,pMajor,pEmail,pLecture,pClassAble)\
        values(?, password(?), ?, ?, ?, ?, ?, "Y")',
        [data.no, data.password, data.name, data.tel, data.major, data.email, data.year],
        function(err, result) {
            handler(err, result);
    });
};

exports.update = (data, handler) => {
    pool.query(
        'update P3_Student set sPassword=password(?), sName=?, sTel=?, sMajor=?, sEmail=?, sYear=? where sNum=?',
        [data.password,
            data.name,
            data.tel,
            data.major,
            data.email,
            data.year,
            data.num],
        function(err, result) {
            handler(err, result);
    });
};

exports.updatePro = (data, handler) => {
    pool.query(
        'update P3_Professor set pPassword=password(?), pName=?, pTel=?, pMajor=?, pEmail=? where pNum=?',
        [data.password,
            data.name,
            data.tel,
            data.major,
            data.email,
            data.num],
        function(err, result) {
            handler(err, result);
    });
};

exports.remove = (data, handler) => {
    pool.query(
        'delete from P3_Student where sNum=?',
        [data.num],
        function(err, result) {
            handler(err, result);
    });
};

exports.removePro = (data, handler) => {
    pool.query(
        'delete from P3_Professor where pNum=?',
        [data.num],
        function(err, result) {
            handler(err, result);
    });
};

exports.chkStu = (data, handler) => {
    pool.query(
        'select * from P3_Student where sNo=?',
        [data.no],
        function(err, result) {
            handler(err, result);
    });
};

exports.chkPro = (data, handler) => {
    pool.query(
        'select * from P3_Professor where pNo=?',
        [data.no],
        function(err, result) {
            handler(err, result);
    });
};