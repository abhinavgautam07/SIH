import React, { Component } from 'react';

class SmallSingleCrop extends Component{
    state={
        crop:null
    }

    componentDidMount=()=>{
        //axios request and fetch the crop data as id of the crop is passed in the props
        if(this.props.itemId==1){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Premium wheat'
                }
            });

            }
        if(this.props.itemId==2){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Elite wheat'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
        if(this.props.itemId==4){
            this.setState({
                crop:{
                    imageUrl:'https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg',
                    cropName:'Premium Rice'
                }
            });
        }
        if(this.props.itemId==5){
            this.setState({
                crop:{
                    imageUrl:'https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg',
                    cropName:'Elite Rice'
                }
            });
        }
        if(this.props.itemId==6){
            this.setState({
                crop:{
                    imageUrl:'https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg',
                    cropName:'Classic Rice'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
        if(this.props.itemId==3){
            this.setState({
                crop:{
                    imageUrl:'http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg',
                    cropName:'Classic wheat'
                }
            });
        }
          
        }

    clickHandler=()=>{
        console.log('clicked');
    }
    com
    render(){
        return (

            <div onClick={this.props.clicked}>
                
                   {
                       this.state.crop ?    <div  style={{ height: "7rem", width: "15rem", margin: '16px' }}>
                       <div   style={{ height: '100%', width: '100%' }}>
                         
                         <img src={this.state.crop.imageUrl} style={{ height: '100%', width: '100%' }} />
                       </div>
                       <div style={{ textAlign: 'center', }}>
                         
                           <b>
                              {
                                  this.state.crop.cropName
                              }
                           </b>
                         
                       </div>
   
                     </div>:null
                   }
                      
                    </div>
        );
    }

}

export default SmallSingleCrop;
