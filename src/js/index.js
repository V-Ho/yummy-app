import axios from 'axios'

async function getResults (query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '2239d7003b5947bf25bb80eff1082ca7'
  try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`)
    const recipes = res.data.recipes
    console.log(recipes)
  } catch (error) {
    console.log(error)
  }
}
getResults('avocado')
// http://food2fork.com/api/searc
// API Key 2239d7003b5947bf25bb80eff1082ca7
