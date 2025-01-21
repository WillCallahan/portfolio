import PropTypes from "prop-types";
import React from "react";
import Work from "./Work";
import ArrayUtility from "./utility/ArrayUtility";

class Works extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static getAnimation(index) {
        switch (index) {
            case 0:
                return "bounceInLeft";
            case 2:
                return "bounceInRight";
            default:
                return "bounceInUp";
        }
    }

    static getDelay(index) {
        if (index < 3)
            return "";
        return (0.2 * (index - 2)) + "s";
    }

    getWorks() {
    	let groupedArray = ArrayUtility.getInGroupsOf(this.props.works, this.props.worksPerRow);
        return groupedArray.map(function(works, i) {
        	let worksElements = works.map(function(work, o) {
        		return (<div key={"work" + work.props.title} className={"col-md-4 col-sm-6 wow " + Works.getAnimation((i * this.props.worksPerRow) + o)} data-wow-delay={Works.getDelay((i * this.props.worksPerRow) + o)}>{work}</div>);
			}, this);
			return (<div data-aos="slide-up" key={"worksRow" + i} className="row">{worksElements}</div>);
        }, this);
    }

    render() {
        return (
            <section id="portfolio" className="callout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 headline wow bounceInDown">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
					</div>
					{this.getWorks()}
                </div>
            </section>
        );
    }

}

Works.defaultProps = {
    title: "Samples",
    description: null,
    works: [
        React.createElement(Work, {title: "Color-blind Pal", description: "Colorblindness Accessibility App", type: "iframe", popupLink: "https://github.com/tecconn/colorblind-pal", image: "/images/portfolio/Ishihara-Protanopia.jpg"},),
        React.createElement(Work, {title: "Battleship", description: "Battleship Game", image: "/images/portfolio/BattleshipCrop.jpg", popupLink: "https://github.com/WillCallahan/wcsu-cs-360-01"}),
        React.createElement(Work, {title: "MSL Compiler", description: "Custom Language Compiler", image: "/images/portfolio/MSLCompiler.jpg", popupLink: "https://github.com/WillCallahan/wcsu-cs-299-01"}),
        React.createElement(Work, {title: "Typing Test", description: "Demonstration of HTML5 Canvas", image: "/images/portfolio/TypingTest.jpg", popupLink: "https://github.com/tecconn/TypingTest"}),
        React.createElement(Work, {title: "Contact Manager", description: "Demonstration of AWS Lambda", image: "/images/portfolio/ContactManagerColor.jpg", popupLink: "https://github.com/WillCallahan/contact-manager"}),
        React.createElement(Work, {title: "Fairfield Country Films", description: "Marketing Website", type: "iframe", popupLink: "http://www.fairfieldcountyfilms.com/", image: "/images/portfolio/FairfieldCountyFilms.jpg"}),
    ],
	worksPerRow: 3,
};

Works.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    works: PropTypes.array,
	worksPerRow: PropTypes.number,
};

export default Works;