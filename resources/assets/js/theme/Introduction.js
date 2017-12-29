import PropTypes from "prop-types";
import React from "react";

class Introduction extends React.Component {

    constructor() {
        super();
        this.state = {};
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