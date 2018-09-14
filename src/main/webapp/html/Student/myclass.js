'use strict'

let tbody = $('#eListTable > tbody'); 
let data = null;


$(function loadList(){
	$.getJSON(`${serverApiAddr}/json/apply/myApplyList`,{}).done(function(resultApplyList){
		data = resultApplyList;
		tbody.html('');
		for(var item of data.myApplyList){
			$("<tr>").html(`<th scope="row">${item.lectureNo}</th>
                        <td>${item.lectureSubject}</td>
                        <td>${item.lectureName}</td>
                        <td>${item.lectureRoom}</td>
                        <td>${item.lectureStartDay}</td>
                        <td>${item.lectureEndDay}</td>
                        <td>${item.lectureMember}/${item.lectureMaxMember}</td>
                        <td><button type="button" id="cancel" class="btn btn-outline-success">철회하기</button>`).appendTo(tbody);
		}
		var isClicked = false;
		tbody.on('click', '#cancel', function(event) {
			 event.preventDefault();
					if(isClicked) return;
					isClicked = true;
					 setTimeout(function () {
		                  isClicked = false;
		                     swal({
		                         title: '철회하시겠습니까?',
		                         text: "철회할 시 다시 수강신청하셔야 합니다.",
		                         type: 'warning',
		                         showCancelButton: true,
		                         confirmButtonColor: '#3085d6',
		                         cancelButtonColor: '#d33',
		                         confirmButtonText: 'Yes'
		                       }).then((result) => {
		                         if (result.value) {
		                            $.get(`${serverApiAddr}/json/studentlist/applyDelete?lectureNo=${item.lectureNo}`)
		                            .done(result=>{
		                                swal(
		                                        '철회되었습니다.'
		                                      )
		                                .then(result=>{location.href="myclass.html";})
		                            })
		                            .fail(e=>e)
		                            
		                         }else{
		                             
		                             swal(
		                                     '취소되었습니다'
		                                   )
		                         }
		                       })	
		               }, 500);                                           
		      });
		   });

});


