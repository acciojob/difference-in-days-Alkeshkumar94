var dateDiffInDays = function (date1, date2) {
  //   write your code here	const dat1=Date.UTC(
		parseInt(dat1.substring(0,4)),
		parseInt(dat1.substring(5,7))-1,
		parseInt(dat1.substring(8)),	
	);

	const date2=Date.UTC(
		parseInt(date2.substring(0,4)),
		parseInt(date2.substring(5,7))-1,
		parseInt(date2.substring(8)),	
	);
	const timediff =date2-date1;
	const days=Math.floor(timediff/24*60*60*60);
	return days;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

