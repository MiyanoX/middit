import "./SearchBar.css";

export const SearchBar = ({value, setInputValue}) => {
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div id="searchBar">
            <input id="searchInput" value={value} onChange={handleInputValue}/>
        </div>
    )
}