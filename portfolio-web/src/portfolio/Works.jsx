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

    componentDidMount() {
		$('#portfolio').magnificPopup({
			delegate: 'a.pop-up',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});

		$('.iframe-pop-up').magnificPopup({
			key: 'pop-up-iframe',
			type: 'iframe',
			preloader: true,
			tLoading: '',
			iframe: {
				markup: '<div class="mfp-iframe-scaler pop-up-iframe"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
			},
			gallery: {
				enabled: true
			},
			callbacks: {
				open: function(arg) {
					let _this = this;
					this.updateStatus('loading', '');
					$(this.content).find("iframe.mfp-iframe").load(function() {
						_this.updateStatus('ready', '');
					});
				}
			}
		});
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
        React.createElement(Work, {title: "Visions Construction LLC", description: "Content Management System", type: "iframe", popupLink: "https://visionsconstructionllc.com/", image: "/images/portfolio/VisionsConstructionLLC.jpg"},),
        React.createElement(Work, {title: "Fairfield Country Films", description: "Marketing Website", type: "iframe", popupLink: "http://www.fairfieldcountyfilms.com/", image: "/images/portfolio/FairfieldCountyFilms.jpg"}),
        React.createElement(Work, {title: "Battleship", description: "Battleship Game", image: "/images/portfolio/BattleshipCrop.jpg", popupLink: "/images/portfolio/Battleship.png"}),
        React.createElement(Work, {title: "MSL Compiler", description: "Custom Language Compiler", image: "/images/portfolio/MSLCompiler.jpg"}),
        React.createElement(Work, {title: "Typing Test", description: "Demonstration of HTML5 Canvas", image: "/images/portfolio/TypingTest.jpg"}),
        React.createElement(Work, {title: "Contact Manager", description: "Demonstration of AWS Lambda", image: "/images/portfolio/ContactManagerColor.jpg"}),
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