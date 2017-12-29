import PropTypes from "prop-types";
import React from "react";
import Work from "./Work";

class Works extends React.Component {

    constructor() {
        super();
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
        return this.props.works.map(function(work, i) {
            return (<div key={"work" + work.props.title} className={"col-md-4 col-sm-6 wow " + Works.getAnimation(i)} data-wow-delay={Works.getDelay(i)}>{work}</div>);
        });
    }

    render() {
        return (
            <section id="portfolio" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 headline wow bounceInDown">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
                        {this.getWorks()}
                    </div>
                </div>
            </section>
        );
    }

}

Works.defaultProps = {
    title: "Portfolio",
    description: null,
    works: [
        React.createElement(Work, {title: "Client 1",}),
        React.createElement(Work, {title: "Client 2",}),
        React.createElement(Work, {title: "Client 3",}),
        React.createElement(Work, {title: "Client 4",}),
        React.createElement(Work, {title: "Client 5",}),
        React.createElement(Work, {title: "Client 6",}),
    ],
};

Works.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    works: PropTypes.array,
};

export default Works;