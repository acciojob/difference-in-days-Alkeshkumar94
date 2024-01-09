 var difference = function(date1, date2) {
	var dat1=Date.UTC(
		parseInt(date1.substring(0,4)),
		parseInt(date1.substring(5,7))-1,
		parseInt(date1.substring(8)),	
	);

	var dat2=Date.UTC(
		parseInt(date2.substring(0,4)),
		parseInt(date2.substring(5,7))-1,
		parseInt(date2.substring(8)),	
	);
	var timediff =date2-date1;
	var days=Math.floor(timediff/(24*60*60*60*1000));
return days;
}


// Do not change the code below.
const dateOne = prompt("Enter Start Date.");

const dateTwo = prompt("Enter End Date.");

alert(difference(dateOne, dateTwo));





