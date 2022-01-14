const canvacord = require("canvacord");
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8081);


const rank = new canvacord.Rank()
    .setAvatar(rankuser.displayAvatarURL({ dynamic: false, format: 'png' }))
    .setCurrentXP(Number(curpoints.toFixed(2)), color)
    .setRequiredXP(Number(curnextlevel.toFixed(2)), color)
    .setStatus(status, false, 7)
    .renderEmojis(true)
    .setProgressBar(color, "COLOR")
    .setRankColor(color, "COLOR")
    .setLevelColor(color, "COLOR")
    .setUsername(rankuser.username, color)
    .setRank(Number(i), "Rank", true)
    .setLevel(Number(client.points.get(key, `level`)), "Level", true)
    .setDiscriminator(rankuser.discriminator, color);

rank.build().then(async data => {

});
