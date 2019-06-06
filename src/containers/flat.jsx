import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const bckimg = `url('${this.props.flat.imageUrl}')`;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)), ${bckimg}`
    };
    // let classes = "card flat";
    // if (this.props.flat === this.props.selectedFlat) {
    //   classes += " selected";
    // }

    const classes = (this.props.flat === this.props.selectedFlat) ? "card flat selected" : "card flat";

    return (
      // <div className="flat card-container">
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.priceCurrency} {this.props.flat.price} per night</p>
        </div>
      </div>
      // </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
