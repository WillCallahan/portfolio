import React from 'react';
import PropTypes from 'prop-types';

class ResumeItem extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className={"col-md-6 col-sm-8 resume-item wow bounceInUp " + (this.props.offset ? "col-md-offset-3" : "")}>
                    <h4>{this.props.title}</h4>
                    {this.props.description}
                    <hr className="hidden-xs"/>
                </div>
                <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                    <h4><i className={"fa " + this.props.icon}/> {this.props.company}</h4>
                    <i className="fa fa-calendar"/> {this.props.date}
                    <hr className="visible-xs"/>
                </div>
            </div>
        );
    }

}

ResumeItem.defaultProps = {
    title: null,
    description: null,
    company: null,
    icon: "fa-suitcase",
    date: null,
    offset: true
};

ResumeItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    company: PropTypes.string,
    icon: PropTypes.string,
    date: PropTypes.string,
    offset: PropTypes.bool
};

export default ResumeItem;