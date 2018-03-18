import PropTypes from "prop-types";
import React from "react";
import $ from "jquery";
import SliderItem from "./SliderItem";

class Slider extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	getClients() {
		return this.props.clients.map(function (client) {
			return (
				<div key={"client" + client.props.title}>
					{client}
				</div>
			);
		});
	}

	componentDidMount() {
		$("#owl-clients").owlCarousel({
			items: 4,
			slideSpeed: 300,
			paginationSpeed: 400,
			autoplay: true,
			autoplayTimeout: 1000,
			loop: true,
			autoWidth: true,
			margin: 25
		});
	}

	render() {
		return (
			<section id="clients" className="callout">
				<div className="container">
					<div className="row">
						<div className="col-md-3 hidden-xs wow bounceInLeft">
							<h3>{this.props.title}</h3>
							{this.props.description ? <p>{this.props.description}</p> : ""}
						</div>
						<div className="col-md-9 wow bounceInRight">
							<div id="owl-clients" className="owl-carousel">
								{this.getClients()}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

Slider.defaultProps = {
	title: "Technology",
	description: "Technologies I have used professionally.",
	clients: [
		React.createElement(SliderItem, {title: "Java 8", image: "/public/images/technology/Java.png"}),
		React.createElement(SliderItem, {title: "Python 2.7/3.5", image: "/public/images/technology/Python.png"}),
		React.createElement(SliderItem, {title: "C#", image: "/public/images/technology/CSharp.png"}),
		React.createElement(SliderItem, {title: "PHP 7", image: "/public/images/technology/Php.png"}),
		React.createElement(SliderItem, {title: "AWS", image: "/public/images/technology/AWSCertifiedSolutionsArchitectAssociate.png"}),
		React.createElement(SliderItem, {title: ".NET", image: "/public/images/technology/DotNet.png"}),
		React.createElement(SliderItem, {title: "Laravel", image: "/public/images/technology/Laravel.png"}),
		React.createElement(SliderItem, {title: "Spring Framework", image: "/public/images/technology/Spring.png"}),
		React.createElement(SliderItem, {title: "ReactJS", image: "/public/images/technology/React.png"}),
		React.createElement(SliderItem, {title: "AngularJS", image: "/public/images/technology/AngularJs.png"}),
		React.createElement(SliderItem, {title: "TypeScript", image: "/public/images/technology/TypeScript.png"}),
		React.createElement(SliderItem, {title: "ES6", image: "/public/images/technology/ES6.png"}),
		React.createElement(SliderItem, {title: "Oracle", image: "/public/images/technology/Oracle.jpg"}),
		React.createElement(SliderItem, {title: "MS SQL Server", image: "/public/images/technology/MSSqlServer.png"}),
		React.createElement(SliderItem, {title: "MySql", image: "/public/images/technology/MySql.png"}),
		React.createElement(SliderItem, {title: "DynamoDB", image: "/public/images/technology/DynamoDB.png"}),
		React.createElement(SliderItem, {title: "AWS Lambda", image: "/public/images/technology/AWSLambda.png"}),
	]
};

Slider.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	clients: PropTypes.array
};

export default Slider;