import iconSearch from "./images/icon-search.svg";

export function Search({ isDark, setInputText, searchHandler, inputData }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const errorMessage = document.querySelector(".search__error");
    const showErrorMessage = document.querySelector(".show");
    const button = document.querySelector(".search__btn");


    return (
        <div className="search">
            <input onChange={inputTextHandler} className={isDark ? "search__bar" : "search__bar search__bar--light"} type="text" placeholder="Search GitHub username…" />
            <img className="search__icon" src={iconSearch} />
            <p className="search__error">No results</p>
            <button className="search__btn" onClick={searchHandler}>Search</button>
        </div>
    )
}