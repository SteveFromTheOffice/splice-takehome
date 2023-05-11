import style from "./Search.module.scss";

import SearchIcon from "../../images/Search.svg";
import Badge from "../Badge/Badge.component";

function Search() {
  return (
    <>
      <form className={style.search}>
        <button>
          <img src={SearchIcon}></img>
        </button>
        <input type="text" placeholder="Search" />
        <button>
          <img src="#"></img>
        </button>
      </form>
      <div className={style.searchBtn}>
        <Badge icon={SearchIcon} alt="" />
      </div>
    </>
  );
}

export default Search;
