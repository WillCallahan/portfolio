import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<footer id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p className="copy">
								{this.props.description}
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}

}

Footer.defaultProps = {
	description: null
};

Footer.propTypes = {
	description: PropTypes.node.isRequired
};

export default Footer;