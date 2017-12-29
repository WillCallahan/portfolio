import React from 'react';
import PropTypes from 'prop-types';
import ResumeSection from './ResumeSection';
import ResumeItem from "./ResumeItem";

class Resume extends React.Component {

    constructor() {
        super();
    }

    getResumeSections() {
        return this.props.resumeSections.map(function (resumeSection) {
            return (<div key={"resumeSection" + resumeSection.props.title}>{resumeSection}</div>);
        });
    }

    render() {
        return (
            <section id="resume" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 headline wow bounceInDown">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    {this.getResumeSections()}
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 wow bounceInUp">
                            <a href={this.props.resumeLink} className="btn btn-default btn-custom-2"><i className="fa fa-cloud-download icon-before"/> {this.props.resumeLinkText}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Resume.defaultProps = {
    title: "Resume",
    description: "My education and experience.",
    resumeLink: null,
    resumeLinkText: "Download CV",
    resumeSections: [
        React.createElement(ResumeSection, {
            title: "Education", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "BS in Computer science",
                    description: "Minor in Security",
                    company: "Western Connecticut State University",
                    date: "2012 - 2017"
                }),
            ]
        }),
        React.createElement(ResumeSection, {
            title: "Experience", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "Lead Team Software Developer",
                    description: "Something something",
                    company: "Western Connecticut State University",
                    date: "2014 - 2017"
                }),
            ]
        })
    ]
};

Resume.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    resumeLink: PropTypes.string,
    resumeLinkText: PropTypes.string,
    resumeSections: PropTypes.array
};

export default Resume;