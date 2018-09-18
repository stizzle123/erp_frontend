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
import RequestQuotation from "../views/RequestQuotation/index.js";

// core components/views
import LoginPage from "../views/LoginPage/index.js";
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import VendorList from "../views/Vendor/index.js";
import AddVendor from "../views/Vendor/add.js";
import ViewVendor from "../views/Vendor/view.js";
import PurchaseOrder from "../views/PurchaseOrder/index.js";
import AddPurchaseRequisition from "../views/PurchaseRequisition/Add/index.js";
import ListPurchaseRequisition from "../views/PurchaseRequisition/index.js";
import Log from "../views/Log/index.js";
import Registration from "../views/RegistrationPage/index.js";
import DashboardIcon from "@material-ui/icons/Dashboard";
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
    path: "/vendor/view/:id",
    sidebarName: "Vendors List",
    navbarName: "Vendors List",
    icon: ContentPaste,
    component: ViewVendor
  },{
    path: "/vendor/type/:type",
    sidebarName: "Vendors List",
    navbarName: "Vendors List",
    component: VendorList
  },
  {
    path: "/vendor",
    sidebarName: "Vendors List",
    navbarName: "Vendors List",
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
    path: "/purchaserequisition/add",
    sidebarName: "New Purchase Requisition",
    navbarName: "New Purchase Requisition",
    icon: AddIcon,
    component: AddPurchaseRequisition
  },
  {
    path: "/RequestQuotation",
    name: "Request for Quotation",
    icon: CreditCard,
    component: RequestQuotation
  },
  {
    path: "/purchaserequisition",
    name: "Purchase Requisition",
    icon: CreditCard,
    component: ListPurchaseRequisition
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
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
   path: "/user",
   name: "User Profile",
   icon: Person,
   component: UserProfile
 },
 {
   path: "/vendor",
   name: "Vendors List",
   icon: ContentPaste,
   component: VendorList
 },
 {
   path: "/vendor/add",
   name: "Vendor Details",
   icon: AddIcon,
   component: AddVendor
 },
  {
   path: "/RequestQuotation",
   name: "Request for Quotation",
   icon: CreditCard,
   component: RequestQuotation
 },
 {
   path: "/PurchaseOrder",
   name: "Purchase Order",
   icon:  AccountBalance,
   component: PurchaseOrder
 },
 {
   path: "/Log",
   name: "Report",
   icon:  LibraryBooks,
   component: Log
 },
];

export const IacMenu = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    path: "/vendor/type/approved",
    name: "Approved Vendors",
    icon: LibraryBooks,
  },{
    path: "/vendor/type/pending",
    name: "Pending Approval",
    icon: LibraryBooks,
  },{
    path: "/vendor/type/blacklisted",
    name: "Blacklisted Vendors",
    icon: LibraryBooks,
  },
];


export const VendorMenu = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
  },
];
