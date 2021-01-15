module.exports = ({
  name: "play",
  code: `$title[Tocando: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]]
  $addField[Duracao:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;];no]
  $addField[Colocado por:;$userTag[$authorID];no]
  $addField[URL:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;];no]
  $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
   $playSong[$message;:x:** | Opa, som nao encontrado...**]
  $footer[Comboio's Trucker 2021]
  $addTimestamp
  $color[$random[0;999999]]`
})