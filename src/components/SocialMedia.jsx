import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<div>
				<FaFacebookF />
			</div>
			<div>
				<BsInstagram />
			</div>
		</div>
	);
};

export default SocialMedia;
