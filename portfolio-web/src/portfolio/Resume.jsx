import React from 'react';
import PropTypes from 'prop-types';
import ResumeSection from './ResumeSection';
import ResumeItem from "./ResumeItem";

class Resume extends React.Component {

    getResumeSections() {
        return this.props.resumeSections.map(function (resumeSection) {
            return (<div key={"resumeSection" + resumeSection.props.title}>{resumeSection}</div>);
        });
    }

    render() {
        return (
            <section id="resume" className="callout" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 headline">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    {this.getResumeSections()}
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <a href={this.props.resumeLink} className="btn btn-default btn-custom-2" download><i className="fa fa-cloud-download icon-before"/> {this.props.resumeLinkText}</a>
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
    resumeLink: "/docs/Resume - William Callahan[2017-11-21].docx",
    resumeLinkText: "Download CV",
    resumeSections: [
        React.createElement(ResumeSection, {
            title: "Experience", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "Cloud Engineer",
                    description: (
                        <ul>
							<li>Collaborated with stakeholders to design and implement multi-cloud solutions for high elasticity and durability.</li>
                            <li>Specialized in big data pipeline processing and analysis for businesses in health, government, and media sectors.</li>
                            <li>Focus in systems performance improvements in support of high throughput applications.</li>
                        </ul>
                    ),
                    company: "ThorTech Solutions",
                    date: "2017 - Current",
					offset: false
                }),
                React.createElement(ResumeItem, {
                    title: "Squad Leader",
                    description: (
                        <ul>
							<li>Led an eight-soldier squad, providing training, direction, and development for successful overseas deployment in support of Operation Enduring Freedom (OEF).</li>
                            <li>Managed squad operations, ensuring readiness and effectiveness in combat situations.</li>
                            <li>Oversaw the execution of missions and maintained high morale and discipline within the squad.</li>
                        </ul>
                    ),
                    company: "US Army National Guard",
                    date: "2013 - 2022"
                }),
                React.createElement(ResumeItem, {
                    title: "Software Engineer",
                    description: (
                        <ul>
							<li>Collaborated with stakeholders to gather application requirements for a dynamic forms application.</li>
							<li>Designed and implemented architecture to support global efforts in tracking illicit firearms trade.</li>
                        </ul>
                    ),
                    company: "United Nations",
                    date: "2014 - 2017"
                }),
                React.createElement(ResumeItem, {
                    title: "Software Engineer Team Lead",
                    description: (
                        <ul>
                            <li>Led first student software development team at WCSU, utilizing Java EE, Spring, AngularJS, and Oracle Database Systems.</li>
                            <li>Implemented Agile methodology to streamline project development and ensure timely delivery.</li>
                            <li>Mentored and supported fellow engineers to enhance technical skills and project efficiency.</li>
                        </ul>
                    ),
                    company: "WCSU",
                    date: "2014 - 2017"
                })
            ]
        }),
        React.createElement(ResumeSection, {
            title: "Education", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "MS in Data Science (In Progress)",
                    description: (
                        <ul>
                            <li>Currently working on obtaining a Masters of Science in Data Science.</li>
                        </ul>
                    ),
                    company: "Stevens Institute of Technology",
                    date: "2023 - Current",
                    icon: "fa-area-chart",
                    offset: false
                }),
                React.createElement(ResumeItem, {
                    title: "BS in Computer science, Minor in Security",
                    description: (
                        <ul>
                            <li>Focused on security to build a strong knowledge-base required for modern applications.</li>
                            <li>Maintained a full-time course load while working a minimum of 20 hours each week.</li>
                        </ul>
                    ),
                    company: "WCSU",
                    date: "2012 - 2017",
                    icon: "fa-graduation-cap"
                }),
            ]
        }),
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