let typer = new TypeIt('#paragraph', {
  speed: 100,
  deleteSpeed: 150,
})

let words = [
  'marvellous',
  'magnificent',
  'superb',
  'glorious',
  'sublime',
  'lovely',
  'delightful',
  'first-class',
  'super',
  'great',
  'amazing',
  'fantastic',
  'remarkable',
  'splendid',
  'supreme',
  'inspiring',
  'resplendent',
  'GAIO',
]

let last_index = words.length - 1

typer.type("We're building something")
typer.move(-18)
typer.type('<em style="color:#60d0ad">(always)&nbsp</em>')
typer.move('END')
for (index in words) {
  typer.type(`<b style="color:#60d0ad">&nbsp${words[index]}</b>`)
  typer.pause(1000)
  if (!(index == last_index)) typer.delete(words[index].length + 1)
}
typer.go()
