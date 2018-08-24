module.exports = (robot) ->
  robot.hear /PING$/i, (msg) ->
    msg.send "PONG"