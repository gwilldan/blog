import React, { useState, CSSProperties } from "react";
import post from "../api/post";
import { Feed } from "../components";

function Home({ posts, errors, isLoading, fetchError }) {
	return (
		<main className=" h-full overflow-auto no-scrollbar">
			{isLoading && (
				<p className="text-semibold text-xl m-3">Loading post...</p>
			)}
			{!isLoading && fetchError && (
				<p className="text-semibold text-xl text-red-500 m-3">{fetchError}</p>
			)}
			{!isLoading &&
				!fetchError &&
				(posts.length ? (
					<Feed posts={posts} />
				) : (
					<p className="text-semibold text-xl m-3">No Posts to display!</p>
				))}
		</main>
	);
}

export default Home;
