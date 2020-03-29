import React, { Component } from 'react';
// import Classes from './allCrops.css';
import Modal from '../../UI/Modals/Modal';
import SingleCrop from '../Crop/singleCrop';
import SmallSingleCrop from '../Crop/SmallSingleCrop';
import './allCrops.css';

class AllCrops extends Component {

  // props.subCategory="wheat";
  // props.category="Grains";
  constructor(props) {
    super(props);
    this.Items = []
    this.insertData();
    this.i = 0;
    this.state = {
      selectedItems: [...this.Items],
      showModal: false,
      selectedCrop: null,
    }
  }
  modalToggler = () => {
    this.setState({
      showModal: false,
      selectedCrop: null,
    })
  }
  cropSelectionHandler = (id) => {
    console.log(id);
    this.setState({
      selectedCrop: id,
      showModal: true
    });
  }



  insertData = () => {
    this.Items.push({
      id: 1,
      imageUrl: "http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg",
      farmerName: "Abhinav Gautam",
      cropName: "Premium Wheat",
      cropCost: 140,
      subCategory: "Wheat",
      tag: "Premium",
      category: "Grains"
    });
    this.Items.push({
      id: 2,
      imageUrl: "http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg",
      farmerName: "Ishan Chaudhary",
      cropName: "Elite Wheat",
      cropCost: 120,
      subCategory: "Wheat",
      tag: "Elite",
      category: "Grains"
    });
    this.Items.push({
      id: 3,
      imageUrl: "http://5.imimg.com/data5/NR/BA/MY-17256771/wheat-500x500.jpg",
      farmerName: "An",
      cropName: "Classic Wheat",
      cropCost: 100,
      subCategory: "Wheat",
      tag: "classic",
      category: "Grains"
    });
    this.Items.push({
      id: 4,
      imageUrl: "https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg",
      farmerName: "An",
      cropName: "Premium Rice",
      cropCost: 100,
      subCategory: "Rice",
      tag: "Premium",
      category: "Grains"
    });
    this.Items.push({
      id: 5,
      imageUrl: "https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg",
      farmerName: "An",
      cropName: "Elite Rice",
      cropCost: 100,
      subCategory: "Rice",
      tag: "Elite",
      category: "Grains"
    });
    this.Items.push({
      id: 6,
      imageUrl: "https://image.shutterstock.com/image-photo/uncooked-dry-rice-wooden-bowl-600w-556979941.jpg",
      farmerName: "An",
      cropName: "Classic Rice",
      cropCost: 100,
      subCategory: "Rice",
      tag: "Classic",
      category: "Grains"
    });
    this.Items.push({
      id: 7,
      imageUrl: "https://www.indiaagronet.com/indiaagronet/crop%20info/images/Ragi.jpg",
      farmerName: "An",
      cropName: "Premium Raggi",
      cropCost: 100,
      subCategory: "Raggi",
      tag: "Premium",
      category: "Grains"
    });
    this.Items.push({
      id: 8,
      imageUrl: "https://www.indiaagronet.com/indiaagronet/crop%20info/images/Ragi.jpg",
      farmerName: "An",
      cropName: "Elite Raggi",
      cropCost: 100,
      subCategory: "Raggi",
      tag: "Elite",
      category: "Grains"
    });
    this.Items.push({
      id: 9,
      imageUrl: "https://www.indiaagronet.com/indiaagronet/crop%20info/images/Ragi.jpg",
      farmerName: "An",
      cropName: "Classic Raggi",
      cropCost: 100,
      subCategory: "Raggi",
      tag: "Classic",
      category: "Grains"
    });
    this.Items.push({
      id: 10,
      imageUrl: "http://www.lima-europe.eu/wp-content/uploads/2017/07/Corn.jpg",
      farmerName: "An",
      cropName: "Premium Maize",
      cropCost: 100,
      subCategory: "Maize",
      tag: "Premium",
      category: "Grains"
    });
    this.Items.push({
      id: 11,
      imageUrl: "http://www.lima-europe.eu/wp-content/uploads/2017/07/Corn.jpg",
      farmerName: "An",
      cropName: "Elite Maize",
      cropCost: 100,
      subCategory: "Maize",
      tag: "Elite",
      category: "Grains"
    });
    this.Items.push({
      id: 12,
      imageUrl: "http://www.lima-europe.eu/wp-content/uploads/2017/07/Corn.jpg",
      farmerName: "An",
      cropName: "Classic Maize",
      cropCost: 100,
      subCategory: "Maize",
      tag: "Classic",
      category: "Grains"
    });

  }

componentWillReceiveProps(nextProps) {
  // //select all the items with this category and subCategory
  // console.log(nextProps);
  // let items=[];
  // for(let item in this.Items){
  //   if(item.category===nextProps.category &&(nextProps.subCategory==="All" || nextProps.subCategory===item.subCategory)){

  //     let newItem={
  //       ...item
  //     }
  //     console.log('new item',newItem);
  //     items.push(newItem)
  //   }
  // }
  // console.log('hh',items);
  // if(nextProps.subCategory==="All" &&(this.Items.length!==this.state.selectedItems.length)){
  //  this.setState({
  //    selectedItems:[...items]
  //  });
  //  console.log('case1')

  // }
  // if(nextProps.category!=="All"&& (this.state.selectedItems[0].subCategory!==nextProps.subCategory)){
  //   this.setState({
  //     selectedItems:[...items]
  //   });
  //   console.log('case2')

  // }

  
}

  render() {

    return (
      <div>

        <div className="Name">
          <b>
            {this.props.category}
          </b>
          <span>
            / {this.props.subCategory}
          </span>
        </div>

        <div style={{ display: "flex", marginLeft: '13%', marginBottom: '207px', width: '81%',flexWrap:'wrap' }}>
          {

            this.Items.map(item => {
              if(this.props.subCategory==="All" || item.subCategory===this.props.subCategory){
                return (
                  <SmallSingleCrop itemId={parseInt(item.id)} clicked={() => this.cropSelectionHandler(parseInt(item.id))} />
                )
              }
             
            })
          }
        </div>
        {
          this.state.selectedCrop ? <Modal show={this.state.showModal} close={this.modalToggler}>

            <SingleCrop itemId={this.state.selectedCrop} />
          </Modal> : null
        }

      </div>




    )

  }
};

export default AllCrops;

