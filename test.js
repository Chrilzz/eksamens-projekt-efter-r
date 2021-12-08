
   var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
  ];
var arqua = creatures.filter(function(creatures){
    return creatures.habitat == "Ocean"
}
)


console.log(arqua)