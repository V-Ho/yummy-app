// one central variable for all DOM elements, instead of document.querySelector everyhwere

export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchRes: document.querySelector('.results'), // add loader to results as parent
  searchResList: document.querySelector('.results__list')
}

// create loader as obj in order to reuse class
export const elementStrings = {
  loader: 'loader'
}

export const renderLoader = parent => {
  const loader = `
    <div class="${elementStrings.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `
  // attach loader icon to beginning of element
  parent.insertAdjacentHTML('afterbegin', loader)
}

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`)
  if (loader) loader.parentElement.removeChild(loader)
}