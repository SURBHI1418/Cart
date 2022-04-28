
import React from "react";
class CartItem extends React.Component{
render(){
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="description of image"/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>Phone</div>
                <div style={{color:'#777'}}>Rs 9999</div>
                <div style={{color:'#777'}}>Qty: 1</div>
                <div className="cart-item-actions">
                    {/*Button */}

                </div>
            </div>

        </div>
    );
}
}
const styles={
    image :{
        height:110,
        weight:110,
        borderRadius:4,
        background:'#ccc'
    }
  }
  
export default CartItem;