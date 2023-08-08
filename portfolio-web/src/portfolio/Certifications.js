import React from 'react';
import PropTypes from 'prop-types';

class Certifications extends React.Component {

    render() {
        return (
            <section className="callout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 wow bounceInLeft">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="col-md-9 headline nomargin wow bounceInDown">
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/016865e2-b72c-4902-b66f-3245ca28f0c6/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png' alt='AWS DevOps Engineer - Professional'/>
                                </a>
                            </div>
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/5cf894cd-26ea-42ef-a1bc-5beffc24069a/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png' alt='AWS Certified Developer - Associate'/>
                                </a>
                            </div>
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/43985452-3957-4198-85de-da24f3ca18f6/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png' alt='AWS Certified Security - Specialty'/>
                                </a>
                            </div>
                            <div className="col-sm-3 wow bounceInLeft">
                                <a href='https://www.credly.com/badges/77ea2c61-09f5-4044-8c9e-f6f876b9bb37/public_url'>
                                    <img src='https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png' alt='AWS Cloud Practitioner'/>
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