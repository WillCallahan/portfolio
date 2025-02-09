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
			<section id="clients" className="callout">
				<div className="container" data-aos="slide-left">
					<div className="row">
						<div className="col-md-3 hidden-xs">
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
		React.createElement(SliderItem, {title: "C#", image: "/images/technology/CSharp.png"}),
		React.createElement(SliderItem, {title: "Java", image: "/images/technology/Java.png"}),
		React.createElement(SliderItem, {title: "Python 3", image: "/images/technology/Python.png"}),
		React.createElement(SliderItem, {title: "Clojure", image: "/images/technology/Clojure.png"}),
		React.createElement(SliderItem, {title: "MS SQL Server", image: "/images/technology/MSSqlServer.png"}),
		React.createElement(SliderItem, {title: "ReactJS", image: "/images/technology/React.png"}),
		React.createElement(SliderItem, {title: "AWS Lambda", image: "/images/technology/AWSLambda.png"}),
		React.createElement(SliderItem, {title: ".NET", image: "/images/technology/DotNet.png"}),
		React.createElement(SliderItem, {title: "PHP", image: "/images/technology/Php.png"}),
		React.createElement(SliderItem, {title: "Laravel", image: "/images/technology/Laravel.png"}),
		React.createElement(SliderItem, {title: "AngularJS", image: "/images/technology/AngularJs.png"}),
		React.createElement(SliderItem, {title: "TypeScript", image: "/images/technology/TypeScript.png"}),
		React.createElement(SliderItem, {title: "Spring Framework", image: "/images/technology/Spring.png"}),
		React.createElement(SliderItem, {title: "ES6", image: "/images/technology/ES6.png"}),
		React.createElement(SliderItem, {title: "Oracle", image: "/images/technology/Oracle.jpg"}),
		React.createElement(SliderItem, {title: "MySql", image: "/images/technology/MySql.png"}),
		React.createElement(SliderItem, {title: "OpenSearch", image: "/images/technology/OpenSearch.png"}),
	]
};

Slider.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	clients: PropTypes.array
};

export default Slider;