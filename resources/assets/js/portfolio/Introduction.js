import PropTypes from "prop-types";
import React from "react";
import $ from "jquery";

class Introduction extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
		$('#intro').backstretch([
			'public/images/theme/backstretch/Screens.jpg',
		], {duration: 3000, fade: 750});
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
                                <h1>Hello, I'm {this.props.name}</h1>
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
        "Java Engineer",
        "C# Engineer",
        "PHP Engineer",
        "Python Engineer",
        "HTML/CSS/JavaScript Developer",
    ],
    link: "#profile"
};

Introduction.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.array,
    link: PropTypes.string
};

export default Introduction;