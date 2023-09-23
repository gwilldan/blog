import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

function Header({ title, width }) {
	return (
		<header className=" bg-blue-400 p-3 text-xl font-semibold flex justify-between items-center">
			<h1 className=" ">{title}</h1>
			<p className=" text-2xl">
				{width < 768 ? (
					<FaMobileAlt />
				) : width < 992 ? (
					<FaTabletAlt />
				) : (
					<FaLaptop />
				)}
			</p>
		</header>
	);
}

export default Header;
