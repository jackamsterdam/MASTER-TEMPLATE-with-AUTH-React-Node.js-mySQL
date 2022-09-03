import "./Menu.css";
import { NavLink } from 'react-router-dom'

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            {/* <NavLink to="/product-list">Products</NavLink>
			<NavLink to="/add-product">Add Product</NavLink> */}
        </div>
    );
}

export default Menu;
