import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const CurrencyChanger = (props) => {
    const { currency } = useContext(AppContext)
    const [name, setName] = useState('');


return(
    <div className="currency-changer">
            <label className="input-group-text" htmlFor="inputGroupSelect0">
            <span>Currency:</span>
            
            <select className="custom-select"id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Dollar" name="dollar">$ Dollar</option>
                        <option value="Pound" name="pound">£ Pound</option>
                        <option value="Euro" name="euro">€ Euro</option>
                        <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                        
                  </select>
            </label>
        </div>
    
)
}


export default CurrencyChanger