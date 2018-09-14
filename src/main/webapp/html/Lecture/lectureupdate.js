"use strict"

let tbody = $('#eListTable > tbody'); 
let data = null;
var {lNum, pNum} = $.parseQuery(location.href);

/*var values = location.href.split("?")[1];
for(var param of values){
	var lNum = param.split("=");
	console.log(lNum[0])
}*/

let filename;

$.getJSON('../../json/lecture/view', {
    lNum : lNum,
    pNum : pNum
}).done(
    function (result) {
        data = result.list;

        filename = data.lectureFile;
        $(major).val(data.lectureSubject);
        $('#name').val(data.lectureName);
        $(content).val(data.lectureContent);
        $(capacity).val(data.lectureMaxMember);
        $(room).val(data.lectureRoom);
        $(startdate).val(data.lectureStartDay);
        $(enddate).val(data.lectureEndDay);
    });

$('#syllabus').fileupload({
    dataType: 'json',
    done: function (e, data) {
        filename = data.result.newfilename;
    }
});

$('#regClsBtn').click(function () {
    
    if (!$(major).val() || $(major).val() == "") {
        swal("개설학과를 입력하세요!");
        return;
    }

    if (!$('#name').val() || $('#name').val() == "") {
        swal("강좌명을 입력하세요!");
        return;
    }

    if (!$(content).val() || $(content).val() == "") {
        swal("강의 내용을 입력해 주세요!");
        return;
    }

    if (!$(capacity).val() || $(capacity).val() == "") {
        swal("수용인원을 입력해 주세요!");
        return;
    }

    if (!$(room).val() || $(room).val() == "") {
        swal("강의실을 입력해 주세요!");
        return;
    }

    if (!$(startdate).val() || $(startdate).val() == "") {
        swal("시작일을 입력해 주세요!");
        return;
    }

    if (!$(enddate).val() || $(enddate).val() == "") {
        swal("종료일을 입력해 주세요!");
        return;
    }

    $.ajax('../../json/lecture/update', {
        method: 'POST',
        dataType: 'json',
        data: {
            lectureNo: lNum,
            pNum: pNum,
            lectureSubject: $(major).val(),
            lectureName: $('#name').val(),
            lectureContent: $(content).val(),
            lectureMaxMember: $(capacity).val(),
            lectureFile: filename,
            lectureRoom: $(room).val(),
            lectureStartDay: $(startdate).val(),
            lectureEndDay: $(enddate).val(),
            //lectureTime: $(time).val()
        },
        success: function (data) {
            if (!data.err) {
                swal("성공입니다!").then(result=>{location.href = 'list.html'});
            } else {
                swal("오류발생",
                    "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요. 오류가 지속된다면 고객지원센터로 문의 바랍니다."
                );
                console.log(data.error);
            }
        }
    });
});


