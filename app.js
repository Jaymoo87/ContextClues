$(document).ready(function () {
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
  $("body").append("<div></div>");
  for (var i = 1; i < 101; i++) {
    //var div = $("h3").append("<div>some text</div>");
    var h3 = $("<h3>Accusation " + i + "</h3>");
    $("div").append(h3);
    //click event for the accusations
    $(h3).click(randomSelector(i));
  }
  //parent function
  function randomSelector(i) {
    //random select array objects   (friend, weapon, murderSite are initially defined/ global scope )
    var friendSelect = friend[Math.floor(Math.random() * friend.length)];
    var weaponSelect = weapon[Math.floor(Math.random() * weapon.length)];
    var murderSiteSelect =
      murderSite[Math.floor(Math.random() * murderSite.length)];
    //child function (has access to the variables within the parent)
    function whoDoneIt() {
      //alert message with random array selections. (friendSelect, weaponSelect, murderSiteSelect are all defined in the parent function)
      alert(
        "I accuse " +
          friendSelect +
          " with " +
          weaponSelect +
          " in the " +
          murderSiteSelect
      );
    }
    // returns the defined function within the parent function
    return whoDoneIt;
  }
});

//[Math.floor(Math.random())];
