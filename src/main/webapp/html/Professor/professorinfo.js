

        setTimeout(function() {
            $.getJSON('http://192.168.0.69:8000/member/getPro', {
                id: userNum
            }).done(
                function (result) {
                    data = result[0];
                    $(no).val(data.pNo);
                    $('#name').val(data.pName);
                    $(tel).val(data.pTel);
                    $(major).val(data.pMajor);
                    $(email).val(data.pEmail);
                });
        }, 500);

        $("#updateBtn").click(function () {

            if (!$(no).val() || $(no).val() == "") {
                swal("학번(교번)을 입력 해주세요!");
                return;
            }

            if (!$(password).val() || $(password).val() == "") {
                swal("비밀번호를 입력 해주세요!");
                return;
            }

            if (!$('#name').val() || $('#name').val() == "") {
                swal("이름을 입력 해주세요!");
                return;
            }

            $.ajax('http://192.168.0.69:8000/member/updatePro', {
                method: 'POST',
                dataType: 'json',
                data: {
                    num: userNum,
                    password: $(password).val(),
                    name: $('#name').val(),
                    tel: $(tel).val(),
                    major: $(major).val(),
                    email: $(email).val(),
                },
                success: function (data) {
                    if (data == "0") {
                        swal(
                        		'정보 수정에 성공했습니다!',
                        	     '다시 로그인 해 주세요.'		
                        ).then(result =>{location.href = '../login.html';});
                    } else {
                        swal("오류입니다!");
                        console.log(data.error);
                    }
                }
            });
        });

        $("#delBtn").click(function () {

            $.ajax('http://192.168.0.69:8000/member/deletePro', {
                method: 'POST',
                dataType: 'json',
                data: {
                    num: userNum
                },
                success: function (data) {
                    if (data == "0") {
                    	swal("성공입니다!").then(result =>{location.href = '../login.html';})                     
                    } else {
                    	alert("오류발생", "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
                        console.log(data.error);
                    }
                }
            });
        });
