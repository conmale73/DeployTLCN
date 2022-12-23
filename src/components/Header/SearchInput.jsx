import styles from "./searchInput.module.scss";
import { clsx } from "clsx";
import { Search } from "../Icons";
import { useState } from "react";
export const SearchInput = () => {

    const [inputSearch, setInputSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        localStorage.setItem("inputSearch", inputSearch);
        window.location.href = "/search?key=" + inputSearch;
    };

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={(e) =>handleSearch(e)}>
                <input
                    className={`${styles.search} ${styles.expandleft}`}
                    id="searchleft"
                    type="search"
                    value={inputSearch}
                    placeholder="Search"
                    onChange={(e) => setInputSearch(e.target.value)}
                    style={{ fontSize: "20px" }}
                />
                <label
                    className={`${styles.button} ${styles.searchbutton}`}
                    for="searchleft"
                >
                    <Search/>
                </label>
            </form>
        </div>
    );
};
