var dateDiffInDays = function (date1, date2) {
	var dat1=Date.UTC(
		parseInt(dat1.substring(0,4)),
		parseInt(dat1.substring(5,7))-1,
		parseInt(dat1.substring(8)),	
	);

	var dat2=Date.UTC(
		parseInt(dat2.substring(0,4)),
		parseInt(dat2.substring(5,7))-1,
		parseInt(dat2.substring(8)),	
	);
	var timediff =dat2-dat1;
	var days=Math.floor(timediff/(24*60*60*60));
	return days;
}


// Do not change the code below.
const dateOne = prompt("Enter Start Date.");

const dateTwo = prompt("Enter End Date.");

alert(dateDiffInDays(dateOne, dateTwo));


