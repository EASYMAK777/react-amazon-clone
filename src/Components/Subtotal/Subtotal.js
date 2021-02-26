import React from 'react'
import '../Subtotal/Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from '../Reducer/Reducer'
import { useStateValue } from '../StateProvider/StateProvider'
import { useHistory } from 'react-router-dom'






function Subtotal() {


    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={( value ) =>(
                <>
                <p>
                    Subtotal ({basket?.length}): <strong>{value}</strong>
                </p>
                <small className = "subtotal__gift" >
                <input type="checkbox"/> This order contains a small gift 
                </small>
                </>

            )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandsSeparator={true}
             prefix={"$"}
            />

            <button onClick={e => history.push('payment')}>Proceed to Checkout</button>

        
        </div>
    )
}

export default Subtotal 
