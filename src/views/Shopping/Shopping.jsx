import React, { Component } from 'react';
import AllCrops from '../../components/crops/allCrops/allcrops';
import CartBuilder from '../../components/Cart/CartBuilder/CartBuilder';
import PanelHeader from '../../layouts/PanelHeader/PanelHeader';
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  Button
} from "reactstrap";
import { Renderer } from 'leaflet';
class Shopping extends Component {
  state = {
    subCategory: "All"
  }
  static getDerivedStateFromProps(props, state) {

    console.log(props);
let newState = {
        ...state
      }
    if (props.subCategory !== "" && props.subCategory !== state.subCategory) {
      
      newState.subCategory = props.subCategory;
    }
    console.log(newState)
    return newState;

  }
  render() {
    console.log('in render',this.state)
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12} xs={24}>
              <Card>
                <CardHeader>
                  <h5 className="title">Shopping Zone</h5>
                </CardHeader>
                <CardBody>
                  <AllCrops category="Grains" subCategory={this.state.subCategory} />
                  <CartBuilder />
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <CartBuilder />
       */}
        </div>
      </div>
    );
  }

}

export default Shopping;
