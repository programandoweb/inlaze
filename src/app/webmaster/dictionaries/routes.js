/*set icons*/
import CategoryIcon from '@mui/icons-material/Category';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
export const routes_modules = [
  {
    name: "Lenguajes",
    param:"langs",
    href: "/webmaster/dictionaries/categories",
    icon: <CategoryIcon />,
  },  
  {
    name: "Traducciones",
    param:"translators",
    href: "/webmaster/dictionaries/translator",
    icon: <ChecklistIcon />,
  },  
  {
    name: "Solicitudes",
    param:"requests",
    href: "/webmaster/dictionaries/requests",
    icon: <AccountTreeIcon />,
  },  
];
