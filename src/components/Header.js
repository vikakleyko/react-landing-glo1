/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Header = () => (
    <header>
		<div className="wrapper">
			<div className="header">
				<a href="#"><div className="header-logo"></div></a>
				<a href="tel:888" className="header-phone"></a>
				<div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
			</div>
		</div>
	</header>
);

export default Header;