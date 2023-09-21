import React from "react";
import { useParams, Link } from "react-router-dom";

function PostPage({ posts, handleDelete, editPost }) {
	const { id } = useParams();
	const post = posts.find((post) => post.id == id);

	return (
		<main className=" h-full p-2">
			<article>
				{post ? (
					<>
						<h1 className=" text-xl font-semibold">{post.title}</h1>
						<p className=" py-2">{post.datetime}</p>
						<p>{post.body}</p>
						<button
							onClick={() => editPost(post.id)}
							className=" px-3 py-2 mt-4 bg-red-500 text-white rounded-md">
							Edit Post
						</button>
						<button
							onClick={() => handleDelete(post.id)}
							className=" px-3 py-2 mt-4 bg-red-500 text-white rounded-md ml-4">
							Delete Post
						</button>
					</>
				) : (
					<>
						<h1 className=" text-2xl font-bold text-red-500">
							No Post to Display
						</h1>
						<Link
							className=" underline "
							to="/">
							Go to Homepage
						</Link>
					</>
				)}
			</article>
		</main>
	);
}

export default PostPage;
