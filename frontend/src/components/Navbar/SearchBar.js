import './SearchBar.css'

const SearchBar = () => {
    return (
         <form className="search-form" action="/search" method="get">
            <label htmlFOr="header-search">
                <span className="visually-hidden">-</span>
            </label>
            <input
                type="text"
                className="search-input"
                id="header-search"
                placeholder="Search"
                name="search"
            />
            <input type="submit" className="submit-button" value=""></input>
         </form>
     );

}
 
export default SearchBar;