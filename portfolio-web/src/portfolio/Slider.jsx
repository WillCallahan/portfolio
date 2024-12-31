import PropTypes from "prop-types";
import React from "react";
import SliderItem from "./SliderItem";
import { default as ReactSlider } from "react-slick";

class Slider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	getClients() {
		return this.props.clients.map(function (client) {
			return (
				<div className={""} key={"client" + client.props.title}>
					{client}
				</div>
			);
		});
	}

	render() {
		return (
			<section id="clients" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 hidden-xs wow bounceInLeft">
							<h3>{this.props.title}</h3>
							{this.props.description ? <p>{this.props.description}</p> : ""}
						</div>
						<div className="col-md-9">
							<ReactSlider infinite={true} slidesToShow={4} speed={400} autoplaySpeed={1000} autoplay>
								{this.getClients()}
							</ReactSlider>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

Slider.defaultProps = {
	title: "Technology",
	description: "Proficiencies",
	clients: [
		React.createElement(SliderItem, {title: "Java 8", image: "/public/images/technology/Java.png"}),
		React.createElement(SliderItem, {title: "Python 2.7/3.5", image: "/public/images/technology/Python.png"}),
		React.createElement(SliderItem, {title: "C#", image: "/public/images/technology/CSharp.png"}),
		React.createElement(SliderItem, {title: "PHP 7", image: "/public/images/technology/Php.png"}),
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