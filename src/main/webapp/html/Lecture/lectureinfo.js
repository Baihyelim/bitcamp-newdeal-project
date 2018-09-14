"use strict"

let tbody = $('#eListTable > tbody'); 
let data = null;
var {lNum, pNum} = $.parseQuery(location.href);

/*var values = location.href.split("?")[1];
for(var param of values){
	var lNum = param.split("=");
	console.log(lNum[0])
}*/


$(function loadList(){
	$.getJSON(`${serverApiAddr}/json/lecture/view?lNum=${lNum}&pNum=${pNum}`,{	
	}).done(function(result){
		data = result;
		tbody.html('');
			if(`${data.list.lectureFile}` == 'null'){
			$("<tr>").html(`<th scope="row">${data.list.lectureNo}</th>
                    <td>${data.list.lectureSubject}</td>
                    <td>${data.list.lectureName}</td>
                    <td>${data.list.lectureRoom}</td>
                    <td>${data.list.lectureStartDay}</td>
                    <td>${data.list.lectureEndDay}</td>
                    <td>${data.list.lectureMember}/${data.list.lectureMaxMember}</td>
                    <td>강의자료없음</td>`).appendTo(tbody);
			}else{
			$("<tr>").html(`<th scope="row">${data.list.lectureNo}</th>
                    <td>${data.list.lectureSubject}</td>
                    <td>${data.list.lectureName}</td>
                    <td>${data.list.lectureRoom}</td>
                    <td>${data.list.lectureStartDay}</td>
                    <td>${data.list.lectureEndDay}</td>
                    <td>${data.list.lectureMember}/${data.list.lectureMaxMember}</td>
                    <td><a href="../../files/${data.list.lectureFile}">다운로드</td>`).appendTo(tbody);
				}
		if(userName1 == `${data.pname}`){
			$("#content").html(`<h2 class="blog-post-title">강의 상세 내역</h2>
					<p class="blog-post-meta">
					<p> 담당교수 : ${data.pname} 님</p>
					</p>
					<p>강의 내용에는 변경사항이 있으니 자세한 문의는 조교실(02-222-2222)로 연락하거나 메일로 문의 바랍니다</p>
					<pre>${data.list.lectureContent}</pre>
					<button type="button" id="lUpdate" class="btn btn-primary small">수정하기</button>`);
		}else{
			$("#content").html(`<h2 class="blog-post-title">강의 상세 내역</h2>
					<p class="blog-post-meta">
					<p> 담당교수 : ${data.pname} 님</p>
					</p>
					<p>강의 내용에는 변경사항이 있으니 자세한 문의는 조교실(02-222-2222)로 연락하거나 메일로 문의 바랍니다</p>
					<pre>${data.list.lectureContent}</pre>`);
		}
		$('#lUpdate').click(function(event){
			event.preventDefault();
			location.href = `lectureupdate.html?lNum=${lNum}&pNum=${pNum}`
		});
	});
});


