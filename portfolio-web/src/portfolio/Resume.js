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
            <section id="resume" className="callout">
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
    resumeLink: "/public/docs/Resume - William Callahan[2017-11-21].docx",
    resumeLinkText: "Download CV",
    resumeSections: [
        React.createElement(ResumeSection, {
            title: "Education", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "BS in Computer science, Minor in Security",
                    description: (
                        <ul>
							<li>Excelled in courses by holding a 3.31 GPA overall and 3.51 GPA in major.</li>
							<li>Maintained a fulltime course load while working a minimum of 20 hours each week.</li>
                        </ul>
                    ),
                    company: "WCSU",
                    date: "2012 - 2017",
					icon: "fa-graduation-cap",
					offset: false
                }),
            ]
        }),
        React.createElement(ResumeSection, {
            title: "Experience", resumeItems: [
                React.createElement(ResumeItem, {
                    title: "Backend Developer",
                    description: (
                        <ul>
							<li>Responsible for full application development lifecycle; meeting with major stakeholders, defining architecture and documentation, and implementing the architecture of the application.</li>
							<li>Engineered a breakthrough dynamic form management software built to scale for the future.</li>
							<li>Performed exceptionally well in reaction to late stage design changes under stringent time requirements.</li>
							<li>Interfaced with international organizations to provide REST API access and documentation.</li>
							<li>Utilized technologies including AWS EC2, AWS RDS, AWS API Gateway, Python, C#, Django, ASP.NET, SQL, PL/SQL, HTML, CSS, and MySQL DBMS.</li>
                        </ul>
                    ),
                    company: "United Nations",
                    date: "2014 - 2017",
					offset: false
                }),
                React.createElement(ResumeItem, {
                    title: "Lead Team Software Developer",
                    description: (
                        <ul>
                            <li>Responsible for full application development lifecycle among a team of three developers.</li>
                            <li>Launched first student oriented software development team for the university.</li>
                            <li>Defined clear development standards which promoted development understandability and efficiency.</li>
                            <li>Streamlined university operations with three robust web applications utilized by the university today.</li>
                            <li>Utilized technologies including MVC Design Patterns, RESTful Web Services, Java SE, Java EE, Spring, AngularJS, JQuery, JavaScript, HTML, CSS, SQL, and Oracle DBMS.</li>
                        </ul>
                    ),
                    company: "WCSU",
                    date: "2014 - 2017"
                }),
                React.createElement(ResumeItem, {
                    title: "Computer Science Tutor",
                    description: (
                        <ul>
							<li>Provided outstanding support to fellow students to foster growth in the field of Computer Science.</li>
							<li>Maintained a high level of awareness in both technological and behavioral skills.</li>
                        </ul>
                    ),
                    company: "WCSU",
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