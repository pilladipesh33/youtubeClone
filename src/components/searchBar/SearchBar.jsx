import SearchIcon from "@mui/icons-material/Search";
import VideoCam from "../../assets/svg/videoCam";

const SearchBar = () => {
  return (
    <form className=" w-[500px] relative">
      <div>
        <input
          type="search"
          placeholder="Search"
          className="h-[39px] w-full p-4 rounded-full bg-slate-50"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-px rounded-full">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
