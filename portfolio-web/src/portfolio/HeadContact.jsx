import PropTypes from "prop-types";
import {flow, intersection, filter, size, toPairs, map, nth} from "lodash/fp";

const contactProperties = ["email", "phone", "address"];

const getWidth = (props) => {
    const propsCount = flow(
        toPairs,
        filter(v => !!v[1]),
        map(nth(0)),
        intersection(contactProperties),
        size
    )(props);
    return 12 / (propsCount > 0 ? propsCount : 1);
};

const HeadContact = ({ email, phone, address }) => {
    const width = getWidth({ email, phone, address });

    return (
        <section id="profile-contact">
            <div className="container">
                <div className="row">
                    {email && (
                        <div className={`col-sm-${width} wow bounceInLeft`}>
                            <div className="profile-item">
                                <i className="fa fa-envelope-o" />
                                <h5>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </h5>
                            </div>
                        </div>
                    )}
                    {phone && (
                        <div className={`col-sm-${width} wow bounceInUp`}>
                            <div className="profile-item">
                                <i className="fa fa-phone" />
                                <h5>
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </h5>
                            </div>
                        </div>
                    )}
                    {address && (
                        <div className={`col-sm-${width} wow bounceInRight`}>
                            <div className="profile-item">
                                <i className="fa fa-map-marker" />
                                <h5>{address}</h5>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

HeadContact.defaultProps = {
    email: "callahanwilliam@callahanwilliam.com",
    phone: null,
    address: "Bethel, CT",
};

HeadContact.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
};

export default HeadContact;
