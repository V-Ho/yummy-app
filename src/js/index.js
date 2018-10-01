import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'

/**
 Global state of app includes:
 - Search object: search query & result
 - Current recipe object
 - Shopping list object
 - Liked recipes
 **/

const state = {}

const controlSearch = async () => {
  // 1) Get query from input field
  const query = searchView.getInput() // TODO

  if (query) {
    // 2) Create New search object from query & add it to state
    state.search = new Search(query)

    // 3) Prepare UI for results
    searchView.clearInput()
    searchView.clearResults()
    renderLoader(elements.searchRes)

    // 4) Search for recipes, await results from API call
    await state.search.getResults() // returns a promise

    // 5 render results on the DOM/ UI after recieved from API
    console.log(state.search.result) // gives array of results
    clearLoader()
    searchView.renderResults(state.search.result)
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault()
  controlSearch()
})

// search.getResults()
