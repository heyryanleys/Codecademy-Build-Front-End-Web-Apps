const team = {
  _players : [
    {firstName: 'Brad',
     lastName: 'Marchand',
      age: 30},
     {firstName: 'Zdeno',
      lastName: 'Chara',
      age: 34},
     {firstName: 'Tukka',
      lastName: 'Rask',
      age: 31}],
  _games : [
    {opponent: 'Islanders',
     teamPoints: 2,
     opponentPoints: 0},
    {opponent: 'Kings',
     teamPoints: 3,
     opponentPoints: 2
    },
    {opponent: 'Flyers',
     teamPoints: 100,
     opponentPoints: 0
    }
  ],
  get players(){

  },
  addPlayer(firstName,lastName,age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
      }
    this._players.push(player)
   },
  addGame(opponent,teamPoints,opponentPoints){
    let games = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(games)
  }
}

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Canucks',5,2);
team.addGame('Rangers',3,1);
team.addGame('Stars',4,1);

console.log(team._players)
console.log(team._games)
