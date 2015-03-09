var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CSA');
var db = mongoose.connection;

db.once('open',function(){

	var events = mongoose.Schema({
		name: String,
		passed: Boolean,
		description: String,
		page: String,
		album: String,
		maps: String
	});
	mongoose.model('Events', events);
	var csaEvent = mongoose.model('Events');

	var justJuice = mongoose.Schema({
		heads: [String] ,
		members: [String],
		points: Number
	});
	mongoose.model('JustJuice', justJuice);
	var juice = mongoose.model('JustJuice');

	var yellowFellow = mongoose.Schema({
		heads: [String] ,
		members: [String] ,
		points: Number
	});
	mongoose.model('YellowFellow', justJuice);
	var yellow = mongoose.model('YellowFellow');

	var kellyDumpling = mongoose.Schema({
		heads: [String] ,
		members: [String] ,
		points: Number
	});
	mongoose.model('KellysDumpling', justJuice);
	var kelly = mongoose.model('KellysDumpling');

	var nancyWantonJuice = mongoose.Schema({
		heads: [String] ,
		members: [String] ,
		points: Number
	});
	mongoose.model('NancysWanton', justJuice);
	var nancy = mongoose.model('NancysWanton');

	var eventone = new csaEvent({
		name: "Social Week",
		passed: true,
		description: "At the beginning of the year CSA always welcomes the incoming freshman class with our first general body meeting of the year and follows it up with a suite of social events throughout the week. This provides a great opportunity for students who are interested in Chinese culture to come out, interact with each other, and see if CSA is a right fit for them. So if you're interested in Chinese culture, finding a family, meeting lots of new people, or eating food?? Come out to Chinese Students' Associations first GBody Meeting and Social Week! And no, you don't have to be Chinese.Then come out to our FREE social events where bigs and littles can mingle and find their perfect family!",
		page: "https://www.facebook.com/events/1483752148542496/",
		album: "javascript:;",
		maps: "https://www.google.com/maps/place/Goldwin+Smith+Hall/@42.449098,-76.483508,17z/data=!3m1!4b1!4m2!3m1!1s0x89d0818a12d45b8f:0xc7955445a8395783"
	});
	eventone.save(function(err){
		if (err) throw err;
	});

	var eventtwo = new csaEvent({
		name: "Midnight Dimsum",
		passed: true,
		description: "In the beginning months of school CSA always puts together its resources and brings a night of deliciousness and fun to the Cornell campus. We pick a large venue and gather up some of the best Chinese dimsum food and performances we can find around campus. The best part is that it's all free! So if you're interested in a night of free food and fun come join CSA for Midnight Dimsum!",
		page: "https://www.facebook.com/events/288269178033927/",
		album: "https://www.facebook.com/media/set/?set=a.375846159230956.1073741837.133383036810604&type=3",
		maps: "https://www.google.com/maps/place/Willard+Straight+Hall/@42.446592,-76.485676,17z/data=!3m1!4b1!4m2!3m1!1s0x89d0818966dd858d:0xdb77107b9b211095"
	});
	eventtwo.save(function(err){
		if (err) throw err;
	});

	var eventthree = new csaEvent({
		name: "Mid Autumn Festival",
		passed: true,
		description: "Join us for the 5th annual Mid-Autumn Festival hosted by Cornell Chinese Students Association (CSA)! Kickoff Homecoming with a bang with performances by Illuminations, Wushu, Shimtah, Yamatai, Breakfree and more! FREE Asian cuisine (including mooncakes), games, and potential giveaways await you! Learn what makes this multinational holiday special as we celebrate the night of the fullest moon. This event is family-friendly and open to all students and alumni. We thank our funding sources CUTonight, Cornell Asian Alumni Association, the Asian and Asian American Center, ALANA Intercultural Board, International Students Board and the Student Assembly Finance Commission for their generous support of our event.",
		page: "https://www.facebook.com/events/1553209048234529/",
		album: "https://www.facebook.com/media/set/?set=a.393164470832458.1073741840.133383036810604&type=3",
		maps: "https://www.google.com/maps/place/Ho+Plaza,+Cornell+University,+Ithaca,+NY/@42.4467057,-76.4850658,17z/data=!3m1!4b1!4m2!3m1!1s0x89d0818bde205a97:0xc84bbe029d213abc"
	});
	eventthree.save(function(err){
		if (err) throw err;
	});

	var eventfour = new csaEvent({
		name: "Semiformal",
		passed: true,
		description: "None yet.",
		page: "javascript:;",
		album: "javascript:;",
		maps: "javascript:;"
	});
	eventfour.save(function(err){
		if (err) throw err;
	});

	var eventfive = new csaEvent({
		name: "Lunar New Year",
		passed: true,
		description: "None yet.",
		page: "javascript:;",
		album: "javascript:;",
		maps: "javascript:;"
	});
	eventfive.save(function(err){
		if (err) throw err;
	});

	var eventsix = new csaEvent({
		name: "China Night",
		passed: false,
		description: "None yet.",
		page: "javascript:;",
		album: "javascript:;",
		maps: "javascript:;"
	});
	eventsix.save(function(err){
		if (err) throw err;
	});

	var juiceone = new juice({
		heads: ["David Cho", "Hyunwoo Yu", "Michelle Zhang"],
		members: ["Heather Cai", "Jenice Xiao", "Jesse Chen", "Matthew Teng"],
		points: 0
	});
	juiceone.save(function(err){
		if(err) throw err;
	});
	var juicetwo = new juice({
		heads: ["George Ding", "William Huang"],
		members: ["Heidi Guo", "Eric Zhang", "Kathy Huang"],
		points: 0
	});
	juicetwo.save(function(err){
		if(err) throw err;
	});
	var juicethree = new juice({
		heads: ["Justin Cheung", "Rayna Chen"],
		members: ["Alice Li", "Maxwell Lee", "Jeffrey Du", "Cynthia Fang"],
		points: 0
	});
	juicethree.save(function(err){
		if(err) throw err;
	});
	var juicefour = new juice({
		heads: ["Vivian Chu" , "Jack Chen"],
		members: ["Dianna Chen", "Eric Wu", "Ruby Yu", "Kevin Hui"],
		points: 0
	});
	juicefour.save(function(err){
		if(err) throw err;
	});
	var juicefive = new juice({
		heads: ["Brandon Eng" , "Kat Ren" , "Merry Huang"],
		members: ["Holly Deng", "Jack Kim", "Leo Tang", "Jason Wu", "Mary Chen"],
		points: 0
	});
	juicefive.save(function(err){
		if(err) throw err;
	});
	var juicesix = new juice({
		heads: ["Ana Yu", "Dan Cho"],
		members: ["Busenaz Tunc", "Amy Zhong", "Maria Chak"],
		points: 0
	});
	juicesix.save(function(err){
		if(err) throw err;
	});
	var juiceseven = new juice({
		heads: ["Evan Gao", "Sheng-nan Zhao", "Jess Yuan"],
		members: ["Robin Zhang", "Alice Li", "Liam Bui"],
		points: 0
	});
	juiceseven.save(function(err){
		if(err) throw err;
	});

	var yellowone = new yellow({
		heads: ["Nancy Wang" , "Hong Jeon"],
		members: ["Jackie Dokku", "Megan Buteau", "Annie Cheng", "Tao Quan", "Brandon Zhang"],
		points: 0
	});
	yellowone.save(function(err){
		if(err) throw err;
	});
	var yellowtwo = new yellow({
		heads: ["Cynthia Chen", "Victor Zhao"],
		members: ["Jason Zhou", "Ronald Ho", "Crystal Liu", "Jessica Chen"],
		points: 0
	});
	yellowtwo.save(function(err){
		if(err) throw err;
	});
	var yellowthree = new yellow({
		heads: ["Kelly Guo", "Kenny Lee"],
		members: ["Alex Ma","Cindy Huang","Randy Tung","Archie Kong"],
		points: 0
	});
	yellowthree.save(function(err){
		if(err) throw err;
	});
	var yellowfour = new yellow({
		heads: ["Irene Li" , "Ricky Hoang"],
		members: ["Clarence Chung","Ryan Lin","Ashley Xue"],
		points: 0
	});
	yellowfour.save(function(err){
		if(err) throw err;
	});
	var yellowfive = new yellow({
		heads: ["Jamie Lo","Jeff Lin"],
		members: ["Dennis Liu","Rachelle Ng","Regina Chen"],
		points: 0
	});
	yellowfive.save(function(err){
		if(err) throw err;
	});
	var yellowsix = new yellow({
		heads: ["Bowen Zhang" , "Matt Ming"],
		members: ["David Li","Sherry Ge","Emily Zhang","Kevin Gu"],
		points: 0
	});
	yellowsix.save(function(err){
		if(err) throw err;
	});
	var yellowseven = new yellow({
		heads: ["Cynthia Li" , "Susan Tu"],
		members: ["Anna Mo","Guangze Xu","Mitchell Poon","Daisy Hu"],
		points: 0
	});
	yellowseven.save(function(err){
		if(err) throw err;
	});

	var kellyone = new kelly({
		heads: ["Christine Chu" , "Tiffany Guo"],
		members: ["Peter Li","Alex Zhang","Michael Yao","Eugenia Xiao"],
		points: 0
	});
	kellyone.save(function(err){
		if(err) throw err;
	});
	var kellytwo = new kelly({
		heads: ["Ying Chen", "Christine Yu" , "Steven Liu"],
		members: ["Kevin Wang","Cody Leung","Sammi Wong"],
		points: 0
	});
	kellytwo.save(function(err){
		if(err) throw err;
	});
	var kellythree = new kelly({
		heads: ["Jimmy Guo" , "Ivy Wong"],
		members: ["Theresa Cao", "Alex Tang", "Patrick Wang", "David Moy"],
		points: 0
	});
	kellythree.save(function(err){
		if(err) throw err;
	});
	var kellyfour = new kelly({
		heads: ["Geyanne Lui" , "Zhi Low"],
		members: ["Patricia Zhang","Tina Jing","Qiuwei Yang","Sharon Chiu"],
		points: 0
	});
	kellyfour.save(function(err){
		if(err) throw err;
	});
	var kellyfive = new kelly({
		heads: ["Brandon Yep", "Alex Park"],
		members: ["Lawrence Ho","Calvin Ng","Angela Sun","Rosalind Ma"],
		points: 0
	});
	kellyfive.save(function(err){
		if(err) throw err;
	});
	var kellysix = new kelly({
		heads: ["Tommy Chen" , "Fulian Pan"],
		members: ["Ally Wu","Eileen Dai","Yujin Hur","Mingyung Jiang"],
		points: 0
	});
	kellysix.save(function(err){
		if(err) throw err;
	});
	var kellyseven = new kelly({
		heads: ["Mona Chen","Sarah Harrison"],
		members: ["Anna Bao","Catherine Louie","Jamie Liang"],
		points: 0
	});
	kellyseven.save(function(err){
		if(err) throw err;
	});

	var nancyone = new nancy({
		heads: ["Richard Wan","Caroline Qu"],
		members: ["Allen Jiang","George Mao","Alexander Tang"],
		points: 0
	});
	nancyone.save(function(err){
		if(err) throw err;
	});
	var nancytwo = new nancy({
		heads: ["Nancy Ding", "Vivienne Chen" ,"Eric Lin"],
		members: ["Wei Wang","Anthea Ye","Susan Liu","Austin Liu"],
		points: 0
	});
	nancytwo.save(function(err){
		if(err) throw err;
	});
	var nancythree = new nancy({
		heads: ["Billy Gregg", "Eric McShane"],
		members: ["Matt Bange","Kevin Chan","Richard Li","Priscilla Wong","Anna Xu"],
		points: 0
	});
	nancythree.save(function(err){
		if(err) throw err;
	});
	var nancyfour = new nancy({
		heads: ["Jenny Zou","Christine Wang","Crystal Lee"],
		members: ["Krystie-Mei Chow","Caroline Shoane","Justin Duong"],
		points: 0
	});
	nancyfour.save(function(err){
		if(err) throw err;
	});
	var nancyfive = new nancy({
		heads: ["Ashley Wong" , "Alex Zhou"],
		members: ["Kaitlyn Yong" ,"Erinn Liu","Raymond Lau"],
		points: 0
	});
	nancyfive.save(function(err){
		if(err) throw err;
	});
	var nancysix = new nancy({
		heads: ["Sisi Peng" , "Joey Kim"],
		members: ["Megan Lee","Stephanie Yiu","Young Kim"],
		points: 0
	});
	nancysix.save(function(err){
		if(err) throw err;
	});
	var nancyseven = new nancy({
		heads: ["Irene Jeon","Eunu Song", "James Chu"],
		members: ["Frank Chan","Vladlena Lee","Anita Trinh"],
		points: 0
	});
	nancyseven.save(function(err){
		if(err) throw err;
	});
});