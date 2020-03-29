import React, { Component } from 'react';
// import CartBuilder from './CartBuilder.js/CartBuilder';
import {Button} from 'react-bootstrap';
import CartItem from './CartItem/CartItem';
const clickHandler=()=>{
    console.log('JJJJJJJJJJJJJJ');
}
const Cart=(props)=>{
    
    const transformedItems=Object.keys(props.itemIds)
    .map(ikey=>{
        return (<CartItem itemId={parseInt(ikey)} quantity={props.itemIds[ikey]} key={ikey}></CartItem>)
    });

   return(
    <React.Fragment>
        <h5><strong>Cart</strong></h5>
    <aside style={{display:'inline-block',verticalAlign:'top',width:'50%'}}>

    <div style={{display:'flex',flexDirection:'column'}}>
    {
       transformedItems
    }
    </div>
    </aside>
    
    
    <aside style={{display:'inline-block',verticalAlign:'top',width:'45%'}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'11px'}}>
            <div style={{fontSize:'18px'}}>
                item(s) Total
            </div>
            <div style={{fontSize:'18px'}}>
            &#x20b9; 302
            </div>
        </div>
    <Button variant="dark" size="lg" block onClick={clickHandler} style={{backgroundColor:'black'}}>
    CHECKOUT
  </Button>
    </aside>
</React.Fragment>
   );
        
    }


export default Cart;