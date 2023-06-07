import { FaTh, FaCommentAlt, FaChartPie } from "react-icons/fa";
import { GoAlert } from "react-icons/go";

export const MenuItems = [
  {
    path: "/",
    name: "Home",
    icon: <FaTh />,
  },
  {
    path: "/news",
    name: "News",
    icon: <FaCommentAlt />,
  },
  {
    path: "/budgeting",
    name: "Budgeting",
    icon: <FaChartPie />,
  },
  {
    path: "/disclaimer",
    name: "Disclaimer",
    icon: <GoAlert />,
  },
];
