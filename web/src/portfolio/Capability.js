import React from 'react';
import PropTypes from 'prop-types';

class Capability extends React.Component {

    constructor() {
        super();
    }

    getIcon() {
        if (this.props.icon) {
            return (
                <div className="icon">
                    <i className={"fa " + this.props.icon}/>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="service">
                {this.getIcon()}
                <h4>{this.props.title}</h4>
                <div className="text">
                    {this.props.description}
                </div>
            </div>
        );
    }

}

Capability.defaultProps = {
    title: null,
    description: null,
    icon: ""
};

Capability.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    icon: PropTypes.string
};

export default Capability;