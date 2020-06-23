const friends = [
  {
    name: "Jasmine",
    wantToDo: ["hike", "go out to eat", "swim"]
  },
  {
    name: "Ada",
    wantToDo: ["play games", "hike", "cook meals"]
  },
  {
    name: "Desmond",
    wantToDo: ["sleep", "swim", "play games"]
  },
  {
    name: "Andres",
    wantToDo: ["hike", "swim", "play games"]
  }
];

const toDos = friends.reduce(function(array, friend) {
  return array.concat(friend.wantToDo);
}, []);

const toDoTally = toDos.reduce(function(voteTally, toDo) {
  voteTally[toDo] = (voteTally[toDo] || 0) + 1;
  return voteTally;
}, {});

const mostPopular = Object.entries(toDoTally).sort(function(a,b) { return b[1] - a[1] });


console.log(mostPopular);