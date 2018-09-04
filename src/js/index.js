import Search from './models/Search'

/**
 Global state of app includes:
 - Search object: search query & result
 - Current recipe object
 - Shopping list object
 - Liked recipes
 **/

const state = {}

const controlSearch = async () => {
  // 1) Get query from view
  const query = 'avocado' // TODO

  if (query) {
    // 2) New search object & add it to state
    state.search = new Search(query)

    // 3) Prepare UI for results

    // 4) Search for recipes
    await state.search.getResults() // returns a promise

    // 5 render results on UI after recieved from API
    console.log(state.search.result)
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault()
  controlSearch()
})

// search.getResults()
