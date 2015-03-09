var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CSA');
var db = mongoose.connection;

/**
 * Initializing families for JustJuice
 */

 function makeSchemas(callback){
	var justJuice = mongoose.Schema({
		heads: [String] ,
		members: [String]
	});
	mongoose.model('JustJuice', justJuice);
	var juice = mongoose.model('JustJuice');

	var yellowFellow = mongoose.Schema({
		heads: [String] ,
		members: [String]
	});
	mongoose.model('YellowFellow', justJuice);
	var yellow = mongoose.model('YellowFellow');

	var kellyDumpling = mongoose.Schema({
		heads: [String] ,
		members: [String]
	});
	mongoose.model('KellysDumpling', justJuice);
	var kelly = mongoose.model('KellysDumpling');

	var nancyWantonJuice = mongoose.Schema({
		heads: [String] ,
		members: [String]
	});
	mongoose.model('KellysDumpling', justJuice);
	var nancy = mongoose.model('KellysDumpling');

	callback();
 }

 function allInit(){
 	juiceInit();
 	yellowInit();
 	kellyInit();
 	nancyInit();
 }

function juiceInit(){
	var juiceone = new juice({
		heads: ["David Cho", "Hyunwoo Yu", "Michelle Zhang"],
		members: ["Heather Cai", "Jenice Xiao", "Jesse Chen", "Matthew Teng"]
	});
	juiceone.save(function(err){
		if(err) throw err;
	});
	var juicetwo = new juice({
		heads: ["George Ding", "William Huang"],
		members: ["Heidi Guo", "Eric Zhang", "Kathy Huang"]
	});
	juicetwo.save(function(err){
		if(err) throw err;
	});
	var juicethree = new juice({
		heads: ["Justin Cheung", "Rayna Chen"],
		members: ["Alice Li", "Maxwell Lee", "Jeffrey Du", "Cynthia Fang"]
	});
	juicethree.save(function(err){
		if(err) throw err;
	});
	var juicefour = new juice({
		heads: ["Vivian Chu" , "Jack Chen"],
		members: ["Dianna Chen", "Eric Wu", "Ruby Yu", "Kevin Hui"]
	});
	juicefour.save(function(err){
		if(err) throw err;
	});
	var juicefive = new juice({
		heads: ["Brandon Eng" , "Kat Ren" , "Merry Huang"],
		members: ["Holly Deng", "Jack Kim", "Leo Tang", "Jason Wu", "Mary Chen"];
	});
	juicefive.save(function(err){
		if(err) throw err;
	});
	var juicesix = new juice({
		heads: ["Ana Yu", "Dan Cho"],
		members: ["Busenaz Tunc", "Amy Zhong", "Maria Chak"]
	});
	juicesix.save(function(err){
		if(err) throw err;
	});
	var juiceseven = new juice({
		heads: ["Evan Gao", "Sheng-nan Zhao", "Jess Yuan"],
		members: ["Robin Zhang", "Alice Li", "Liam Bui"]
	});
	juiceseven.save(function(err){
		if(err) throw err;
	});
}

function yellowInit(){
	var yellowone = new yellow({
		heads: ["Nancy Wang" , "Hong Jeon"],
		members: ["Jackie Dokku", "Megan Buteau", "Annie Cheng", "Tao Quan", "Brandon Zhang"]
	});
	yellowone.save(function(err){
		if(err) throw err;
	});
	var yellowtwo = new yellow({
		heads: ["Cynthia Chen", "Victor Zhao"],
		members: ["Jason Zhou", "Ronald Ho", "Crystal Liu", "Jessica Chen"]
	});
	yellowtwo.save(function(err){
		if(err) throw err;
	});
	var yellowthree = new yellow({
		heads: ["Kelly Guo", "Kenny Lee"],
		members: ["Alex Ma","Cindy Huang","Randy Tung","Archie Kong"]
	});
	yellowthree.save(function(err){
		if(err) throw err;
	});
	var yellowfour = new yellow({
		heads: ["Irene Li" , "Ricky Hoang"],
		members: ["Clarence Chung","Ryan Lin","Ashley Xue"]
	});
	yellowfour.save(function(err){
		if(err) throw err;
	});
	var yellowfive = new yellow({
		heads: ["Jamie Lo","Jeff Lin"],
		members: ["Dennis Liu","Rachelle Ng","Regina Chen"];
	});
	yellowfive.save(function(err){
		if(err) throw err;
	});
	var yellowsix = new yellow({
		heads: ["Bowen Zhang" , "Matt Ming"],
		members: ["David Li","Sherry Ge","Emily Zhang","Kevin Gu"]
	});
	yellowsix.save(function(err){
		if(err) throw err;
	});
	var yellowseven = new yellow({
		heads: ["Cynthia Li" , "Susan Tu"],
		members: ["Anna Mo","Guangze Xu","Mitchell Poon","Daisy Hu"]
	});
	yellowseven.save(function(err){
		if(err) throw err;
	});
}

function kellyInit(){
	var kellyone = new kelly({
		heads: ["Christine Chu" , "Tiffany Guo"],
		members: ["Peter Li","Alex Zhang","Michael Yao","Eugenia Xiao"]
	});
	kellyone.save(function(err){
		if(err) throw err;
	});
	var kellytwo = new kelly({
		heads: ["Ying Chen", "Christine Yu" , "Steven Liu"],
		members: ["Kevin Wang","Cody Leung","Sammi Wong"]
	});
	kellytwo.save(function(err){
		if(err) throw err;
	});
	var kellythree = new kelly({
		heads: ["Jimmy Guo" , "Ivy Wong"],
		members: ["Theresa Cao", "Alex Tang", "Patrick Wang", "David Moy"]
	});
	kellythree.save(function(err){
		if(err) throw err;
	});
	var kellyfour = new kelly({
		heads: ["Geyanne Lui" , "Zhi Low"],
		members: ["Patricia Zhang","Tina Jing","Qiuwei Yang","Sharon Chiu"]
	});
	kellyfour.save(function(err){
		if(err) throw err;
	});
	var kellyfive = new kelly({
		heads: ["Brandon Yep", "Alex Park"],
		members: ["Lawrence Ho","Calvin Ng","Angela Sun","Rosalind Ma"];
	});
	kellyfive.save(function(err){
		if(err) throw err;
	});
	var kellysix = new kelly({
		heads: ["Tommy Chen" , "Fulian Pan"],
		members: ["Ally Wu","Eileen Dai","Yujin Hur","Mingyung Jiang"]
	});
	kellyix.save(function(err){
		if(err) throw err;
	});
	var kellyseven = new kelly({
		heads: ["Mona Chen","Sarah Harrison"],
		members: ["Anna Bao","Catherine Louie","Jamie Liang"]
	});
	kellyseven.save(function(err){
		if(err) throw err;
	});
}

function nancyInit(){
	var nancyone = new nancy({
		heads: ["Richard Wan","Caroline Qu"],
		members: ["Allen Jiang","George Mao","Alexander Tang"]
	});
	nancyone.save(function(err){
		if(err) throw err;
	});
	var nancytwo = new nancy({
		heads: ["Nancy Ding", "Vivienne Chen" ,"Eric Lin"],
		members: ["Wei Wang","Anthea Ye","Susan Liu","Austin Liu"]
	});
	nancytwo.save(function(err){
		if(err) throw err;
	});
	var nancythree = new nancy({
		heads: ["Billy Gregg", "Eric McShane"],
		members: ["Matt Bange","Kevin Chan","Richard Li","Priscilla Wong","Anna Xu"]
	});
	nancythree.save(function(err){
		if(err) throw err;
	});
	var nancyfour = new nancy({
		heads: ["Jenny Zou","Christine Wang","Crystal Lee"],
		members: ["Krystie-Mei Chow","Caroline Shoane","Justin Duong"]
	});
	nancyfour.save(function(err){
		if(err) throw err;
	});
	var nancyfive = new nancy({
		heads: ["Ashley Wong" , "Alex Zhou"],
		members: ["Kaitlyn Yong" ,"Erinn Liu","Raymond Lau"];
	});
	juicefive.save(function(err){
		if(err) throw err;
	});
	var nancysix = new nancy({
		heads: ["Sisi Peng" , "Joey Kim"],
		members: ["Megan Lee","Stephanie Yiu","Young Kim"]
	});
	nancysix.save(function(err){
		if(err) throw err;
	});
	var nancyseven = new nancy({
		heads: ["Irene Jeon","Eunu Song", "James Chu"],
		members: ["Frank Chan","Vladlena Lee","Anita Trinh"]
	});
	nancyseven.save(function(err){
		if(err) throw err;
	});
}

db.once('open',function(){
	makeSchemas(allInit());
});