// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from '@material-ui/icons/GridOn';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Settings from '@material-ui/icons/Settings';
import SdStorage from '@material-ui/icons/SdStorage';
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
import AddPurchaseRequisition from "../views/PurchaseRequisition/add.js";
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
    component: DashboardPage
  },
   {
    path: "/user",
    component: UserProfile
  },
  {
    path: "/vendor/view/:id",
    component: ViewVendor
  },{
    path: "/vendor/type/:type",
    component: VendorList
  },
  {
    path: "/vendor",
    component: VendorList
  },
  {
    path: "/vendor/add",
    component: AddVendor
  },
  {
    path: "/purchaserequisition/add",
    component: AddPurchaseRequisition
  },
  {
    path: "/RequestQuotation",
    component: RequestQuotation
  },
  {
    path: "/purchaserequisition",
    component: ListPurchaseRequisition
  },
  {
    path: "/PurchaseOrder",
    component: PurchaseOrder
  },
  {
    path: "/Log",
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
   collapse: true,
   path: "/budgets",
   name: "Budgets",
   state: "openBudgets",
   icon: PaymentIcon,
   views: [
    {
      path: "#",
      name: "Annual Budget",
      mini: "AB",
      component: ListPurchaseRequisition
    },
    {
      path: "#",
      name: "Monthly Budget",
      mini: "MB",
      component: ListPurchaseRequisition
    },
    {
      path: "#",
      name: "Supplementary Budget",
      mini: "SB",
      component: ListPurchaseRequisition
    }
   ]
 },
 {
   collapse: true,
   path: "/inventorymgt",
   name: "Inventory Mgt.",
   state: "openInventoryMgt",
   icon: SdStorage,
   views: [
    {
      path: "#",
      name: "Store Requisition",
      mini: "SR",
      component: ListPurchaseRequisition
    },
    {
      path: "#",
      name: "Gate Pass",
      mini: "GP",
      component: ListPurchaseRequisition
    }
   ]
 },
 {
  collapse: true,
  path: "/purchasing",
  name: "Purchasing",
  state: "openComponents",
  icon: GridOn,
  views: [
    {
      path: "/PurchaseRequisition",
      name: "Purchase Requisition",
      mini: "PR",
      component: ListPurchaseRequisition
    },
    {
      path: "/RequestQuotation",
      name: "Request for Quotation",
      mini: "RFQ",
      component: RequestQuotation
    },
    {
      path: "/PurchaseOrder",
      name: "Purchase Order",
      mini: "PO",
      component: PurchaseOrder
    }]
  },
  {
    collapse: true,
    path: "/qualitymgt",
    name: "Quality Mgt.",
    state: "openQualityMgt",
    icon: ContentPaste,
    views: [
          {
            path: "/vendor",
            name: "Vendors Mgt",
            mini: "VM",
            component: VendorList
          },
    ]
  }, 
   {
    collapse: true,
    path: "/salesmgt",
    name: "Sales Management",
    state: "openSalesMgt",
    icon: ContentPaste,
    views: [
     {
       path: "#",
       name: "Sales Order",
       mini: "SO",
       component: ListPurchaseRequisition
     },
     {
       path: "#",
       name: "Quotation",
       mini: "Q",
       component: ListPurchaseRequisition
     }
    ]
  },
 {
   path: "/Log",
   name: "Setup",
   icon:  Settings,
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
    icon: GridOn,
  },{
    path: "/vendor/type/pending",
    name: "Pending Approval",
    icon: GridOn,
  },{
    path: "/vendor/type/blacklisted",
    name: "Blacklisted Vendors",
    icon: GridOn,
  },
];

export const StaffMenu = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
  }
];

export const VendorMenu = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
  },
];
