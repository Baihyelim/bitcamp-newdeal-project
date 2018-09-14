$('#logoutBtn').click(() => {

    $.post(`${serverApiAddr}/json/student/slogout`, {
            'studentNo': 0000,
            'studentPwd': '0000',
        }, (result) => {
            if (result.status == 'success') {
                location.href = `${serverApiAddr}/html/login.html`;
            } else {
                swal('학번과 비밀번호를 다시 확인해 주세요!')
            }
        }, 'json')
        .fail((error) => {
            console.log(error);
            //alert('서버 요청 중 오류 발생!')
        });
});