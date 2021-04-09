let age = 19;
let isFemale = true;
let driverStatus = "bob";
const Name = "Sarah";
const totalAmount = 24;

if (age >= 18) {
  if (isFemale) {
    if (driverStatus == "bob") {
      console.log(
        "Vrouwen die",
        age,
        "jaar en ouder zijn en kunnen terug rijden zijn van harte welkom"
      );
      if (age >= 18 && age <= 25) {
        console.log("Je krijgt als", age, "-jarige 50% korting!");
      } else {
        console.log(
          "je bent daarmee ouder dan 25 jaar en je krijgt geen korting"
        );
      }
      if (Name === "Sarah" || Name === "Bram") {
        console.log(
          "Goed nieuws",
          Name,
          "! Want met jouw naam heb je nog eens recht op een gratis biertje!"
        );
      } else {
        console.log(
          "Helaas,",
          Name,
          "je heet geen Sarah of Bram, anders had je een gratis biertje gekregen"
        );
      }
      if (totalAmount >= 25 && totalAmount < 50) {
        console.log(
          "Je hebt meer dan €25,- uitgegeven aan drank. \nJe krijgt gratis Bitterballen. \nAls je nog €",
          50 - totalAmount,
          "uitgeeft, maken we er een portie nacho's van!"
        );
      } else if (totalAmount >= 50) {
        console.log(
          "Je hebt meer dan €50,- uitgegeven aan drank. \nJe krijgt gratis portie nacho's"
        );
      } else {
        console.log(
          "Je hebt minder dan €25,- uitgegeven aan drank. \nSpendeer nog €",
          25 - totalAmount,
          " om voor gratis bitterballen in aanmerking te komen, \nof €",
          50 - totalAmount,
          "om voor gratis nacho's in aanmerking te komen!"
        );
      }
    } else {
      console.log(
        "Je hebt aangegeven",
        age,
        "jaar te zijn en dus oud genoeg \nmaar ook geen Bob te zijn en dan kan je dus niet naar huis. \nWe zien je graag een andere keer terug"
      );
    }
  } else {
    console.log(
      "Helaas; je bent wel",
      age,
      "jaar, maar geen vrouw. \nWe zien je graag een andere keer terug"
    );
  }
} else {
  console.log(
    "Jouw leeftijd is",
    age,
    "en dat is helaas niet oud genoeg voor dit feestje"
  );
}
