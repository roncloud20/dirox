const SearchBox = ({searchChange}) => {
    return (
        <div className="SearchBox">
            <input
                type={"search"}
                placeholder={"Search Words..."}
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;