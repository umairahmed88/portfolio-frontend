import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className='app__navigation'>
			{["home", "about", "testimonials", "work", "skills", "contact"].map(
				(item, index) => (
					// eslint-disable-next-line jsx-a11y/anchor-has-content
					<a
						key={item + index}
						className='app__navigation-dot'
						style={active === item ? { backgroundColor: "#313BAC" } : {}}
						href={`#${item}`}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
