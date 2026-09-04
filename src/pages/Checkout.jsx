import {useState} from "react";
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom";


function Checkout() {
    const {clearCart} = useCart()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone:"",
        address:"",
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        alert("Order submitted!");
        clearCart();
        navigate("/products");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" /></p>
            <p>Phone Number: <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" /></p>
            <p>Address: <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" /></p>

            <button type="submit">
                Submit
            </button>
        </form>
    );
}
export default Checkout;