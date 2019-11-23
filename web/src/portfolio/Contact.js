import PropTypes from "prop-types";
import React from "react";
import $ from "jquery";
import ContactRepository from "./repository/ContactRepository";
import ContactModel from "./model/Contact";

class Contact extends React.Component {

	constructor() {
		super();
		this.state = {
			contactForm: {
				name: "",
				email: "",
				message: ""
			},
			loading: false,
			validationMessage: ""
		};
		this.contactRepository = new ContactRepository();
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	/**
	 * Returns a validation message if the form is not valid.
	 *
	 * @return {*} Validation message if for is invalid or null.
	 */
	isFormInvalid() {
		for (let prop in this.state.contactForm) {
			if (this.state.contactForm.hasOwnProperty(prop) && !this.state.contactForm[prop])
				return <p>Please fill out the <b>{prop}</b> field.</p>;
		}
		return null;
	}

	/**
	 * Sends an email message to be sent from the server
	 *
	 * @param name {string} Name of the person sending the email
	 * @param email {string} Email of the person
	 * @param message {string} Message to send to the user
	 */
	sendEmail(name, email, message) {
		let _this = this;
		let contact = new ContactModel("Portfolio Request - " + name, email, message);
		$.when(this.contactRepository.save(contact)).done((response) => {
			_this.setState({
				contactForm: {
					name: "",
					email: "",
					message: ""
				},
				validationMessage: (<p>{response.message}</p>)
			});
			$("#contact-form").toggle("slow");
		}).fail((jqXHR) => {
			_this.setState({validationMessage: (<p>{jqXHR.responseJSON.message}</p>)});
		});
	}

	/**
	 * Submits the contact form
	 *
	 * @param event {Event} Event
	 */
	onSubmit(event) {
		event.preventDefault();
		let isFormInvalid = this.isFormInvalid();
		this.setState({loading: true});
		if (isFormInvalid)
			this.setState({validationMessage: isFormInvalid});
		else
			this.sendEmail(this.state.contactForm.name, this.state.contactForm.email, this.state.contactForm.message);
		this.setState({loading: false});
	}

	onChange(prop) {
		let _this = this;
		return function handleEvent(event) {
			if (!_this.state.contactForm.hasOwnProperty(prop))
				throw new Error("Invalid ContactForm property " + prop);
			let state = {..._this.state};
			state.contactForm[prop] = event.target.value;
			_this.setState(state);
		}
	}

	render() {
		return (
			<section id="contact" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 headline wow bounceInLeft">
							<h2>{this.props.title}</h2>
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
							{this.state.validationMessage}
							<form id="contact-form" onSubmit={this.onSubmit} role="form" noValidate>
								<div className="form-group">
									<label className="sr-only" htmlFor="name">Name</label>
									<input type="text" id="name" className="form-control" name="name" placeholder="Name" value={this.state.contactForm.name} onChange={this.onChange("name")} required="required"/>
									<p className="help-block text-danger"/>
								</div>
								<div className="form-group">
									<label className="sr-only" htmlFor="email">Email address</label>
									<input type="email" id="email" className="form-control" name="email" placeholder="E-mail" value={this.state.contactForm.email} onChange={this.onChange("email")} required="required"/>
									<p className="help-block text-danger"/>
								</div>
								<div className="form-group">
									<textarea className="form-control" id="message" name="message" rows="7" placeholder="Your message" value={this.state.contactForm.message} onChange={this.onChange("message")} required="required"/>
									<p className="help-block text-danger"/>
								</div>
								<button type="submit" className="btn btn-custom-1" disabled={this.state.loading}>
									<i className={"fa " + (this.state.loading ? "fa-spinner fa-spin" : "fa-bullhorn") + " icon-before"}/> {this.state.loading ? "Wait..." : "Send it"}
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