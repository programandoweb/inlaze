/*set icons*/
import HomeIcon from '@mui/icons-material/HomeOutlined';
import GroupIcon from '@mui/icons-material/PeopleOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
export const routes_modules = [
  {
    name: "Home",
    href: "/webmaster",
    icon: <HomeIcon />,
    permissions: "home_index",
  },
  {
    name: "Usuarios",
    href: "/webmaster/users",
    icon: <GroupIcon />,
    permissions: "user_index",
  },
  {
    name: "Salir",
    href: "/webmaster/session",
    icon: <HttpsOutlinedIcon />,
    permissions: "session_index",
  },

];
