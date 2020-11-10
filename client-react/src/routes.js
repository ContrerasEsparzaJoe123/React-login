/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import AddRes from "components/create-student.component";
import listRes from "components/student-list.component";
import editRes from "components/edit-student.component";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/create-student",
    name: "Crear Un Restaurante",
    icon: "nc-icon nc-bank",
    component: AddRes,
    layout: "/admin",
  },
  {
    path: "/student-list",
    name: "Lista de Restaurantes",
    icon: "nc-icon nc-tile-56",
    component: listRes,
    layout: "/admin",
  },
  {
    path: "/student-list/",
    name: "Usuarios",
    icon: "nc-icon nc-single-02",
    component: listRes,
    layout: "/admin",
  },
  /*{
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },*/
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  /*
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
*/

  /*
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
*/
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
