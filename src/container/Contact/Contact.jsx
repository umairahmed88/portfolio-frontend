import React, { useState } from "react";
import { images } from "../../constants/index.constants";

import { AppWrap, MotionWrap } from "../../wrapper/index.wrapper";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className='head-text'>Take a Coffe and Chat with me</h2>
			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt='email' />
					<a href='mailto:hello@mumair.com' className='p-text'>
						umairahmedawn@gmail.com
					</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.mobile} alt='mobile' />
					<a href='tel: +92 (333) 3549015' className='p-text'>
						+92(333)3549015
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className='app__footer-form app__flex'>
					<div className='app__flex'>
						<input
							className='p-text'
							type='text'
							placeholder='Your Name'
							name='name'
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text'
							type='email'
							placeholder='Your email'
							name='email'
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className='p-text'
							placeholder='Your Message'
							value={message}
							name='message'
							onChange={handleChangeInput}
						/>
					</div>
					<button type='button' className='p-text' onChange={handleSubmit}>
						{loading ? "Sending" : "Send Message"}
					</button>
				</div>
			) : (
				<div>
					<h3 className='head-text'>Thank you for getting in touch!</h3>
				</div>
			)}
			<div></div>
			<div>
				{/* WhatsApp icon */}
				<a
					href='https://wa.me/923333549015'
					className='whatsapp_float'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-whatsapp whatsapp-icon'></i>
				</a>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Contact, "app__footer"),
	"contact",
	"app__primarybg"
);
