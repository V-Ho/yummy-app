// one central variable for all DOM elements, instead of document.querySelector everyhwere

export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchResList: document.querySelector('.results__list')
}
