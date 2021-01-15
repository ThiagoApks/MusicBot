module.exports = ({
  name: "nowplaying",
  code: `$title[$songInfo[title]]
  $addField[URL:;$songInfo[url]]
  $addField[Duration:;$songInfo[duration]]
  $addField[Added by:;$userTag[$songInfo[userID]]]
  $footer[Comboio's Trucker 2021]
  $addTimestamp
  $color[$random[0;999999]]`
})