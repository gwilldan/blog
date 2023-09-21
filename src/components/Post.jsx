import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
	return (
		<article className="p-2 border-b border-black ">
			<Link to={`/post/${post.id}`}>
				<h2 className=" text-lg font-bold">{post.title}</h2>
				<p className="">{post.datetime}</p>
			</Link>
			<p className=" mt-4">
				{post.body.length <= 35 ? post.body : post.body.slice(0, 35) + " ..."}
			</p>
		</article>
	);
}

export default Post;
