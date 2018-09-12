import { elements } from './base'

// return input value of search field
export const getInput = () => elements.searchInput.value

export const clearInput = () => {
  elements.searchInput.value = ''
}

export const clearResults = () => {
  elements.searchResList.innerHTML = '' // clears all <li> elements
}

// // Limit recipe title displayed to 17 letters
// const limitRecTitle = (title) => {
//   // put title into array of words
//   // reduce method to count number of letters
// }

const limitRecTitle = (title) => {
  const result = title.split(' ').reduce((acc, currVal) => {
    if (acc.length + currVal.length < 17) {
      return `${acc} ${currVal}`
    }
    return `${acc}`
  }, '')
  return `${result}...`
}

const renderRecipe = recipe => {
  const markup = `
  <li>
      <a class="results__link" href="#${recipe.recipe_id}">
          <figure class="results__fig">
              <img src="${recipe.image_url}" alt="${recipe.title}">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${limitRecTitle(recipe.title)}</h4>
              <p class="results__author">T${recipe.publisher}</p>
          </div>
      </a>
  </li>
  `
  // display results list in ascending order
  elements.searchResList.insertAdjacentHTML('beforeend', markup)
}

export const renderResults = recipes => {
  console.log(recipes)
  // cb function, renders each recipe
  recipes.forEach(renderRecipe)
}
