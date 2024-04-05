function SearchBar({searching, setSearching}){
  return <>
    <label htmlFor="searchBar"></label>
    <input 
    id="searchBar" 
    type="text" 
    defaultValue={searching}
    onChange={(event) => setSearching(event.target.value)}
    />
  </>
}

export default SearchBar;