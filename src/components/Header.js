
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header className="header">
        
        <div className="header_logo">
        <Link to='/'>
        <AddBusinessIcon fontSize='large'/>&nbsp;
        <span className="header_logoName">E-shop</span>
        </Link>
        </div>
        <div className="header_Search">
            <input/>
        </div>
        <div className="header_nav">
            <div className="header_nav_user">
                <span className="header_nav_lineone">Hello Guest</span>
                <span className="header_nav_lineTwo">Sign In</span>
            </div>
            <div className="header_nav_itemBasket">
            <Link to="/checkout">
            <ShoppingCartIcon fontSize='small'/> &nbsp; Cart
            </Link>
            </div>
        </div>
        </header>
    )
}
export default Header;