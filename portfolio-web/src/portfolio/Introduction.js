import PropTypes from "prop-types";
import React from "react";
import $ from "jquery";

class Introduction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		$('#intro').backstretch(this.props.images, {duration: 3000, fade: 750});
		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});
	}

    render() {
        return (
            <section id="intro" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hello wow bounceInDown">
                                <h1>Hi, I'm {this.props.name}</h1>
                                <h3>
                                    <span className="rotate">{this.props.skills.join(" | ")}</span>
                                </h3>
                            </div>
                            <a href={this.props.link}>
                                <div className="mouse-icon">
                                    <div className="wheel"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Introduction.defaultProps = {
    name: "William Callahan",
    skills: [
        "C# Engineer",
        "AWS Certified",
        "Python Engineer",
        "Java Engineer",
        "PHP Engineer",
        "HTML/CSS/JavaScript Developer",
    ],
	images: [
		"public/images/theme/backstretch/Screens.jpg",
	],
    link: "#profile"
};

Introduction.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.array,
	images: PropTypes.array,
    link: PropTypes.string
};

export default Introduction;