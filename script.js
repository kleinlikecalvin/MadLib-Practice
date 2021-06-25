//Get button and add event listener
var genStory = document.getElementById("yarn-button");
genStory.addEventListener('click', testInput);

//Prevent default form actions
const form = document.forms["user-form"];
form.addEventListener('submit', event => event.preventDefault());

//Get and test user input
function testInput() {
    if (form.checkValidity()) {
        spinYarn();
    }
}

//Generate the story
var animal = document.getElementById("animal");
var verb = document.getElementById("verb");
var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var noun = document.getElementById("noun");

function spinYarn() {
    var yarnTitle = document.getElementById("yarn-title");
    var yarn = document.getElementById("users-yarn");
    yarnTitle.innerText = "Don't have a cow 🐄";
    yarn.innerText = name1.value + " is a " + animal.value + ". " + name1.value + " loves " + verb.value + ".  " + name1 + " is super mad at " + name2.value + " because " + name1.value + " wants to go to a concert but " + name2.value + " keeps saying they can't. As a " + animal.value + ", " + name1.value + " doesn't have to listen to what " + name2.value + " says. So " + name1.value + " decided to throw a " + noun.value + "figurine at " + name2.value + " and run to the concert.";
}