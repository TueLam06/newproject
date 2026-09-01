import "./Header.css"
import {Link} from "react-router-dom"
function Header(props) {
    return (
        <nav>
            <h1>{props.title}</h1>

            <div>
                <Link to="/">Home</Link>
                <Link to="/products"> Products </Link>
                <Link to="/cart"> Cart {props.cartCount ? `(${props.cartCount})` : ""}</Link>
            </div>
        </nav>
    )
}

export default Header