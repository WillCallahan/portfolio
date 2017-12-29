import React from 'react';
import PropTypes from 'prop-types';

class ResumeSection extends React.Component {

    constructor() {
        super();
    }

    getResumeItems() {
        return this.props.resumeItems.map(function(resumeItem) {
            return (<div key={"resumeItem" + resumeItem.props.title}>{resumeItem}</div>);
        });
    }

    render() {
        return (
            <div className="row resume-items">
                <div className="col-md-3 wow bounceInLeft">
                    <h3>{this.props.title}</h3>
                </div>
                {this.getResumeItems()}
            </div>
        );
    }

}

ResumeSection.defaultProps = {
    title: null,
    resumeItems: null,
};

ResumeSection.propTypes = {
    title: PropTypes.string.isRequired,
    resumeItems: PropTypes.node.isRequired,
};

export default ResumeSection;