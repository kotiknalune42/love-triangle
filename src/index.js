/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var love = 0;
  for (var x = 0; x < preferences.length; x++) //not <= cause arr starts at 0
  {
  
  /*
  given that x loves y loves z loves x
  and triangle can happen only ONCE in an array p
  unreturned love is not a triangle!
  */
    if ((preferences[preferences[preferences[x] - 1] - 1] - 1 == x) && // dependency 1
    (preferences[x] != preferences[preferences[x] - 1]) && // and if 5 does not equal 4
    (preferences[preferences[preferences[x] - 1] - 1] != preferences[preferences[x] - 1]))   // dependency 3
    {
      love++;
    } 
  }
  return(love/3);
};
