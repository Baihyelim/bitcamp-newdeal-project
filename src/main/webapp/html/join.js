'use strict'


        let userSlt = "http://192.168.0.69:8000/member/add0";
        let chkUrl = "http://192.168.0.69:8000/member/chkStu";
        let chkFlg = 1;

        $("#user").change(function () {
            if ($("#user").val() == "교수") {
                $(".selectyear").hide();
                userSlt = "http://192.168.0.69:8000/member/add1";
                chkUrl = "http://192.168.0.69:8000/member/chkPro";
            } else {
                $(".selectyear").show();
            }
        });

        $("#no").keydown(function () {
            chkFlg = 1;
        });

        $("#chkNoBtn").click(function () {
            $.get(chkUrl + '?no=' + $(no).val(), function (data, status) {
                if (data == 1) {
                    swal("이미 가입한 회원입니다.");
                    chkFlg = 1;
                } else {
                    swal("회원가입이 가능합니다.");
                    chkFlg = 0;
                }
            });
        });

        $("#joinBtn").click(function () {

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

            if ($("#user").val() != "교수" && $(year).val() == 0) {
                swal("학년을 입력 해주세요!");
                return;
            }

            if (chkFlg == 1) {
                swal("학번(교번) 중복확인을 해주세요!");
                return;
            }

            $.ajax(userSlt, {
                method: 'POST',
                dataType: 'json',
                data: {
                    no: $(no).val(),
                    password: $(password).val(),
                    name: $('#name').val(),
                    tel: $(tel).val(),
                    major: $(major).val(),
                    email: $(email).val(),
                    year: $(year).val(),
                },
                success: function (data) {
                    if (data == "0") {
                        
                        location.href = 'login.html';
                    } else {
                        swal("오류발생",
                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요."
                        );
                        console.log(data.error);
                    }
                }
            });
        });
