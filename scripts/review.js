module.exports = function (robot) {
var gdMember = [
					"@yuko.baba",
					"@emi.oyamada",
					"@kyohei.yamada",
					"@misakic",
					"@misato.nishijima",
					"@mizuki.kamimura",
					"@seira.ozeki",
					"@tetsuya.sato",
					"@yoshimi.nakamura",
					"@西嶋千晴_chiharu.nishijima"
				];

	robot.respond(/つー/i, function (msg) {
			for(var i = gdMember.length-1; i >= 0; i--) {
				var rand = Math.floor( Math.random() * ( i + 1 ) );
				[gdMember[i], gdMember[rand]] = [gdMember[rand], gdMember[i]]
			}
			choice = gdMember.slice(0,2);
			msg.send(choice);
	});

}