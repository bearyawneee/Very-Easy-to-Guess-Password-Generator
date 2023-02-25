
let generatorBtn = document.getElementById("generator-btn")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let passThree = document.getElementById("pass-three")

let nounChar = [
  "reading",
  "effort",
  "poetry",
  "vehicle",
  "history",
  "penalty",
  "estate",
  "decision",
  "fishing",
  "honey",
  "session",
  "fact",
  "weakness",
  "football",
  "knowledge",
  "concept",
  "member",
  "year",
  "supermarket",
  "competition",
  "thing",
  "entry",
  "marriage",
  "love",
  "leader",
  "television",
  "election",
  "soup",
  "communication",
  "advice",
  "software",
  "manufacturer",
  "replacement",
  "housing",
  "consequence",
  "presentation",
  "climate",
  "gate",
  "depth",
  "hair",
  "bonus",
  "data",
  "manager",
  "construction",
  "cheek",
  "explanation",
  "selection",
  "library",
  "wood",
  "version"]

let adjectiveChar = [
  "black-and-white",
  "ill-fated",
  "spiteful",
  "afraid",
  "cuddly",
  "lying",
  "five",
  "holistic",
  "jealous",
  "waggish",
  "workable",
  "careful",
  "frightened",
  "acid",
  "malicious",
  "equal",
  "shaggy",
  "versed",
  "possible",
  "steady",
  "different",
  "grubby",
  "salty",
  "boiling",
  "absent",
  "decisive",
  "pleasant",
  "draconian",
  "hissing",
  "sparkling",
  "woebegone",
  "piquant",
  "snotty",
  "spiffy",
  "regular",
  "nonstop",
  "temporary",
  "recent",
  "defiant",
  "cheap",
  "voracious",
  "wacky",
  "vagonizing",
  "wonderful",
  "next",
  "annoying",
  "frail",
  "wooden",
  "tricky",
  "somber"]

let numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "/", "?"]

generatorBtn.addEventListener("click", function () {
  let nounGen = Math.floor(Math.random() * nounChar.length)
  let adjectiveGen = Math.floor(Math.random() * adjectiveChar.length)
  let numberGen = Math.floor(Math.random() * numberChar.length)
  let symbolGen = Math.floor(Math.random() * symbolChar.length)
  passOne.textContent = adjectiveChar[adjectiveGen] + nounChar[nounGen] + numberChar[numberGen] + symbolChar[symbolGen]
})

generatorBtn.addEventListener("click", function () {
  let nounGen = Math.floor(Math.random() * nounChar.length)
  let adjectiveGen = Math.floor(Math.random() * adjectiveChar.length)
  let numberGen = Math.floor(Math.random() * numberChar.length)
  let symbolGen = Math.floor(Math.random() * symbolChar.length)
  passTwo.textContent = adjectiveChar[adjectiveGen] + nounChar[nounGen] + numberChar[numberGen] + symbolChar[symbolGen]
})