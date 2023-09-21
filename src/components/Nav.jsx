import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ search, setSearch }) {
	return (
		<nav className=" flex items-center overflow-hidden bg-slate-900">
			<form
				className="w-[70%] 1 mx-2 my-4"
				onSubmit={(e) => e.preventDefault()}>
				<label
					htmlFor="search"
					className=" hidden">
					Search Post
				</label>
				<input
					className=" p-1 w-full"
					id="search"
					type="text"
					placeholder="Search Posts"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>

			<ul className=" flex items-center justify-between">
				<li className=" ">
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isPending
								? "bg-red-300 text-white text-w px-3 py-6"
								: isActive
								? "bg-blue-600 text-white text-w px-3 py-6"
								: " bg-slate-900 text-white text-w px-3 py-6"
						}>
						Home
					</NavLink>
				</li>
				<li className=" ">
					<NavLink
						to="/post"
						className={({ isActive, isPending }) =>
							isPending
								? "bg-red-300 text-white text-w px-3 py-6"
								: isActive
								? "bg-blue-600 text-white text-w px-3 py-6"
								: " bg-slate-900 text-white text-w px-3 py-6"
						}>
						Post
					</NavLink>
				</li>
				<li className=" ">
					<NavLink
						to="/about"
						className={({ isActive, isPending }) =>
							isPending
								? "bg-red-300 text-white text-w px-3 py-6"
								: isActive
								? "bg-blue-600 text-white text-w px-3 py-6"
								: " bg-slate-900 text-white text-w px-3 py-6"
						}>
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
