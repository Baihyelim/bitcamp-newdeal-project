
        setTimeout(function () {
            $.getJSON('http://192.168.0.69:8000/member/get', {
                id: userNum
            }).done(
                function (result) {
                    data = result[0];

                    $(no).val(data.sNo);
                    $('#name').val(data.sName);
                    $(tel).val(data.sTel);
                    $(major).val(data.sMajor);
                    $(year).val(data.sYear);
                    $(email).val(data.sEmail);
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

            if ($(year).val() == 0) {
                swal("학년을 입력 해주세요!");
                return;
            }

            $.ajax('http://192.168.0.69:8000/member/update', {
                method: 'POST',
                dataType: 'json',
                data: {
                    num: userNum,
                    password: $(password).val(),
                    name: $('#name').val(),
                    tel: $(tel).val(),
                    major: $(major).val(),
                    email: $(email).val(),
                    year: $(year).val(),
                },
                success: function (data) {
                    if (data == "0") {
                        swal(
                        		'정보수정에 성공했습니다!',
                        		'다시 로그인 해 주세요'
                        		).then(result => {$.post(`${serverApiAddr}/json/student/slogout`, {
                                    'studentNo': 0000,
                                    'studentPwd': '0000',
                                }, (result) => {
                                    if (result.status == 'success') {
                                        location.href = `${serverApiAddr}/html/login.html`;
                                    } else {
                                        swal('학번과 비밀번호를 다시 확인해 주세요!')
                                    }
                                }, 'json')
                        		});
                    } else {
                        swal("오류입니다!");
                        console.log(data.error);
                    }
                }
            });
        });

        $("#delBtn").click(function () {

            $.ajax('http://192.168.0.69:8000/member/delete', {
                method: 'POST',
                dataType: 'json',
                data: {
                    num: userNum
                },
                success: function (data) {
                    if (data == "0") {
                        swal("회원 탈퇴에 성공했습니다!").then(result =>{location.href = '../login.html';})
                    } else {
                        swal("오류발생", "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
                        console.log(data.error);
                    }
                }
            });
        });
