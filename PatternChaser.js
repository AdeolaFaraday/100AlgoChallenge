function PatternChaser(str) {
  // run a for loop over individual element
  const longStringArray = []
  for(let i = 0; i <= str.length; i++){
    for(let j = i; j <= str.length - i; j++){
        const isSubStringPresent = str.substring(i, j).includes(str.substring(j))
        // console.log(str.substring(i, j), str.substring(j), isSubStringPresent)
        if(isSubStringPresent && str.substring(j).length !== 1){
          longStringArray.push(str.substring(j))
        }
    }
  }
  const longestAvailableString = longStringArray.sort((a, b) => b.length - a.length)?.[0]
  // code goes here
  return !!longestAvailableString?.length;
}
