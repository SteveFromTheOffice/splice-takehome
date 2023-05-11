import style from "./Search.module.scss";

import SearchIcon from "../../images/Search.svg";

function Search() {
  return (
    <form className={style.search}>
      <button>
        <img src={SearchIcon}></img>
      </button>
      <input type="text" placeholder="Search" />
      <button>
        <img src="#"></img>
      </button>
    </form>
  );
}

export default Search;
