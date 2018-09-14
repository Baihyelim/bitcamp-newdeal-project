let userDiv;
let userNo;
let userNum;
let userName1;

$.getJSON(`${serverApiAddr}/json/professor/getsession`, {
    dummy: 0
}).done(
    function (result) {
        data = result[0];
        console.log(result);

        userDiv = result.user;
        if (userDiv == 'professor'){
            userNo = result.info.professorNo;
            userNum = result.info.pNum;
            userName1 = result.info.professorName;
        } else {
            userNo = result.info.studentNo;
            userNum = result.info.sNum;
            userName1 = result.info.studentName;
        } 
    });