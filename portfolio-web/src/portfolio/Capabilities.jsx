import PropTypes from "prop-types";
import Capability from "./Capability";

const Capabilities = ({ title, description, capabilities, itemsPerRow }) => {
    const getRows = () => {
        return capabilities.reduce((rows, capability, index) => {
            if (index % itemsPerRow === 0) rows.push([]);
            rows[rows.length - 1].push(
                <div key={`capability-${index}`} className="col-sm-4 wow bounceInLeft">
                    {capability}
                </div>
            );
            return rows;
        }, []);
    };

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInDown">
                        <h2>{title}</h2>
                        {description && <p>{description}</p>}
                    </div>
                    <div className="col-md-12">
                        {getRows().map((row, index) => (
                            <div key={`row-${index}`} className="row">
                                {row}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

Capabilities.defaultProps = {
    title: "What I can do",
    description: null,
    capabilities: [
        (<Capability
            key="cap-1"
            title="Cloud Services"
            description={<p>Building Public, Multi, and Hybrid Cloud Environment Infrastructure</p>}
            icon="fa-cloud"
        />),
        (<Capability
            key="cap-2"
            title="Full Stack"
            description={<p>Working as a full-stack developer to maintain all aspects of an application.</p>}
            icon="fa-server"
        />),
        (<Capability
            key="cap-3"
            title="REST Services"
            description={<p>Building REST APIs that adhere to proper RESTful Web Service Standards.</p>}
            icon="fa-retweet"
        />),
        (<Capability
            key="cap-4"
            title="Agile"
            description={<p>Working in fast-paced agile development environments</p>}
            icon="fa-group"
        />),
        (<Capability
            key="cap-5"
            title="Responsive Design"
            description={<p>Creating web applications that are both mobile and user-friendly.</p>}
            icon="fa-desktop"
        />),
        (<Capability
            key="cap-6"
            title="Server Configuration"
            description={<p>Configuring Kubernetes, Windows, Linux Environments.</p>}
            icon="fa-cogs"
        />),
    ],
    itemsPerRow: 3,
};

Capabilities.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    capabilities: PropTypes.arrayOf(PropTypes.element),
    itemsPerRow: PropTypes.number,
};

export default Capabilities;
