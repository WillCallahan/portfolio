import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {

    render() {
        return (
            <section className="callout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 hidden-xs wow bounceInLeft">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="col-md-9 headline nomargin wow bounceInDown">
                            <h3>{this.props.descriptionTitle}</h3>
                            {this.props.description}
                            <a href={this.props.contactLink} className="btn btn-default btn-custom-2 callout-btn"><i className="fa fa-paper-plane-o icon-before"/> Contact me</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Status.defaultProps = {
    title: "Status",
    descriptionTitle: null,
    description: null,
    contactLink: "#contact"
};

Status.propTypes = {
    title: PropTypes.string,
    descriptionTitle: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    contactLink: PropTypes.string
};

export default Status;