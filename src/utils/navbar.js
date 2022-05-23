import Home from "../components/Home";
import Properties from "../components/Properties";
import Contacts from "../components/Contacts";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Home />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <Properties />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Contacts />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign In",
    path: "/signin",
    Element: <div />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/signup",
    Element: <div />,
    search: "?",
    hidden: true,
    private: false,
  },
];
