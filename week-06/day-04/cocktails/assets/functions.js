'use strict';

module.exports = { selectCocktail(neededAlcohol, availableCocktails){
  let selectedCocktails = [];
  availableCocktails.forEach(cocktail => {
    if(cocktail.contains.indexOf(neededAlcohol) >= 0){
      selectedCocktails.push(cocktail);
    }
  })
  return selectedCocktails;
} };

// function selectCocktail(neededAlcohol, availableCocktails){
//   let selectedCocktails = [];
//   availableCocktails.forEach(cocktail => {
//     if(cocktail.contains.indexOf(neededAlcohol) >= 0){
//       selectedCocktails.push(cocktail);
//     }
//   })
//   return selectedCocktails;
// }
