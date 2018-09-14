'use strict'

var {page, size} = $.parseQuery(location.href);

let tbody = $('#eListTable > tbody');
let data = null;
let apply = null;
let totalpage = 10;

if (page != undefined && size != undefined) {
    loadList(page, size);
} else {
    loadList(1, 5);
}

$('#prevPage').click(function () {
	loadList(data.page - 1, data.size);
});

$('#nextPage').click(function () {
	loadList(data.page + 1, data.size);
});

function loadList(page, size) {
	$.getJSON(`${serverApiAddr}/json/lecture/list`, {
		page: page,
		size: size
	}).done(function (result) {
		data = result;
		tbody.html('');
		if (userDiv != 'professor') {
			var sname = userName1;
			var sNum = userNum;
			$("#userName").html(`${sname}님 반갑습니다
			<button type="button" class="btn btn-success btn-sm" 
			onclick="location.href='../Student/myclass.html'">나의강의실</button>
			`);
		} else {
			var pname = userName1;

			$("#userName").html(`${pname}님 반갑습니다
			<button type="button" class="btn btn-success btn-sm" 
			onclick="location.href='../Professor/mylecture.html'">나의강의실</button>
			`);
		};
		if (userDiv == 'professor') {
			for (var item of data.list) {
				$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td>모집중</td>`).appendTo(tbody);
			}
			 $(ePageNo).html(data.page);
		       if (data.page <= 1)
		           $('#prevPage').attr('disabled', '');
		       else 
		           $('#prevPage').removeAttr('disabled');
		       
		       if (data.page >= data.totalPage)
		           $('#nextPage').attr('disabled', '');
		       else
		           $('#nextPage').removeAttr('disabled');
		} else {
			for (var item of data.list) {
				if(`${item.lectureMember}`==`${item.lectureMaxMember}`){
					$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td>정원초과</td>`).appendTo(tbody);
					}else{
				$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td><button type="button" id="apply" data-no3="${item.lectureNo}" class="btn btn-outline-success">신청</button></td>`).appendTo(tbody);
					}
			}
			 $('#ePageNo').html(data.page);
		       if (data.page <= 1)
		           $('#prevPage').attr('disabled', '');
		       else 
		           $('#prevPage').removeAttr('disabled');
		       
		       if (data.page >= data.totalPage)
		           $('#nextPage').attr('disabled', '');
		       else
		           $('#nextPage').removeAttr('disabled');
			
			tbody.on('click', '#apply', function(event) {
			    event.preventDefault();
			      var lNum = $(event.target).attr('data-no3');
			      var now = new Date();
			      var year= now.getFullYear();
			      var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
			      var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();   
			      var chan_val = year + '-' + mon + '-' + day;
			      $(this).val(chan_val);
			    $.getJSON(`${serverApiAddr}/json/apply/myApplyList`,{	
			  	}).done(function(resultApplyList){
			  		if(resultApplyList.status == "newApply"){
			  			$.ajax('../../json/studentlist/applyAdd', {
		 	                method: 'POST',
		 	                dataType: 'json',
		 	                data: {
		 	                    sNum: sNum,
		 	                    lectureNo: lNum,
		 	                    applyDay: chan_val,
		 	                    applyConfirm: 1
		 	                },
		 	                success: function (data) {
		 	                    if (!data.err) {
		 	                        swal("성공입니다!");
		 	                        $.getJSON(`${serverApiAddr}/json/studentlist/applyUpdate?lectureNo=${lNum}`,
		 	            		    		function(result){
		 	            		    	if(result.status == 'success'){
		 	            		    		location.href = '../Student/myclass.html';
		 	            		    	}
		 	            		    });
		 	                    } else {
		 	                        swal("오류발생",
		 	                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요. 오류가 지속된다면 고객지원센터로 문의 바랍니다."
		 	                        );
		 	                        console.log(data.error);
		 	                    }
		 	                }
		 	            });//ajax add
			  		}
			  		apply = resultApplyList;
			  		for(var itemNo of apply.myApplyList){
			  			if(`${itemNo.lectureNo}` == lNum){
			  				swal("이미 신청한 강의입니다!")
			  				break;
			  			}else{
			  				 $.ajax('../../json/studentlist/applyAdd', {
			 	                method: 'POST',
			 	                dataType: 'json',
			 	                data: {
			 	                    sNum: sNum,
			 	                    lectureNo: lNum,
			 	                    applyDay: chan_val,
			 	                    applyConfirm: 1
			 	                },
			 	                success: function (data) {
			 	                    if (!data.err) {
			 	                        swal("성공입니다!");
			 	                        $.getJSON(`${serverApiAddr}/json/studentlist/applyUpdate?lectureNo=${lNum}`,
			 	            		    		function(result){
			 	            		    	if(result.status == 'success'){
			 	            		    		location.href = '../Student/myclass.html';
			 	            		    	}
			 	            		    });
			 	                    } else {
			 	                        swal("오류발생",
			 	                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요. 오류가 지속된다면 고객지원센터로 문의 바랍니다."
			 	                        );
			 	                        console.log(data.error);
			 	                    }
			 	                }
			 	            });//ajax add
			  			}//if
			  		}//for
			  	});//function(result) 
			});
		}
		
	});
}



tbody.on('click', 'a.viewLink', function (event) {
	event.preventDefault();
	var lNum = $(event.target).attr('data-no');
	var pNum = $(event.target).attr('data-no2');
	location.href = `lectureinfo.html?lNum=${lNum}&pNum=${pNum}`;
});

$("#searchBtn").click(function () {
	page = 1;
	tbody.html('');
	$.getJSON(`${serverApiAddr}/json/lecture/listsearch`, {
		'keyword': $('#search-input').val()
	}).done(function (result) {
		data = result;
		totalpage = 1;
		if (userDiv == 'professor') {
			for (var item of data.list) {
				$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td>모집중</td>`).appendTo(tbody);
			}
		} else {
			for (var item of data.list) {
				if(`${item.lectureMember}`==`${item.lectureMaxMember}`){
					$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td>정원초과</td>`).appendTo(tbody);
					}else{
				$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td><button type="button" id="apply" data-no3="${item.lectureNo}" class="btn btn-outline-success">신청</button></td>`).appendTo(tbody);
					}
			}
			tbody.on('click', '#apply', function(event) {
			    event.preventDefault();
			      var lNum = $(event.target).attr('data-no3');
			      var now = new Date();
			      var year= now.getFullYear();
			      var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
			      var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();   
			      var chan_val = year + '-' + mon + '-' + day;
			      $(this).val(chan_val);
			      $.getJSON(`${serverApiAddr}/json/apply/myApplyList`,{	
				  	}).done(function(resultApplyList){
				  		apply = resultApplyList;
				  		for(var itemNo of apply.myApplyList){
				  			if(`${itemNo.lectureNo}` == lNum){
				  				swal("이미 신청한 강의입니다!")
				  				break;
				  			}else{
				  				 $.ajax('../../json/studentlist/applyAdd', {
				 	                method: 'POST',
				 	                dataType: 'json',
				 	                data: {
				 	                    sNum: sNum,
				 	                    lectureNo: lNum,
				 	                    applyDay: chan_val,
				 	                    applyConfirm: 1
				 	                },
				 	                success: function (data) {
				 	                    if (!data.err) {
				 	                        swal("성공입니다!");
				 	                        $.getJSON(`${serverApiAddr}/json/studentlist/applyUpdate?lectureNo=${lNum}`,
				 	            		    		function(result){
				 	            		    	if(result.status == 'success'){
				 	            		    		location.href = '../Student/myclass.html';
				 	            		    	}
				 	            		    });
				 	                    } else {
				 	                        swal("오류발생",
				 	                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요."
				 	                        );
				 	                        console.log(data.error);
				 	                    }
				 	                }
				 	            });//ajax add
				  			}//if
				  		}//for
				  	});//function(result) 
			});
		}
	});
});