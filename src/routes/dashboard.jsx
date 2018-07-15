// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import AddShopping from '@material-ui/icons/AddShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import CreditCard from '@material-ui/icons/CreditCard';

// core components/views
import LoginPage from "../views/LoginPage/index.js";
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import VendorDashboard from "../views/VendorDashboard/index.js";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import VendorList from "../views/Vendor/index.js";
import AddVendor from "../views/Vendor/add.js";
import PurchaseRequisition from "../views/PurchaseRequisition/index.js";
import PurchaseOrder from "../views/PurchaseOrder/index.js";
import Project from "../views/Project/index.js";
import Log from "../views/Log/index.js";
import Registration from "../views/RegistrationPage/index.js";
/* import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx"; */

export const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: HomeIcon,
    component: DashboardPage
  },
   {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/vendor",
    sidebarName: "Vendors List",
    navbarName: "Vendors List",
    icon: ContentPaste,
    component: VendorList
  },
  {
    path: "/vendor/add",
    sidebarName: "Vendor Details",
    navbarName: "Vendor Details",
    icon: AddIcon,
    component: AddVendor
  },
  {
    path: "/Project",
    sidebarName: "Purchase Requisition",
    navbarName: "Purchase Requisition",
    icon: CreditCard,
    component: Project
  },
  {
    path: "/PurchaseOrder",
    sidebarName: "Purchase Order",
    navbarName: "Purchase Order",
    icon:  AccountBalance,
    component: PurchaseOrder
  },
  {
    path: "/Log",
    sidebarName: "Report",
    navbarName: "Report",
    icon:  LibraryBooks,
    component: Log
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export const AdminMenu = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: HomeIcon,
  },
  {
   path: "/user",
   sidebarName: "User Profile",
   navbarName: "Profile",
   icon: Person,
   component: UserProfile
 },
 {
   path: "/vendor",
   sidebarName: "Vendors List",
   navbarName: "Vendors List",
   icon: ContentPaste,
   component: VendorList
 },
 {
   path: "/vendor/add",
   sidebarName: "Vendor Details",
   navbarName: "Vendor Details",
   icon: AddIcon,
   component: AddVendor
 },
 {
   path: "/Project",
   sidebarName: "Purchase Requisition",
   navbarName: "Purchase Requisition",
   icon: CreditCard,
   component: Project
 },
 {
   path: "/PurchaseOrder",
   sidebarName: "Purchase Order",
   navbarName: "Purchase Order",
   icon:  AccountBalance,
   component: PurchaseOrder
 },
 {
   path: "/Log",
   sidebarName: "Report",
   navbarName: "Report",
   icon:  LibraryBooks,
   component: Log
 },
];

export const VendorMenu = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: HomeIcon,
  },
];