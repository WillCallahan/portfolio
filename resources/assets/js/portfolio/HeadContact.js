import React from "react";
import PropTypes from "prop-types";

class HeadContact extends React.Component {

    constructor() {
        super();
        this.state = {
            width: 4
        };
    }

    componentDidMount() {
        this.setState({width: this.getWidth()});
    }

    static getContactProperties() {
        return ["email", "phone", "address"];
    }

    getEmail() {
        if (this.props.email) {
            return (
                <div className={"col-sm-" + this.state.width + " wow bounceInLeft"}>
                    <div className="profile-item">
                        <i className="fa fa-envelope-o"/>
                        <h5><a href={"mailto:" + this.props.email}>{this.props.email}</a></h5>
                    </div>
                </div>
            );
        }
    }

    getPhone() {
        if (this.props.phone) {
            return (
                <div className={"col-sm-" + this.state.width + " wow bounceInUp"}>
                    <div className="profile-item">
                        <i className="fa fa-phone"/>
                        <h5><a href={"phone:" + this.props.phone}>{this.props.phone}</a></h5>
                    </div>
                </div>
            );
        }
    }

    getAddress() {
        if (this.props.address) {
            return (
                <div className={"col-sm-" + this.state.width + " wow bounceInRight"}>
                    <div className="profile-item">
                        <i className="fa fa-map-marker"/>
                        <h5>{this.props.address}</h5>
                    </div>
                </div>
            );
        }
    }

    /**
     * Gets all the Contact properties that have been filled
     *
     * @return {Array} Values of the contact properties that have been filled
     */
    getFilledContactValues() {
        let contactProps = HeadContact.getContactProperties();
        let values = [];
        for (let prop in this.props) {
            if (this.props.hasOwnProperty(prop) && contactProps.includes(prop) && this.props[prop])
                values.push(prop);
        }
        return values;
    }

    /**
     * Gets the Bootstrap Width that each contact card should be.
     *
     * This is based on the Bootstrap grid layout system.
     *
     * @return {number} Bootstrap 12 column width
     */
    getWidth() {
        let filledValues = this.getFilledContactValues().length;
        return 12 / (filledValues > 0 ? filledValues : 1);
    }

    render() {
        return (
            <section id="profile-contact">
                <div className="container">
                    <div className="row">
                        {this.getEmail()}
                        {this.getPhone()}
                        {this.getAddress()}
                    </div>
                </div>
            </section>
        );
    }

}

HeadContact.defaultProps = {
    email: "callahanwilliam@callaanwilliam.com",
    phone: null,
    address: "New Fairfield, CT"
};

HeadContact.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
};

export default HeadContact;