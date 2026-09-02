import {useState} from "react";

function Checkout() {
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

    function handleSubmit(){
        console.log(formData);
        alert("Order submitted!");
    }
    return (
        <div>
            <h2>Checkout</h2>
            <p>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" /></p>
            <p>Phone Number: <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" /></p>
            <p>Address: <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" /></p>

            <button onClick={() => {
                handleSubmit()
            }}>Submit</button>

        </div>
    );
}
export default Checkout;