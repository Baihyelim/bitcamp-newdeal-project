'use strict'

$('#loginBtn').click(() => {
	if($('#formc').val() == 0){
		$.post(`${serverApiAddr}/json/student/slogin`, {
		        'studentNo': $('#no').val(),
		        'studentPwd': $('#pwd').val(),
		    }, (result) => {
		        if (result.status == 'success') {
		            location.href = 'Lecture/list.html'
		        } else {
		            swal('학번과 비밀번호를 다시 확인해 주세요!')
		        }
		    }, 'json')
		 .fail((error) => {
			 console.log(error);
		        //alert('서버 요청 중 오류 발생!')
		    });
	}else if($('#formc').val() == 1){
		$.post(`${serverApiAddr}/json/professor/plogin`, {
	        'professorNo': $('#no').val(),
	        'professorPwd': $('#pwd').val(),
	    }, (result) => {
	    	console.log(result);
	        if (result.status == 'success') {
	            location.href = 'Lecture/list.html'
	        } else {
	            swal('교번과 비밀번호를 다시 확인해 주세요!')
	        }
	    }, 'json')
	 .fail((error) => {
		 console.log(error);
	        //alert('서버 요청 중 오류 발생!')
	    });
	}
});


$('#joinBtn').click(() => {
    location.href = 'join.html';
});