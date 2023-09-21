import React from "react";

function Header({ title }) {
	return (
		<header className=" bg-blue-400 p-3 text-xl font-semibold">
			<h1 className=" ">{title}</h1>
		</header>
	);
}

export default Header;
