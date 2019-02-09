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

		"three-priests-and-three-devils-problem": {

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

		"five-pirates-problem": {

			"puzzleHeading": "Five Pirates Problem.",

			"puzzleQuestion": "5 pirates of different ages have a treasure of 100 gold coins."+ 

			"On their ship, they decide to split the coins using this scheme:"+ 
			
			"The oldest pirate proposes how to share the coins,"+
			  "and ALL pirates (including the oldest) vote for or against it."+ 
			
			"If 50% or more of the pirates vote for it,"+
			  "then the coins will be shared that way."+
			  "Otherwise, the pirate proposing the scheme will be thrown overboard,"+
			  "and the process is repeated with the pirates that remain."+
			
			"As pirates tend to be a bloodthirsty bunch,"+
			 "if a pirate would get the same number of coins if he voted for or against a proposal,"+
			 "he will vote against so that the pirate who proposed the plan will be thrown overboard."+
			
			"Assuming that all 5 pirates are intelligent, rational, greedy, and do not wish to die,"+ 
			"(and are rather good at math for pirates) what will happen?",

			"puzzleSolution": "The oldest pirate will propose a 98 : 0 : 1 : 0 : 1 split, in other words the oldest pirate gets 98 coins,"+ 
				"the middle pirate gets 1 coin and the youngest gets 1 coin.<br/>"+
			"Let us name the pirates (from oldest to youngest): Alex, Billy, Colin, Duncan and Eddie.<br/>"+
			"Working backwards:<br/>"+
			"2 Pirates: Duncan splits the coins 100 : 0 (giving himself all the gold)."+
				"His vote (50%) is enough to ensure the deal.<br/>"+
			"3 Pirates: Colin splits the coins 99 : 0 : 1."+
				"Eddie will accept this deal (getting just 1 coin),"+ 
				"because he knows that if he rejects the deal there will be only two pirates left,"+
				"and he gets nothing.<br/>"+
			"4 Pirates: Billy splits the coins 99 : 0 : 1 : 0."+
				 "By the same reasoning as before, Duncan will support this deal."+
				 "Billy would not waste a spare coin on Colin, because Colin knows that if he rejects the proposal,"+
				 "he will pocket 99 coins once Billy is thrown overboard."+ 
				 "Billy would also not give a coin to Eddie,"+
				 "because Eddie knows that if he rejects the proposal,"+
				 "he will receive a coin from Colin in the next round anyway.<br/>"+
			"5 Pirates: Alex splits the coins 98 : 0 : 1 : 0 : 1."+
			 	 "By offering a gold coin to Colin (who would otherwise get nothing) he is assured of a deal.",

			"puzzleInsertionDate": "04.07.2017"
		},
		"deadly-choice-puzzle": {

			"puzzleHeading": "Deadly Choice Puzzle",

			"puzzleQuestion": "A man is caught on the Kings property."+
			"He is brought before the King to be punished."+ 
			"The King says, You must give me a statement"+
			"If it is true, you will killed by lions."+
			"If it is false, you will be killed by trampling of wild buffalo."+
			"But in the end, the King has to let the man go."+
			"What was the man's statement?",

			"puzzleSolution": "I will be killed by trampling of wild buffalo."+

			"If you think about it carefully: the King can't say it is true,"+
			"because if so the man should be killed by the lions."+
			"But if he is killed by the lions, then his statement would be false,"+
			"and so should have been trampled by buffalo."+
			"So the King can't tell if it is a lie or truth, so decides to just let him go.<br/>",

			"puzzleInsertionDate": "24.01.2019"
		},
		"eight-marbles-weighing-puzzle": {

			"puzzleHeading": "Eight Marbles Weighing Puzzle",

			"puzzleQuestion": "Suppose you have 8 marbles and a two-pan balance used to compare the weight of 2 things."+
			"All of the marbles weigh the same except for one,"+
			"which is heavier than all of the others."+
			"How would you find the heaviest marble if you are only allowed to weigh the marbles 2 times?",

			"puzzleSolution": "So, let’s do this:"+ 
				"we put 3 marbles on each pan – for a total of 6 marbles on the pan,"+
				"and we leave 2 marbles off the pan.<br/>"+
				"Then, we compare the 6 marbles on the pan – if one side is heavier than the other then we only have 3 marbles left."+
				"We can compare 2 of those 3 marbles to each other,"+
				"and if they are the same weight then the 3rd is the heaviest,"+
				"and if one is heavier than the other then we have the heaviest in just 2 weighings.<br/>"+
				"If, when comparing the 6 marbles we find that both sides are equal,"+
				"then we know that the heaviest marble has to be in the 2 marbles that are not on the pan.<br/>"+
				"This then means that we only have to compare those 2 remaining marbles and we have the heaviest marble.<br/>"+
				"So, we have found our answer!<br/>",

			"puzzleInsertionDate": "24.01.2019"




		},
		"who-will-shout-first": {

			"puzzleHeading": "Who Will Shout First Puzzle",

			"puzzleQuestion": "4 criminals are caught and are to be punished."+
			 "The Judge allows them to be freed if they can solve a puzzle."+
			 "If they do not, they will be hung. They agreed.<br/>"+
			 "The 4 criminals are lined up on some steps (shown in picture)."+
			 "They are all facing in the same direction."+
			 "A wall seperates the fourth man from the other three.<br/>"+
			 "So to summarise :-"+
			 "Man 1 can see men 2 and 3.<br/>"+
			 "Man 2 can see man 3.<br/>"+
			 "Man 3 can see none of the others.<br/>"+
			 "Man 4 can see none of the others.<br/>"+
			
			"The criminals are wearing hats."+
			"They are told that there are two white hats and two black hats."+
			"The men initially don't know what colour hat they are wearing."+
			"They are told to shout out the colour of the hat that they are wearing as soon as they know for certain what colour it is."+

			"They are not allowed to turn round or move.<br/>"+
			"They are not allowed to talk to each other.<br/>"+
			"They are not allowed to take their hats off.<br/>"+
			
			"Who is the first person to shout out and why?<br/>",
			

			"puzzleSolution": "Man 1 will shout first."+
			"Suppose if Man1 will not shout then Man 2 surely shout.<br/>"+
			"Reason:<br/>"+
			
			"Man1 can see the other two criminals hats."+
			"If the hats are same color then he told his hat is opposite color of remaining two hats."+
			"So he shout first.<br/>"+
			
			"If Man1 not shout means that the color of hats (Man2,Man3) is different."+
			"So Man2 see the color of Man3 hat and he told the opposite color of Man3 hat is his hat.<br/>",

			"puzzleInsertionDate": "25.01.2019"
		},
		"break-the-gold-bar": {

			"puzzleHeading": "Break The Gold Bar Puzzle",

			"puzzleQuestion": "You’ve got someone working for you for seven days and a gold bar to pay them."+
				"You must pay the worker for their work at the end of every day."+
				"If you are only allowed to make two breaks in the gold bar,"+
				"how do you pay your worker?"+
				"(Assuming equal amount of work is done during each day thus requiring equal amount of pay for each day)",

				"puzzleSolution": "The trick is not to try and how to cut in such a way to make 7 equal pieces"+
				 "but rather to make transactions with the worker."+
				"Make two cuts on the gold bar such that you have the following sizes of bars.<br/>"+

				"1/7, 2/7 and 4/7."+
				"For convenience sake, I would just refer to the bars as 1, 2 and 4.<br/>"+
				
				"At the end of Day 1: Give Bar 1 (You- 2 and 4, Worker- 1)<br/>"+
				
				"At the end of Day 2: Give Bar 2, Take back Bar 1 (You- 1 and 4, Worker- 2)<br/>"+

				"At the end of Day 3: Give Bar 1 (You- 4, Worker- 1 and 2)<br/>"+

				"At the end of Day 4: Give Bar 4, Take back Bar 1 and Bar 2 (You- 1 and 2, Worker- 4)<br/>"+

				"At the end of Day 5: Give Bar 1 (You- 2, Worker- 1 and 4)<br/>"+

				"At the end of Day 6: Give Bar 2, Take back Bar 1 (You- 1, Worker- 2 and 4)<br/>"+

				"At the end of Day 7: Give Bar 1 (You- Empty, Worker- 1, 2 and 4)<br/>"+

				"That should take care of everything.<br/>",

			"puzzleInsertionDate": "25.01.2019"
		},
			"the-pot-of-beans": {

			"puzzleHeading": "The Pot of Beans Puzzle",

			"puzzleQuestion": "A pot contains 75 white beans and 150 black ones."+
			 "Next to the pot is a large pile of black beans."+
			 "A somewhat demented cook removes the beans from the pot, one at a time, according to the following strange rule:"+
			 "He removes two beans from the pot at random."+
			 "If atleast one of the beans is black, he places it on the bean pile and drops the other bean,"+
			 "no matter what color, back in the pot."+
			 "If both beans are white, on the other hand, he discards both of them"+
			 "and removes one black bean from the pile and drops it in the pot."+
			 "At each turn of this procedure, the pot has one less bean in it."+
			 "Eventually, just one bean is left in the pot. What color is it?",

			"puzzleSolution": "The answer is White."+
				"The cook removes the white beans two at a time,"+
				"and there is an odd number of them<br/>."+
				"When the cook gets to the last white bean and picks it up along with a black bean,"+
				"the white one always goes back into the pot.",

			"puzzleInsertionDate": "25.01.2019"
			},
		"old-man-and-three-sons": {

			"puzzleHeading": "Old Man and Three Sons",
	
			"puzzleQuestion": "An old man had three sons"+
				"He was on his death bed and wanted to leave all his property with his wisest son.<br/>"+

				"So he called all three of his sons and gave them equal amount of money.<br/>"+
				
				"He told them to buy something from that money that can fill their living room entirely.<br/>"+
				
				"The first son bought straw but due to shortage of money, he was not able to fill the entire room.<br/>"+
				
				"The second son bought sticks, but again they were not enough to fill the room.<br/>"+
				
				"But the third son bought two things that filled the room completely.<br/>"+
				
				"Can you find out what did he buy?<br/>",
	
			"puzzleSolution": "The third son bought a candle and a matchbox from the money.<br/>"+

			"He lit the candle and the room was filled with light.<br/>",
	
			"puzzleInsertionDate": "25.01.2019"		
	
		},
	
		}
	return jsonPuzzleObj;
}