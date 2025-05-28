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
            <section id="resume" className="section" data-aos="fade-up">
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
    resumeLink: "/docs/CV_William_Callahan_28FEB2025.pdf",
    resumeLinkText: "Download CV",
    resumeSections: [
        React.createElement(ResumeSection, {
            title: "Experience", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "Senior Cloud Software Engineer",
                    description: (
                        <ul>
							<li>Led software engineering teams of four in health, media, and public sectors on
                                designing and implementing multi-cloud solutions, ensuring security, durability,
                                and scalability</li>
							<li>Optimized live election API performance, ensuring consistent sub-200ms latency
                                querying large dynamic datasets handling over 10-million daily global requests</li>
                            <li>Reduced batch execution times by 90%, accelerating time to market from hours to
                                minutes for multiple clients utilizing diverse databases</li>
                            <li>Redesigned US election survey weighting platform, improving model accuracy and
                                accelerating live election publishing to achieve accurate election forecasts</li>
                            <li>Acted as DevSecOps lead while reimagining the CI/CD pipeline to reduce build
                                times by 44%, cost by 29%, and SCM vulnerabilities by 52%</li>
                            <li>Architected distributed systems using AWS Lambda, ElastiCache, RDS, MSK, ECS,
                                Kinesis, ELB, SQS, EC2, Elastic Beanstalk, SSM, OpenSearch, and VPCs</li>
                            <li>Reduced cloud OpEx by 19% across four clients saving over $127,000 per year</li>
                        </ul>
                    ),
                    company: "ThorTech Solutions",
                    date: "2017 - 2025",
					offset: false
                }),
                React.createElement(ResumeItem, {
                    title: "Squad Leader",
                    description: (
                        <ul>
							<li>Led an eight-soldier infantry squad, providing training, direction, and development
                                for a successful deployment in support of Operation Enduring Freedom (OEF)</li>
                            <li>Executed joint military missions among EARF CJTF-HOA, successfully
                                strengthening international relationships for the first time in 20 years</li>
                        </ul>
                    ),
                    company: "US Army National Guard",
                    date: "2013 - 2022"
                }),
                React.createElement(ResumeItem, {
                    title: "Software Engineer",
                    description: (
                        <ul>
							<li>Collaborated with multi-national stakeholders to define requirements for a
                                dynamic forms application, leveraging Django, React, and MySQL</li>
							<li>Designed and implemented a scalable architecture to support global efforts in
                                tracking illicit firearms trade to award multi-million aid packages to over 75
                                member states</li>
                        </ul>
                    ),
                    company: "United Nations Office for Disarmament Affairs",
                    date: "2014 - 2017"
                }),
                React.createElement(ResumeItem, {
                    title: "Software Engineer Team Lead",
                    description: (
                        <ul>
                            <li>Mentored fellow engineers in the first student-led university software engineering
                                team using Angular, Java EE, Spring, Oracle, MSAD, and JBoss</li>
                            <li>Digitized university operations paperwork and timekeeping, saving over 30
                                employees one hour each daily</li>
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
                    title: "BS in Computer science, Minor in Security",
                    description: (
                        <ul>
                            <li>Focused on security to build a strong knowledge-base required for modern applications.</li>
                            <li>Maintained a full-time course load while working a minimum of 20 hours each week.</li>
                        </ul>
                    ),
                    company: "WCSU",
                    date: "2012 - 2017",
                    icon: "fa-graduation-cap",
                    offset: false
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