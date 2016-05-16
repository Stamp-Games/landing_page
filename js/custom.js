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
games.push(Game('Color Your Own Stamp','http://postalmuseum.si.edu/activity/coloraway/index.html','Want to design your own stamp? Check out these examples and become the next Picasso! '))
games.push(Game('Decode the Mail!','http://postalmuseum.si.edu/activities/games/decode-the-barcode.html','Can you crack the code and get mail where it\'s going?'))
games.push(Game('US Stamp Quiz','http://www.funtrivia.com/playquiz/quiz2544751d22a30.html','Do you know the answers to these ten stamp questions?'))
games.push(Game('US Stamp Quiz 2','http://www.funtrivia.com/playquiz/quiz290427213feb0.html','Ready for more challenging stamp questions? Prove it!'))

var gameList = document.getElementById('gameList')
for(var game in games){
	var image = games[game].image || image;
	gameList.innerHTML += '<a class="game row" href="'+ games[game].url +'"><div class="col-xs-3">'+image+'</div><h3 class="col-xs-5">'+games[game].name+'</h3><p class="col-xs-4">'+games[game].desc+'</p></a>';
}
