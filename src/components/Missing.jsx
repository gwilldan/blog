import React from "react";
import { Link } from "react-router-dom";

function Missing() {
	return (
		<main className=" h-screen grid place-items-center">
			<div className=" text-center">
				<h1 className=" text-2xl font-bold text-red-500">OOPS! WRONG LINK!</h1>
				<Link
					to="/"
					className=" underline my-4">
					Go to Home
				</Link>
			</div>
		</main>
	);
}

export default Missing;
