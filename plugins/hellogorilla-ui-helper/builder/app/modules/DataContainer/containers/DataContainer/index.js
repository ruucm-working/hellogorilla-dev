/**
 *
 * DataContainer Redux Container
 *
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectName } from "./selectors";
import { sampleAction } from "./actions";

class DataContainer extends Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      exampleValue: ""
    };
  }

  handleEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    const { dispatch, name } = this.props; // eslint-disable-line
    dispatch(sampleAction(name));
  }

  render() {
    const { exampleValue } = this.state; // eslint-disable-line

    return <div />; // eslint-disable-line
  }
}

DataContainer.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  name: selectName()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
