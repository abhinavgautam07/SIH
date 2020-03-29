import React from "react";

class PanelHeader extends React.Component {
  render() {
    console.log("panel header",this.props.content);
    return (
      <div style={{height:"670px",marginLeft:"0px"}}
        className={
          "panel-header " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default PanelHeader;
