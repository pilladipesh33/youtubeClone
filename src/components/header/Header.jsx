import Logo from "../../assets/svg/logo";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../searchBar/SearchBar";
import VideoCam from "../../assets/svg/videoCam";
import Notification from "../../assets/svg/notification";
import { useState } from "react";
import MiniDrawer from "./Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  function handleDrawer(){
    if (open == true){
      setOpen(false);
    } 
    else {
      setOpen(true);
    }
  }

  return (
    <div className="flex h-14 bg-white w-full p-3 items-center justify-between">
      <div className="px-6 flex">
        <MenuIcon onClick = {() => handleDrawer()}/>
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
