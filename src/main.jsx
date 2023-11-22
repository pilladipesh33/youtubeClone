import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Trending from "./pages/trending/Trending.jsx";
import UserHistory from './pages/history/userHistory.jsx';
import UserLibrary from "./pages/library/UserLibrary.jsx";
import UserSubscription from "./pages/subscription/UserSubscription.jsx";
import UserWatchLater from "./pages/watchLater/UserWatchLater.jsx";
import UserLikedVideo from "./pages/likedVideo/UserLikedVideo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="trending" element={<Trending />} />
      <Route path="history" element={<UserHistory />} />
      <Route path="library" element={<UserLibrary />} />
      <Route path="subscription" element={<UserSubscription />} />
      <Route path="watchLater" element={<UserWatchLater />} />
      <Route path="likedVideo" element={<UserLikedVideo />}/>
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
