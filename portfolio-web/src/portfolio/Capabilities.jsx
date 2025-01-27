import React from 'react';
import PropTypes from 'prop-types';
import Capability from './Capability';

class Capabilities extends React.Component {

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
                            {this.props.description ? <p>{this.props.description}</p> : ""}
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
    description: null,
    capabilities: [
        <Capability title={"Cloud Services"}
            description={<p>Building Public, Mutli, and Hybrid Cloud Environment Infrastructure</p>}
            icon={"fa-cloud"}/>,
        <Capability title={"Full Stack"}
            description={<p>Working as a full-stack developer to maintain all aspects of an application.</p>}
            icon={"fa-server"}/>,
        <Capability title={"REST Services"}
            description={<p>Building REST APIs that adhere to proper RESTful Web Service Standards.</p>}
            icon={"fa-retweet"}/>,
        <Capability title={"Agile"}
            description={<p>Working in fast-paced agile development environments</p>}
            icon={"fa-group"}/>,
        <Capability title={"Responsive Design"}
            description={<p>Creating web applications that are both mobile and user friendly.</p>}
            icon={"fa-desktop"}/>,
        <Capability title={"Server Configuration"}
            description={<p>Configuring Kubernetes, Windows, Linux Environments.</p>}
            icon={"fa-cogs"}/>,
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