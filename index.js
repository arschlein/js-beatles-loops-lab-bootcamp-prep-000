function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for(let i= 0, l = musicians.length; i < l; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}.`)
  }
    return newArray;
}
