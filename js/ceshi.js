$(function(){
	
	$('#allChoose').click(function(){
		var i =$('#allChoose').prop('checked');
		$('.choose').prop('checked',i)
	})
	$('.choose:checkbox').click(function(){
		if($('.choose:checkbox').length == $('.choose:checked').length){
			$('#allChoose').prop('checked',true)
		}else{
			$('#allChoose').prop('checked', false)
		}
	})
})


$(function(){
	$('#submitBtn').click(function(){
		if($('.inp-text').val() === ""){
			alert("内容不能为空")
			return;
		}
	})
	
	var tr = $('<tr></tr>');
	tr.html('<td>'+$('.').click()+'</td><td>'+)
})
