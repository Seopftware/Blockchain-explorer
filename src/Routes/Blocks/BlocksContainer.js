import React, { Component } from "react";
import PropTypes from "prop-types";
import BlocksPresenter from "./BlocksPresenter";

class BlocksContainer extends Component{
    render(){
        return <BlocksPresenter />;
    }
}

BlocksContainer.propTypes = {
    blocks: PropTypes.array.isRequired
};

export default BlocksContainer;