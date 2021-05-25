import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { homeLayout } from "./layouts";

// Route Views
import HomeView from "./components/home/home";
import AboutView from "./components/about/about";
import BetListView from "./components/bet-list/bet-list";
import CreateBetView from "./components/create-bet/create-bet";
import BetDetailsView from "./components/bet-details/bet-details";

export default [
  {
    path: "/",
    exact: true,
    layout: homeLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: homeLayout,
    component: HomeView
  },
  {
    path: "/about",
    layout: homeLayout,
    component: AboutView
  },
  {
    path: "/bet-list",
    layout: homeLayout,
    component: BetListView
  },
  {
    path: "/create-bet",
    layout: homeLayout,
    component: CreateBetView
  },
  {
    path: "/bet-details",
    layout: homeLayout,
    component: BetDetailsView
  }
];