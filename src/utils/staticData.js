import {
  MdDashboard,
  MdGroup,
  MdSettings,
  MdOutlineStackedBarChart,
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineManageHistory,
  MdOutlineRateReview
} from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { GoIssueReopened } from "react-icons/go";
export const MENU_LIST = [
  {
    name: "Dashboard",
    path: "/",
    icon: MdDashboard,
    navItems: [],
  },
  {
    name: "Grievance",
    path: "/grievance",
    icon: FaWpforms,
    navItems: [],
  },
  // {
  //   name: "History",
  //   path: "/history",
  //   icon: MdOutlineManageHistory,
  //   navItems: [],
  // },
  {
    name: 'Reopen',
    path: '/closed/grievance',
    icon: GoIssueReopened,
    navItems: []
  },
  {
    name: 'Executive Review',
    path: '/grievance-review',
    icon: MdOutlineRateReview,
    navItems: []
  },
  
  // {
  //     name: 'Setting',
  //     path: '',
  //     icon: MdSettings,
  //     navItems: [
  //         {
  //             name: 'Applications',
  //             path: '/',
  //         },
  //         {
  //             name: 'Websites',
  //             path: '/',
  //         },
  //         {
  //             name: 'Channels',
  //             path: '/',
  //         },
  //         {
  //             name: 'Tags',
  //             path: '/',
  //         },
  //         {
  //             name: 'Versions',
  //             path: '/',
  //         }
  //     ]
  // },
];
