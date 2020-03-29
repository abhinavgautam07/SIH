import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component{

    itemIdFromProps=this.props.itemId;

    items = [
    {
        id: 1,
       imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
        farmerName: "Abhinav Gautam",
        cropName: "Premium Wheat",
        cropCost: 140
    },
    {
        id: 2,
        imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
        farmerName: "Ishan Chaudhary",
        cropName: "Elite Wheat",
        cropCost: 120
    },{
        id: 3,
        imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
        farmerName: "An",
        cropName: "Classic Wheat",
        cropCost: 100
    }]

    search(nameKey, myArray,crop){
        for (let i=0; i < myArray.length; i++) {
            console.log((myArray[i].id-nameKey))
            if (myArray[i].id-nameKey==0) {
                crop={
                    ...myArray[i]
                }
                return crop;
            }
        }
        return false;
    }
    
// console.log(typeof(itemIdFromProps),typeof(items[0].id))
    
    

    // const cmp=(item)=>{
    //     // console.log(item,props.itemId)

    //     console.log(item.id,itemIdFromProps);
    //     return item.id==itemIdFromProps
    // }
    
   render(){

    let crop = this.search(this.itemIdFromProps, this.items,crop);
    return (
        
        <div className="Allcropscard">
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'-7px'}}>
                <div style={{color:'gray',fontSize:'14px'}}>
                    {crop.farmerName}
                </div>
                <div>
                    DELETE
                </div>
            </div>
            <div style={{display:'inline'}}>
            <img className="Allcropimage" src={crop.imageUrl} />
            </div>
            <aside className="Allcropdesc">
            <div>
                <div style={{fontWeight:'600',fontSize:'17px'}}>
                {crop.cropName}
                </div>
                <div style={{fontSize:'14px'}}>
                    Item Count : {this.props.quantity}
                </div>
                
            </div>
            <div>
            &#x20b9; {this.props.quantity* crop.cropCost}
            </div>
                
</aside >
        </div>
    );
   }
  

};

export default CartItem;


