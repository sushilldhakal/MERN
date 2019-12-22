import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import UpdatePostInfo from "./components/Post/UpdatePostInfo";

import AddNewPage from "./views/AddNewPage";
import Pages from "./views/Pages";
import UpdatePageInfo from "./components/Page/UpdatePageInfo";

import AddNewTour from "./views/AddNewTour";
import Tours from "./views/Tours";
import UpdateTourInfo from "./components/Tour/UpdateTourInfo";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/edit-post/:id",
    layout: DefaultLayout,
    component: UpdatePostInfo
  },
  {
    path: "/edit-page/:id",
    layout: DefaultLayout,
    component: UpdatePageInfo
  },
  {
    path: "/edit-tour/:id",
    layout: DefaultLayout,
    component: UpdateTourInfo
  },
  {
    path: "/pages",
    layout: DefaultLayout,
    component: Pages
  },
  {
    path: "/tours",
    layout: DefaultLayout,
    component: Tours
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/add-new-page",
    layout: DefaultLayout,
    component: AddNewPage
  },
  {
    path: "/add-new-tour",
    layout: DefaultLayout,
    component: AddNewTour
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
