function theBeatlesPlay(musicians, instruments){
  const newArray = []
  for (let i= 0, l = musicians.length; i < l; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return newArray;
}
function johnLennonFacts(facts){
  const cryFacts = [];
  let i = 0;
  while (i < facts.length){
    cryFacts.push(`${facts[i]}!!!`)
    i++
  }
  return cryFacts
}
