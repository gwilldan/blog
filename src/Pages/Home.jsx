import React, { useState, CSSProperties } from "react";
import { Feed } from "../components";

function Home({ posts, errors }) {
	return (
		<main className=" h-full overflow-auto no-scrollbar">
			{posts.length ? (
				<Feed posts={posts} />
			) : (
				<p className=" text-2xl font-semibold m-3 text-red-500">
					{errors ? errors : "No Post to display"}
				</p>
			)}
		</main>
	);
}

export default Home;
