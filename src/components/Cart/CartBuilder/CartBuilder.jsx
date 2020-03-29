import React,{Component} from 'react';
import AllCrops from '../../crops/allCrops/allcrops';
import Cart from '../Cart';
import Modal from '../../UI/Modals/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class CartBuilder extends Component{
   
   state={
       itemIds:{
           1:2,
           2:9,
           3:4
           
       },
       itemCount:26,
       cartPrice:100,
       showCart:false,
       showAllItems:false
   }
   Cart=null;

   modalHandler=()=>{
    
  this.setState({showCart:false});
   }
   
   cartClickHandler=()=>{
       //http request to get the cart information from database
       this.setState({showCart:true});
   }

render(){
  
   
        
    
    return(
        <React.Fragment>
          {
              this.state.showCart ? <Modal show={this.state.showCart} close={this.modalHandler}>
              <Cart 
              itemIds={this.state.itemIds} cartPrice={this.state.cartPrice}count={this.state.itemCount}/>
          </Modal> : null
          }
             
            <i onClick={this.cartClickHandler} style={{fontSize:'34px',position:'fixed',bottom:'505.3px',left:'1285px'}} class="now-ui-icons shopping_bag-16

"></i>
            
            
        </React.Fragment>

    );
}


}

export default CartBuilder;