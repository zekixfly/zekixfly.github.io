var recordList = recordTxt();

//build record list
for(var i = 0; i<recordList.length; i++) {
	if(i==0) {
		$('<tr class="top">').html('<td>'+recordList[i].date+'</td><td>'+ recordList[i].description + '</td>').appendTo('table#record');
	}
	else {
		$('<tr>').html('<td>'+recordList[i].date+'</td><td>'+ recordList[i].description + '</td>').appendTo('table#record');
	}
	
}