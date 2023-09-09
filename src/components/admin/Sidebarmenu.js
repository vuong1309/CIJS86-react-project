import FilmIcon from '../../assets/icons/films.svg';
import UserIcon from '../../assets/icons/user.svg';
import DashboardIcon from "../../assets/icons/dashboard.svg"

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/admin/dashboard',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: FilmIcon,
        path: '/admin/films',
        title: 'Films',
    },
    {
        id: 3,
        icon: UserIcon,
        path: '/admin/users',
        title: 'User',
    }
]

export default sidebar_menu;