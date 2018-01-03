let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let runnersAge = 18;

if (!registeredEarly) {
  raceNumber = raceNumber + 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log('Greetings, runner number ' + raceNumber + '. Your race will begin at 9:30AM')
} else if (runnersAge > 18 || registeredEarly) {
  console.log('Greetings, runner number ' + raceNumber + '. Your race will begin at 11:00AM')
} else if (runnersAge <= 18 && !registeredEarly) {
  console.log('Greetings, runner number ' + raceNumber + '. Your race will begin at 12:30PM')
} else {
  console.log('See the registration desk')
}
