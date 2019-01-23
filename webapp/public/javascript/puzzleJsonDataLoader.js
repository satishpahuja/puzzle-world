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

function getInterviewPuzzlesArrayWRTSearchKeywords(searchKeyword) {
	var jsonArray = [];
	var searchKeyArr = searchKeyword.split(' ');
	var isKeywordFound = []; 
	for (var puzzleJsonArray in questionsAnswersArrayDataMap) {
		for (var puzzleJsonObj in puzzleJsonArray) {
			for (var searchKey in searchKeyArr) {
				if (puzzleJsonObj.puzzleHeading.indexOf(searchKeyword) >= 0 || puzzleJsonObj.puzzleQuestion.indexOf(searchKeyword) >= 0 || puzzleJsonObj.puzzleSolution.indexOf(searchKeyword) >= 0 ) {
					isKeywordFound.push(true);
				}
			}
			if(isKeywordFound.indexOf(false)<0){
				jsonArray.push(puzzleJsonObj);
			}
		}
	}
	return puzzleJsonObj;
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

		"three-Priests-and-three-devils-problem ": {

			"puzzleHeading": "Three Priests and Three Devils",

			"puzzleQuestion": "There are 3 devils and 3 Priests.<br/>"+
			"They all have to cross a river in a boat.<br/>"+
			"Boat can only carry two people at a time.<br/>"+
			"As long as there are equal number of devils and priests,then devils will not eat Priest.<br/>"+
			"If the number of devils are greater than the number of priests on the same side of the river"+
			"then devils will eat the priests.<br/"+
			"So how can we make all the 6 peoples to arrive to the other side safely?",

			"puzzleSolution":"To arrive all the priests and devils to the other side, 6 steps are to be followed<br/>"+
			"1) Firstly one devil and one priest will go to the other side."+
				"Devil will stay to the other side while priest will come back with the boat.<br/>"+
			"2) Remaining two devils will go to the other side."+
				 "One devil will stay to the other side while one devil will come again with the boat."+
				 "So total two devils are on the another side of river and 3 priests and 1 devil is on the one side of the river.<br/>"+
			"3) Now two priests will go."+
				 "One priest will stay while 1 priest and 1 devil come back with the boat.<br/>"+
			"4) Now remaining two priests will go to the other side of the river."+
				 "Total 3 priests and 1 devil is on the one side while 2 devils is on the another side of the river."+
				 "1 devil will come back with the boat.<br/>"+
			"5) 2 devils will go to the other side of the river."+
				 "1 devil will stay and 1 devil will again go back with the boat.<br/>"+
			"6) Now the remaining 2 devils will come to the other side of the river.<br/>"+
			"All the 3 priests and 3 devils arrive safely.<br/>",

			"puzzleInsertionDate": "23.01.2019"
		},

		"water-jug-problem": {

			"puzzleHeading": "Water Jug Problem",

			"puzzleQuestion": "We have two water jugs,"+
			"one measures 4 Gallons (4G) while the other measure 9 Gallons (9G)."+
			"But there is no measuring label mentioned on either of these two jugs"+
			"i.e. we cannot know the exact amount filled in the jug."+
			"Now, assuming there is an infinite amount of water supply,"+
			"can we measure all 1G, 2G, 3G…….. upto 9G using these unmarked jugs.<br/>"+
			"Hint: We can empty the jugs, and transfer water from one jug to other.<br/>",

			"puzzleSolution": "Yes, we can measure all from 1G to 9G.<br/>"+
			"4G: Simply fill the 4G jug completely.<br/>"+
			"9G: Simply fill the 9G jug completely.<br/>"+
			"5G: Fill the 9G jug fully."+
				 "Now transfer water from 9G to 4G till 4G gets full."+
				 "Now 9G will have 5Gallons of water. Hence, measured 5G.<br/>"+
			"1G: Fill the 9G jug to its maximum."+
				 "Now transfer water from 9G to 4G till 4G gets full."+
				 "Empty the 4G jug."+
				 "Again transfer from 9G to 4G till 4G gets full. Now we are left with 1G in 9G jug.<br/>"+
			"8G: Fill up 4G and empty it into 9G."+
				 "Again fill up 4G and empty it into 9G. Now 9G has 8 Gallons of water.<br/"+
			"3G: Firstly, fill the 4G jug and empty it into 9G jug. Again fill 4G and empty it into 9G."+
				 "Again repeat the same procedure."+ 
				 "So now 4G jug will have 3G amount of water and 9G will be full. Hence, measured 3G.<br/>"+
			"7G: Measure 3G as mentioned above."+ 
				 "Now transfer this 3 Gallons of water from 4G to 9G."+
				 "And now completely fill 4G jug."+
				 "Now we have 4 Gallons in 4G jug and 3 Gallons in 9G jug. Hence, measured 7G.<br/>"+
			"2G: As mentioned above, firstly measure up to 7G."+
				 "The scenario is that 4G jug is full and 9G jug has 3G water."+
				 "Transfer the water from 4G to 9G so that 4G becomes empty and 9G measures 7G."+
				 "Now completely fill 4G and then start transferring water to 9G till 9G becomes full."+
				 "Now we will be left with only 2G in 4G jug. Hence, measured 2G.<br/>"+
			"6G: Repeat the same procedure till measuring 2G as stated above."+
				 "Now empty the 9G jug and transfer 2G from 4G jug to 9G jug."+
				 "And now fill up the 4G jug <br/>",

			"puzzleInsertionDate": "23.01.2019"
		},

		"Camel-and-Banana-Puzzle": {

			"puzzleHeading": "Camel and Banana Puzzle",

			"puzzleQuestion": "A person has 3000 bananas and a camel."+
			"The person wants to transport maximum number of bananas to a destination"+
			"which is 1000 KMs away, the camel as a mode of transportation."+
			"The camel cannot carry more than 1000 bananas at a time"+
			"and eats a banana every km it travels."+
			"What is the maximum number of bananas that can be transferred to the destination using only camel"+
			"(no other mode of transportation is allowed).",

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

		"": {

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