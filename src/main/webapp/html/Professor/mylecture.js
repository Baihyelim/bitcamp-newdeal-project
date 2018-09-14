'use strict'

let tbody = $('#eListTable > tbody'); 
let data = null;


$(function loadList(){
	$.getJSON(`${serverApiAddr}/json/lecture/myList`,{	
	}).done(function(result){
		data = result;
		tbody.html('');
		for(var item of data.myList){
			$("<tr>").html(`<th scope="row">${item.lectureNo}</th>
                        <td>${item.lectureSubject}</td>
                        <td>${item.lectureName}</td>
                        <td>${item.lectureRoom}</td>
                        <td>${item.lectureStartDay}</td>
                        <td>${item.lectureEndDay}</td>
                        <td>${item.lectureMember}/${item.lectureMaxMember}</td>
                        <td><button type="button" id="babo" class="btn btn-outline-success">폐강하기</button>`).appendTo(tbody);
		}
		tbody.on('click', '#babo', function(event) {
		    event.preventDefault();
		    $.getJSON(`${serverApiAddr}/json/lecture/delete?lectureNo=${item.lectureNo}`,
		    		function(result){
		    	if(result.status == 'success'){
		    		swal('강의를 폐강하였습니다').then(result=>{location.href = `mylecture.html`;})
		    	}
		    });  
		});
	})
});

