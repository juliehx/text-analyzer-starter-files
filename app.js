// your code here!
//console.log("hello");

function formatInput(string) {
	var result = string;
	return result.toLowerCase().match(/\b[^\s]+\b/g);
}

function getWordCount(arr) {
	return arr.length;
}

function getUniqueCount(arr) {
	var uniqueArr = [];
	arr.forEach(function(elem) {
		if(!uniqueArr.includes(elem)) {
			uniqueArr.push(elem);
		}
	});
	return uniqueArr.length;
}

function getAvgWordLength(arr) {
	var avg = 0;
	arr.forEach(function(elem) {
		avg += elem.length;
	});
	avg = avg / arr.length;
	return avg.toFixed(3);
}

function analyzeText(arr) {
	console.log(arr);
	var wordCount = getWordCount(arr);
	console.log(wordCount);
	var uniqueCount = getUniqueCount(arr);
	console.log(uniqueCount);
	var avgWordLen = getAvgWordLength(arr);
	console.log(avgWordLen);

	$('.text-report').removeClass('hidden');
	$('.text-report').children().eq(1).text(wordCount);
	$('.text-report').children().eq(3).text(uniqueCount);
	$('.text-report').children().eq(5).text(avgWordLen + " characters");
}

function handleSubmit() {
	$("#text-form").submit(function(event) {
		event.preventDefault();
		var userInput = $(this).find("#user-text");
		var inputArr = formatInput(userInput.val());
		analyzeText(inputArr);
	});
}

$(handleSubmit);