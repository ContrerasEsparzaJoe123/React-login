import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import AddRes from "components/create-student.component";
import AddOferta from "components/create-oferta.component";
import ListOferta from "components/oferta-list.component";
import listRes from "components/student-list.component";
import Map from "views/LandingPage";
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
    path: "/create-oferta/",
    name: "Crear Ofertas",
    icon: "nc-icon nc-bag-16",
    component: AddOferta,
    layout: "/admin",
  },
  {
    path: "/oferta-list",
    name: "Lista de Ofertas",
    icon: "nc-icon nc-bullet-list-67",
    component: ListOferta,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Map,
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
