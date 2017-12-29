import PropTypes from "prop-types";
import React from "react";

class Contact extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <section id="contact" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 headline wow bounceInLeft">
                            <h2>Contact Us</h2>
                            {this.props.description}
                        </div>
                        <div className="col-md-6 wow bounceInUp">
                            {this.props.information}
                            <ul className="icon-list">
                                {this.props.address ? <li><i className="fa fa-fw fa-map-marker"/>{this.props.address}</li> : ""}
                                {this.props.phone ? <li><i className="fa fa-fw fa-phone"/><a href={"phone:" + this.props.phone}>{this.props.phone}</a></li> : ""}
                                {this.props.email ? <li><i className="fa fa-fw fa-envelope-o"/><a href={"mailto:" + this.props.email}>{this.props.email}</a></li> : ""}
                                {this.props.website ? <li><i className="fa fa-fw fa-globe"/><a href="">{this.props.website}</a></li> : ""}
                            </ul>
                        </div>
                        <div className="col-md-6 wow bounceInRight">
                            <form id="contact-form" role="form" noValidate>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control" name="name" placeholder="Name" required=""/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="email">Email address</label>
                                    <input type="email" id="email" className="form-control" name="email" placeholder="E-mail" required=""/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="message" name="message" rows="7" placeholder="Your message" required=""/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <button type="submit" className="btn btn-custom-1">
                                    <i className="fa fa-bullhorn icon-before"/> Send it
                                </button>
                            </form>
                            <div id="contact-response"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Contact.defaultProps = {
    title: "Contact Me",
    description: <p>Have an inquiry? Feel free to ask!</p>,
    address: null,
    phone: null,
    email: "callahanwilliam@callahanwilliam.com",
    website: "http://callahanwilliam.com",
};

Contact.propTypes = {
    title: PropTypes.string,
    description: PropTypes.node,
    information: PropTypes.node,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
};

export default Contact;