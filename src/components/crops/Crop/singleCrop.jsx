import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
// import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {Input,Button} from 'reactstrap';
import  './singleCrop.css';
// import Toast from '../../UI/Toasts/Toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//some variables

const style2 = {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'


}
const style1 = {
    verticalAlign: 'baseline',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: '105.9px'
}
const fetchCart = (itemDet) => {
    //fetch data regarding the perticular item its name etc from db
    //and its currrent amount in the cart

    itemDet = {
        id: '1',
        cropName: "Premium Wheat",
        farmerName: "Abhinav Gautam",
        cost: "140",
        cartAmount: "3"

    }
    return itemDet;
}
toast.configure();
class SingleCrop extends Component {

    cartAdditonHandler=(content)=>{
        if(this.state.cartAmount>0){
            return(toast.success(`${this.state.cartAmount} item(s) added to cart`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                }));
        }else{
            return (toast.warn('Please input valid amount', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                }));
        }
    }
    changeHandler=(event)=>{
        console.log('changer');
        
        this.setState({cartAmount:event.target.value});
    }

    state = {
        crop: null,
        cartAmount:0
    }

    componentDidMount = () => {
        //fetch the item using props.itemId
        console.log('largee',this.props);
        if (!this.state.crop || (this.state.crop && this.props.itemId !== this.state.crop.id)) {
           if(this.props.itemId==1){
            this.setState({
                crop: {
                    id: this.props.itemId,
                    cropName: "Premium Wheat",
                    farmerName: "Abhinav Gautam",
                    cropCost: "25",
                    cartAmount: "3",
                    imageUrl: 'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    altImageUrls: ['http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg','http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg','http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg']
                }
            });
           }
           if(this.props.itemId==2){
            this.setState({
                crop: {
                    id: this.props.itemId,
                    cropName: "Elite Wheat",
                    farmerName: "Ishan Chaudhary",
                    cropCost: "20",
                    cartAmount: "3",
                    imageUrl: 'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    altImageUrls: ['http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg','http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg','http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg']
                }
            });
           }
           if(this.props.itemId==3){
            this.setState({
                crop: {
                    id: this.props.itemId,
                    cropName: "Classic Wheat",
                    farmerName: "An",
                    cropCost: "18",
                    cartAmount: "3",
                    imageUrl: 'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    altImageUrls: ['http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg','http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg','http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg']
                }
            });
           }
         if(this.props.itemId>3){
            this.setState({
                crop: {
                    id: this.props.itemId,
                    cropName: "Rice",
                    farmerName: "An",
                    cropCost: "18",
                    cartAmount: "3",
                    imageUrl: 'https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg',
                    altImageUrls: ['https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg','https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg','https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg']
                }
            });
         }

        }
    }

    

   

    render() {

        return (
            <React.Fragment>
                {/* {this.state.showToast ? <Toast header="Added to Cart" body="3 items added to cart" /> : null} */}
                
              {
                  this.state.crop ?   <div style={{ height: '478px',paddingTop:'2px',paddingLeft:'13px' }}>
                  <aside className="Aside1">
                      <div style={style1}>
                          {
                              this.state.crop.altImageUrls.map((url) => {
                                  return (
                                      <div className="Altimagedivs">
                                          <img src={url} className="Altimages" />
                                      </div>

                                  )

                              })
                          }
                      </div>
                  </aside>

                  <aside className="Aside2">
                      <img src={this.state.crop.imageUrl} className="Currimage" />
                  </aside>

                  <aside className="Aside3">
                      <div>
                          <span className="Font1">
                              {
                                  this.state.crop.cropName
                              }
                          </span>
                      </div>
                      <div>
                          <span className="Font2" style={{ fontSize: '1.4' }}>
                              By {
                                  this.state.crop.farmerName
                              }
                          </span>
                      </div>
                      <br />
                      <div>
                          <span className="Font1">
                              &#x20b9; {this.state.crop.cropCost}
                          </span>
                      </div>
                      <label htmlFor="quantity">Quantity</label>
                      <Input className="mb-3"
                          id="quantity"
                              placeholder="0"
                              
                              type="number"
                              min="0"
                              onChange={(event)=>this.changeHandler(event)}
                              aria-describedby="basic-addon2">
                          

                      </Input>
                      <br />
                      <br />
                      <Button variant="dark" size="lg" block onClick={()=>this.cartAdditonHandler('kk')} style={{backgroundColor:'black'}} >
                          Add to cart
</Button>
                  </aside>
              </div> : null
              }


            </React.Fragment>
        )
    }

}


export default SingleCrop;