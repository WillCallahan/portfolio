import React from 'react';
import PropTypes from 'prop-types';

class Stat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="stat">
                <div className="stat-icon">
                    <h2>
                        <i className={"fa " + this.props.icon + " hidden-xs"}/><span className="timer" data-to={this.props.value}/>{this.props.postfix}
                    </h2>
                </div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }

}

Stat.defaultProps = {
    title: null,
    value: null,
    icon: null,
    postfix: ""
};

Stat.propTypes = {
    /**
     * Title of the statistic
     */
    title: PropTypes.string.isRequired,
    /**
     * Number statistic to show
     */
    value: PropTypes.number.isRequired,
    /**
     * Name of the Font-Awesome icon to use
     */
    icon: PropTypes.string.isRequired,
    /**
     * Text to show after the number statistics
     */
    postfix: PropTypes.string
};

export default Stat;