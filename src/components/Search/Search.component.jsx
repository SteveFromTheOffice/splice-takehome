import style from "./Search.module.scss";

import {ReactComponent as SearchIcon} from "../../images/Search.svg";
import Badge from "../Badge/Badge.component";

function Search() {
  return (
    <>
      <form className={style.search}>
        <button>
          <SearchIcon alt="a magnifying glass" />
        </button>
        <input type="text" placeholder="Search" />
        <button>
          <img src="#" alt=""></img>
        </button>
      </form>
      <div className={style.searchBtn}>
        <Badge icon={SearchIcon} alt="a magnifying glass" />
      </div>
    </>
  );
}

export default Search;
