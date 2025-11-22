import PropTypes from "prop-types";

const Certifications = ({ title, certificationsLink }) => {
    const certifications = [
        {
            link: 'https://www.credly.com/badges/016865e2-b72c-4902-b66f-3245ca28f0c6/public_url',
            image: 'https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png',
            alt: 'AWS DevOps Engineer - Professional',
        },
        {
            link: 'https://www.credly.com/badges/43985452-3957-4198-85de-da24f3ca18f6/public_url',
            image: 'https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png',
            alt: 'AWS Certified Security - Specialty',
        },
        {
            link: 'https://www.credly.com/org/comptia/badge/comptia-security-ce-certification',
            image: 'https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob',
            alt: 'CompTIA Security+',
        },
        {
            link: 'https://www.credly.com/badges/c67695e0-aa7f-4ce8-83b7-83153af42ca8/public_url',
            image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
            alt: 'AWS Certified Solutions Architect - Associate',
        },
        {
            link: 'https://www.credly.com/badges/5cf894cd-26ea-42ef-a1bc-5beffc24069a/public_url',
            image: 'https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
            alt: 'AWS Certified Developer - Associate',
        },
        {
            link: 'https://www.credly.com/badges/77ea2c61-09f5-4044-8c9e-f6f876b9bb37/public_url',
            image: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
            alt: 'AWS Cloud Practitioner',
        },
        {
            link: 'https://www.credly.com/badges/2eb79287-b053-4556-b47b-fe10d46a631a/public_url',
            image: 'https://images.credly.com/size/340x340/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png',
            alt: 'GCP - Cloud Digital Leader',
        },
        {
            link: 'https://learn.microsoft.com/en-us/users/wcallahan/credentials/67fc5f1a02cfcf98',
            image: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
            alt: 'Azure Fundamentals',
        },
    ];

    return (
        <section className="callout" id={certificationsLink}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>{title}</h3>
                    </div>
                    <div className="col-md-9 certification-badges">
                        {certifications.map(({ link, image, alt }, index) => (
                            <div className="col-sm-3" data-aos="slide-up" key={index}>
                                <a href={link}>
                                    <img src={image} alt={alt} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

Certifications.defaultProps = {
    title: "Certifications",
    certificationsLink: "certifications",
};

Certifications.propTypes = {
    title: PropTypes.string,
    certificationsLink: PropTypes.string,
};

export default Certifications;
