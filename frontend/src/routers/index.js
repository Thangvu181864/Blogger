import Home from "../pages/Home";
import Articles from "../pages/Articles";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Tags from "../pages/Tags";
import CreateArticles from "../pages/CreateArticles";
import Layout from "../components/Layout";

const publicRouter = [
  { path: "/articles", component: Articles, layout: Layout },
  { path: "/signin", component: SignIn, layout: Layout },
  { path: "/signup", component: SignUp, layout: Layout },
  { path: "/about", component: About, layout: Layout },
  { path: "/contact", component: Contact, layout: Layout },
  { path: "/tags", component: Tags, layout: Layout },
  { path: "/new", component: CreateArticles, layout: Layout },
  { path: "/", component: Home, layout: Layout },
];
const privateRouter = [];

export { privateRouter, publicRouter };
