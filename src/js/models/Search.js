import axios from 'axios'

export default class Search {
  // constructor builds new obj based on class
  constructor (query) {
    this.query = query
  }

  async getResults () {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '2239d7003b5947bf25bb80eff1082ca7'
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`)
      this.result = res.data.recipes
      // console.log(this.result)
    } catch (error) {
      console.log(error)
    }
  }
}
