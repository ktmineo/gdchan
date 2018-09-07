import request from 'request';

module.exports = function (robot) {
	robot.respond(/レビューして/i, function (msg) {
		const url = 'https://slack.com/api/channels.list?token=' + process.env.HUBOT_SLACK_TOKEN;

		//ch 一覧取得
		request(url, (err, res, body){
			const channel = findChannel(JSON.parse(body).channels, msg.message.room);
			console.log('get ch');
			console.log(channel);

			//bot以外で抽選
			const botId = robot.adapter.self.id;
			const filterdMembers = channel.members.filter ((member) {
				return member !== botId;
			});
			consol.log(filterdMembers);

			const member = msg.random(filterdMembers);

			//送信
			msg.send('<@' + member + '> レビューお願いします。 :tea:');
		});
	});
｝

function findChannel(channels, targetName) {
	for (const channel of channels) {
		if (channel.name === targetName) {
			return channel;
		}
	}
	return null;
};