import React from "react"

class FancyButton extends React.Component {
	render() {
		// Mask id and styling
          // need unique id's for multiple buttons
		const maskId = 'mask_1';
		const maskStyle = '#fancy-masked-element_' + maskId + ' { mask: url(#' + maskId + '); -webkit-mask: url(#' + maskId + ')}';

		const buttonStyle = {
			width: this.props.width,
			height: this.props.height
		};

		const fancyFrontStyle = {
			transform: 'rotateX(0deg) translateZ(' + this.props.height / 2 + 'px )'
		};

		const fancyBackStyle = {
			transform: 'rotateX(90deg) translateZ( ' + this.props.height / 2 + 'px )'
		};

		// SVG attributes
		const textTransform = 'matrix(1 0 0 1 ' + this.props.width / 2 + ' ' + this.props.height / 1.6 + ')';
		const viewBox = '0 0 ' + this.props.width + ' ' + this.props.height;

		return (
			<div className="fancy-button mb-5"
				style={buttonStyle}
				ref={(ref)=>this.FancyButton=ref}>
				<div className="fancy-flipper">
					<div className="fancy-front" style={fancyFrontStyle}>
						<svg
							height={this.props.height}
							width={this.props.width}
							viewBox={viewBox}>
							<defs>
								<mask id={maskId}>
									<rect width="100%" height="100%" fill="#FFFFFF"/>
									<text className="mask-text button-text" fill="#000000" transform={textTransform} fontFamily="'intro_regular'" fontSize={this.props.fontSize} width="100%" textAnchor="middle" letterSpacing="1">{this.props.buttonText}</text>
								</mask>
							</defs>
							<style>
								{maskStyle}
							</style>
							<rect id={'fancy-masked-element_' + maskId} fill={this.props.color} width="100%" height="100%"/>
						</svg>
					</div>
					<div className="fancy-back" style={fancyBackStyle}>
						<svg
							height={this.props.height}
							width={this.props.width}
							viewBox={viewBox}>
							<rect stroke={this.props.color}
								strokeWidth={this.props.borderWidth}
								fill="transparent"
								width="100%"
								height="100%"/>
							<text className="button-text" transform={textTransform} fill={this.props.color} fontFamily="'intro_regular'" fontSize={this.props.fontSize} textAnchor="middle" letterSpacing="1">{this.props.buttonText}</text>
						</svg>
					</div>
				</div>
			</div>
		);
	}
}

FancyButton.defaultProps = {
	color: '#00e5ff',
	width: 120,
	height: 30,
	fontSize: 17,
	borderWidth: 4,
     buttonText: 'Send email',
};

export default FancyButton