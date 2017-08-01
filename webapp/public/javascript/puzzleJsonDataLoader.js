var questionsAnswersArrayDataMap;

var questionAnswersJsonObjDataMap;

var fillQuestionAnswerDataMap = function () {

	questionsAnswersArrayDataMap = new Object();

	questionAnswersJsonObjDataMap = new Object();

	var jsonPuzzleObj = fillAndReturnInterviewPuzzles();

	var jsonPuzzleArray = convertAndReturnJsonObjectToArray(jsonPuzzleObj);

	questionsAnswersArrayDataMap['interviewPuzzles'] = jsonPuzzleArray;

	questionAnswersJsonObjDataMap['interviewPuzzles'] = jsonPuzzleObj;

};

var getFilledArrayDataMapWithGivenKey = function (key) {
	return questionsAnswersArrayDataMap[key];
};

var getFilledJsonObjWithGivenKey = function (question) {
	for (var key in questionAnswersJsonObjDataMap) {
		var jsonObj = questionAnswersJsonObjDataMap[key];
		if (jsonObj.hasOwnProperty(question))
			return jsonObj[question];
	}
};


exports.fillQuestionAnswerDataMap = fillQuestionAnswerDataMap;

exports.getFilledArrayDataMapWithGivenKey = getFilledArrayDataMapWithGivenKey;

exports.getFilledJsonObjWithGivenKey = getFilledJsonObjWithGivenKey;

function convertAndReturnJsonObjectToArray(jsonObj) {
	var jsonArray = [];
	for (var key in jsonObj) {
		eachJsonObj = jsonObj[key];
		eachJsonObj.puzzleURL = key;
		jsonArray.push(eachJsonObj);
	}
	return jsonArray;
}

function fillAndReturnInterviewPuzzles() {

	var jsonPuzzleObj = {

		"three-bulbs-problem": {

			"puzzleHeading": "Three Bulbs Problem",

			"puzzleQuestion": "Suppose that you are standing in a hallway next to 3 light switches,"
			+ "which are all off. There is another room down the hallway,"
			+ "where there are 3 incandescent light bulbs –"
			+ "each light bulb is operated by one of the switches in the hallway."
			+ "Because the light bulbs are in another room,"
			+ "you can not see them since you are standing in the hallway."
			+ "How would you figure out which switch operates which light bulb,"
			+ "if you can only go the room with the light bulbs one time, and only one time?",


			"puzzleSolution": "A lot of times it helps just to state the obvious,"
			+ "so let’s do that here:"
			+ "If a switch is in the ‘on’ position then the light bulb corresponding to that"
			+ "switch will light up as well."
			+ "What about the light bulbs? Well,"
			+ "we do know that incandescent light bulbs get hot when they are on –"
			+ "this sounds like it might just lead to something useful that can help us."
			+ "We know that the longer an incandescent light bulb stays on the hotter it gets."
			+ "So, if we turn one switch off after 5 minutes, turn the second one on, and"
			+ "leave the last one off then what happens? Well, the light bulb corresponding to the first switch will"
			+ "still be warm (even though it’s off), the bulb corresponding to the second switch will be on,"
			+ "and the bulb corresponding to the last switch will be off. This is enough information so that"
			+ "we can go into the attic only once and figure out which switch belongs to which light bulb."
			+ "This question is tricky – because it requires thinking somewhat ‘creatively’ to"
			+ "come up with a solution. Measuring someone’s intelligence based on a problem like"
			+ "this is probably not a good idea – whether people stumble open an answer to this is often due to their luck."
			+ "Unless, of course, they already knew the answer.",

			"puzzleInsertionDate": "04.07.2017"
		},



		"rickety-bridge-problem": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem1": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem2": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem3": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem1": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem4": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem5": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem6": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem7": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem8": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem1": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem9": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem10": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem11": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem12": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem13": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem14": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem15": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem16": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem17": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem18": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem19": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem20": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		},

		"rickety-bridge-problem21": {

			"puzzleHeading": "Four People on Rickety Bridge",

			"puzzleQuestion": "Four people need to cross a rickety bridge at night. "
			+ "Unfortunately, they have only one torch and the bridge is too dangerous to cross without one. "
			+ "The bridge is only strong enough to support two people at a time. "
			+ "Not all people take the same time to cross the bridge. "
			+ "Times for each person:  1 min, 2 mins, 7 mins and 10 mins. "
			+ "What is the shortest time needed for all four of them to cross the bridge?",

			"puzzleSolution": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. "
			+ "How long would that take ? 10 + 1 + 7 + 1 + 2 = 21 mins. Is that it? "
			+ "No. That would make this question too simple even as a warm up question.<br/>"
			+ "Let's brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together."
			+ "If they cross together, then we need one of them to come back to get the others."
			+ "That would not be ideal. How do we get around that? "
			+ "Maybe we can have 1 waiting on the other side to bring the torch back. Ahaa, we are getting closer."
			+ "The fastest way to get 1 across and be back is to use 2 to usher 1 across. "
			+ "So let's put all this together.<br/>" + "1 and 2 go cross <br/> " + "2 comes back <br/> " + "7 and 10 go across<br/> "
			+ "1 comes back <br/>"
			+ "1 and 2 go across (done).<br/>",

			"puzzleInsertionDate": "04.07.2017"
		}
	}
	return jsonPuzzleObj;
}