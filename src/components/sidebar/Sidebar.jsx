import HomeIcon from "@mui/icons-material/Home";
import TrendingIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        class="top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-4"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-white">
          <ul class="space-y-2 font-medium">
            <li>
              <NavLink
                to=""
                className="link-primary"
              >
                <HomeIcon class="icon-primary" />
                <span class="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/trending" className="link-primary">
                <TrendingIcon className="icon-primary" color="black" />
                <span className="ms-3">Trending</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/subscription" className="link-primary">
                <SubscriptionsIcon className="icon-primary" />
                <span className="ms-3">Subscriptions</span>
              </NavLink>
            </li>
      <Divider />
            <li>
              <NavLink to="/library" className="link-primary">
                <VideoLibraryIcon className="icon-primary" />
                <span className="ms-3">Library</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" className="link-primary">
                <HistoryIcon className="icon-primary" />
                <span className="ms-3">History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link-primary">
                <OndemandVideoIcon className="icon-primary" />
                <span className="ms-3">Your videos</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/watchLater" className="link-primary">
                <WatchLaterIcon className="icon-primary" />
                <span className="ms-3">Watch later</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/likedVideo" className="link-primary">
                <ThumbUpIcon className="icon-primary" />
                <span className="ms-3">Liked videos</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
