import React from 'react';
import PropTypes from 'prop-types';

class Certifications extends React.Component {

    render() {
        return (
            <section className="callout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 hidden-xs wow bounceInLeft">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="col-md-9 headline nomargin wow bounceInDown">
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/3568fd60-72d2-472a-b9f6-c6ff4ea1119e/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/7fbb805d-ea82-4276-a227-e63121a2844b/AWS-DevOpsEngineer-Professional-2020.png' alt='AWS DevOps Engineer Professional'/>
                                </a>
                            </div>
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/e57191a4-236b-4912-8f3c-690a81c336ef/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/598f6ac6-2dbd-4394-8ae4-943b2f4c43ea/AWS-Developer-Associate-2020.png' alt='AWS Certified Developer Associate'/>
                                </a>
                            </div>
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/681b495c-2597-4cca-bfe3-3bbd9dbb4efe/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png' alt='AWS Certified Solutions Architect Associate'/>
                                </a>
                            </div>
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/617b8512-adce-42a0-aaa0-18934524a459/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png' alt='AWS Cloud Practitioner'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Certifications.defaultProps = {
    title: "Certifications",
    descriptionTitle: null,
    description: null,
    certificationsLink: "#certifications"
};

Certifications.propTypes = {
    title: PropTypes.string,
    descriptionTitle: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    certificationsLink: PropTypes.string
};

export default Certifications;