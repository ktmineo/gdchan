module.exports = function (robot) {
var gdMember = [
					"111",
					"222",
					"333",
					"444",
					"555",
					"666",
					"777",
					"888",
					"999",
					"000"
				];

	robot.respond(/レビューして/i, function (msg) {
			for(var i = gdMember.length-1; i >= 0; i--) {
				var rand = Math.floor( Math.random() * ( i + 1 ) );
				[gdMember[i], gdMember[rand]] = [gdMember[rand], gdMember[i]]
			}
			choice = gdMember.slice(0,2);
			msg.send(choice);
	});

}