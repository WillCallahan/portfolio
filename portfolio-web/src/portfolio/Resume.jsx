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
    resumeLink: "/docs/CV_William_Callahan_16FEB2025.pdf",
    resumeLinkText: "Download CV",
    resumeSections: [
        React.createElement(ResumeSection, {
            title: "Experience", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "Senior Cloud Software Engineer",
                    description: (
                        <ul>
							<li>Led cross-functional clients in health, government, and media sectors on
                                designing and implementing multi-cloud solutions, ensuring security,
                                durability, and scalability</li>
							<li>Reduced batch execution times by 90%, accelerating time to market from
                                hours to minutes for multiple clients</li>
                            <li>Optimized live election API performance, ensuring consistent sub-200ms
                                latency while querying large dynamic datasets</li>
                            <li>Redesigned US election survey platform, improving model accuracy and
                                accelerating live election publishing</li>
                            <li>Reimagined company CI/CD pipeline to reduce build times by 60%</li>
                            <li>Championed SOC 2 initiatives to reduce over 300 SCM vulnerabilities in the
                                first month using SecurityHub, Dependabot, and Patch Manager</li>
                            <li>Architected distributed systems using AWS Lambda, ElastiCache, RDS, MSK,
                                ECS, Beanstalk, Kinesis, ELB, SQS, EC2, SSM, and VPCs</li>
                            <li>Reduced cloud Operational costs per client by 15% on average</li>
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
							<li> Led an eight-soldier squad, providing training, direction, and development for successful overseas deployment in support of Operation Enduring Freedom (OEF)</li>
                            <li>Oversaw the execution of missions and maintained high morale and discipline within the squad</li>
                        </ul>
                    ),
                    company: "US Army National Guard",
                    date: "2013 - 2022"
                }),
                React.createElement(ResumeItem, {
                    title: "Software Engineer",
                    description: (
                        <ul>
							<li>Collaborated with stakeholders to dene requirements for a dynamic forms application, leveraging Django, React, and MySQL</li>
							<li>Designed and implemented a scalable architecture to support global efforts in tracking illicit rearms trade</li>
                        </ul>
                    ),
                    company: "United Nations",
                    date: "2014 - 2017"
                }),
                React.createElement(ResumeItem, {
                    title: "Software Engineer Team Lead",
                    description: (
                        <ul>
                            <li>Chaired the rst student-led software development team at WCSU</li>
                            <li>Mentored fellow engineers in Java, Spring, Oracle, MSAD, and JBoss to build a university operations management website</li>
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