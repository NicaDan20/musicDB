import './Navbar.css'
import SearchBar from './SearchBar';

const Navbar = () => {
    return ( 
        <div className="main-nav">
            <div className="logo-container">
                <h1>Logo</h1>
            </div>
            <div className="searchbar-container">
                <SearchBar />
            </div>
            <hr className="navbar-separator"></hr>
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/latest-albums">Latest Albums</a></li>
                    <li><a href="/top-rated">Top Rated</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;