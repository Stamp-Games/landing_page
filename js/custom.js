var games = [];
var image = $('.hide').html();
function Game(name,url,desc,image){
	return {
		name:name,
		url:url,
		desc:desc,
		image:image
	}
}
// to add an image, add the URL as the last parameter
games.push(Game('Color Your Own Stamp','http://postalmuseum.si.edu/activity/coloraway/index.html','Want to design your own stamp? Check out these examples and become the next Picasso! '))
games.push(Game('Decode the Mail!','http://postalmuseum.si.edu/activities/games/decode-the-barcode.html','Can you crack the code and get mail where it\'s going?'))
games.push(Game('US Stamp Quiz','http://www.funtrivia.com/playquiz/quiz2544751d22a30.html','Do you know the answers to these ten stamp questions?'))
games.push(Game('US Stamp Quiz 2','http://www.funtrivia.com/playquiz/quiz290427213feb0.html','Ready for more challenging stamp questions? Prove it!'))
games.push(Game('Help Keep Mail Safe', 'http://postalmuseum.si.edu/helpkeepmailsafe/', 'In this game, students read pieces of mail and determine if they are legitimate or scams'))
games.push(Game('Start Stamp Collecting!', 'http://postalmuseum.si.edu/activity/stamp_collecting/index.html', 'Learn the basics of stamp collecting!'))
games.push(Game('Stamp Matching Game', 'http://postalmuseum.si.edu/activity/matching/matching_game.html', 'Test your memory, and get the best time in this matching game!'))
games.push(Game('Mail Sorting Game', 'http://postalmuseum.si.edu/activity/mail_sorting/mail_sorting_game.html', 'How fast can you sort the mail? Try to get the best time!'))
games.push(Game('Rail, Sail, and Overland Mail', 'http://postalmuseum.si.edu/RSOM/RSoOM.html', 'Learn how mail makes its way across the country. Can you pick the best route?'))
games.push(Game('The Postmasters Challenge', 'http://postalmuseum.si.edu/activity/challenge/', 'Think you know it all? Take this quiz and see if you\'re ready to be the next Postmaster General!'))
games.push(Game('Lettermania', 'http://postalmuseum.si.edu/activity/lettermania/index.html', 'How well do you know the tools of stamp collecting? Test yourself with this fun word quiz!'))
games.push(Game('Stamp Word Search', 'http://postalmuseum.si.edu/activity/wordsearch/index.html', 'Can you find the hidden words and get the best score?'))
games.push(Game('Presidential Crossword','http://www.stampsmarter.com/aps/PresidentCrossword/presidents.php','A crossword puzzle of presidential stamps.'))			
games.push(Game('Space Crossword','http://www.stampsmarter.com/aps/spacecrossword/space.php','A crossword puzzle with out of this world stamps'))
games.push(Game('Muppet Memory','http://www.stampsmarter.com/aps/muppets/index.php','A memory game feature Jim Hensons muppets'))
games.push(Game('Penguin Jigsaw Puzzle','http://www.stampsmarter.com/aps/jigsaws/Jig2/JigsawGame.php','A jigsaw puzzle of stamps'))
games.push(Game('Zodiac Jigaw Puzzle','http://www.stampsmarter.com/aps/jigsaws/Jig1/JigsawGame.php','A jigsaw puzzle of a Chinese zodiac'))
games.push(Game('Muppet Jigsaw','http://www.stampsmarter.com/aps/jigsaws/Jig3/JigsawGame.php','A muppet themed stamp jigsaw puzzle'))
games.push(Game('Penguin Memory','http://www.stampsmarter.com/aps/penguins/index.php','A penguin stamp themed memory game'))
games.push(Game('Stamp knowledge crossword','http://www.stampsmarter.com/aps/generalcrossword/general.php','A crossword featuring general stamp knowledge'))
games.push(Game('Star Wars Memory','http://www.stampsmarter.com/aps/starwars/index.php','Star wars themed stamp memory'))
games.push(Game('Train Memory','http://www.stampsmarter.com/aps/trains/index.php','Train themed memory game'))
games.push(Game('Chinese Zodiac Memory','http://www.stampsmarter.com/aps/zodiac/index.php','Chinese Themed zodiac memory game'))
games.push(Game('Flower Memory','http://www.stampsmarter.com/aps/flowers/index.php','Flower themed memory'))
games.push(Game('Dinosaur Memory','http://www.stampsmarter.com/aps/dinos/index.php','Dinosaur themed memory'))
games.push(Game('Philatelist Face-off','https://peaceful-sea-34150.herokuapp.com/#/','Stamp trivia game with multiple topics.'))
games.push(Game('Stampy Bird','http://robertonovelo.github.io/Stampy-Bird/','Stamp version of Flappy bird. Get the stamp through the blockades.'))

var gameList = document.getElementById('gameList')
for(var game in games){
	if (games[game].image){
		var image = '<img height=100 src="'+games[game].image+'" />'
	}
	
	gameList.innerHTML += '<a class="game row" href="'+ games[game].url +'"><div class="col-xs-3">'+image+'</div><h3 class="col-xs-5">'+games[game].name+'</h3><p class="col-xs-4">'+games[game].desc+'</p></a>';
}
