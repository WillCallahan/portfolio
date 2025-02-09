import PropTypes from 'prop-types';

const Footer = (props) => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<p className="copy">
							{props.description}
						</p>
					</div>
					<div className="col-md-4 text-right">
						{props.github ? <a href={props.github} target="_blank"><i className="fa fa-github"/></a> : ""}
					</div>
				</div>
			</div>
		</footer>
	);
}

Footer.defaultProps = {
	description: null,
	github: null
};

Footer.propTypes = {
	description: PropTypes.node.isRequired,
	github: PropTypes.string
};

export default Footer;