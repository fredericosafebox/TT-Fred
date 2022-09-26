import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="app__search--bar">
      <input type="text" />
      <button>
        <BiSearch size={25} />
      </button>
    </div>
  );
}

export default SearchBar;
