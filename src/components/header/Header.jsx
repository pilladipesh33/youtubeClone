import { Icon } from "@mui/material";
import Logo from "../../assets/svg/logo";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../searchBar/SearchBar";
import VideoCam from "../../assets/svg/videoCam";
import Notification from "../../assets/svg/notification";

const Header = () => {
  return (
    <div className="flex bg-stone-500 h-14 bg-white w-full p-3 items-center justify-between">
      <div className="px-6 flex">
        <MenuIcon />
        <div className="ps-8">
        <Logo />
        </div>
      </div>
      <div className="px-80">
        <SearchBar />
      </div>
      <div className="flex justify-around w-20">
        <VideoCam />
        <Notification />
      </div>
    </div>
  );
};

export default Header;
