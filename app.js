//$(document).ready(function () {
var friend = ["Jen", "Jamie", "Sequoya", "Logan", "Emily"];

var weapon = [
  "the coat hanger",
  "the water gun",
  "an elephant tusk",
  "1/2 of a kamehameha themed handgun",
  "a kitchen knife",
  "boredom",
  "IBS",
  "laser eyes",
  "the weight of Elon's wealth",
  "a lightsaber",
  "a summoned asteroid",
  "250 hours of a kitten's meow",
  "a broken keyboard",
  "rusty wires",
  "the banister decorations",
  "a vacuum sealed pool noodle",
  "hypnosis",
  "the meanest glare ever given",
  "an Xbox controller",
  "the ceiling fan blade",
];
var murderSite = [
  "Crack House",
  "river water",
  "Nottingham Brothel",
  "Dog Pound",
  "Mommy's bedroom swing",
  "Skunk's Den",
  "middle of the damn field",
  "Metaverse Server Room",
  "Secret Garden",
  "good Barbershop",
];
for (var i = 0; i < 100; i++) {
  //var div = $("h3").append("<div>some text</div>");
  var h3 = $("body").append("<h3>", "Accusation " + [i], "</h3>");
  h3.click(randomSelector[i]);
}

function randomSelector() {
  var friendSelect = [Math.floor(Math.random()).friend.length];
  var weaponSelect = [Math.floor(Math.random()).weapon.length];
  var murderSiteSelect = [Math.floor(Math.random()).murderSite.length];
}
//});

//[Math.floor(Math.random())];
