import React from 'react';
import PropTypes from 'prop-types';
import Capability from './Capability';

class Capabilities extends React.Component {

    constructor() {
        super();
    }

    getRows() {
        let rows = [];
        for (let i = 0; i < this.props.capabilities.length; i++) {
            if (i % this.props.itemsPerRow === 0)
                rows.push([]);
            rows[rows.length - 1].push(
                <div key={"row" + i} className="col-sm-4 wow bounceInLeft">
                    {this.props.capabilities[i]}
                </div>
            );
        }
        return rows;
    }

    getCapabilities() {
        let rows = this.getRows();
        let capabilities = [];
        for (let i = 0; i < rows.length; i++)
            capabilities.push(<div key={"capability" + i} className="row">{[...rows[i]]}</div>)
        return capabilities;
    }

    render() {
        return (
            <section id="services" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 headline wow bounceInDown">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="col-md-12">
                            {this.getCapabilities()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Capabilities.defaultProps = {
    title: "What I can do",
    description: "Services that I provide.",
    capabilities: [
        React.createElement(Capability, {title: "Text rotator", description: <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>, icon: "fa-pencil"}),
        React.createElement(Capability, {title: "Slideshow", description: <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>, icon: "fa-image"}),
        React.createElement(Capability, {title: "Easy configure", description: <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>, icon: "fa-cog"}),
        React.createElement(Capability, {title: "Clear code", description: <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>, icon: "fa-code"}),
        React.createElement(Capability, {title: "Responsive design", description: <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>, icon: "fa-desktop"}),
        React.createElement(Capability, {title: "Support", description: <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>, icon: "fa-life-ring"}),
    ],
    itemsPerRow: 3
};

Capabilities.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    capabilities: PropTypes.array,
    itemsPerRow: PropTypes.number
};

export default Capabilities;