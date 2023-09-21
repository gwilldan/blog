import React from "react";

function NewPost({
	handleSubmit,
	postTitle,
	setPostTitle,
	postBody,
	setPostBody,
}) {
	return (
		<main className=" h-full p-2">
			<h1 className=" text-2xl font-semibold">New Post</h1>
			<form
				onSubmit={handleSubmit}
				className=" grid grid-cols-1">
				<label
					htmlFor="postTitle"
					className="mt-5">
					Title:
				</label>
				<input
					id="postTitle"
					type="text"
					required
					className="border border-black mb-5 h-10 px-2"
					value={postTitle}
					onChange={(e) => setPostTitle(e.target.value)}
				/>
				<label
					htmlFor="postBody"
					className="">
					Post:{" "}
				</label>
				<textarea
					id="postBody"
					className="border border-black mb-2 h-[100px]  p-2"
					required
					value={postBody}
					onChange={(e) => setPostBody(e.target.value)}
				/>

				<button
					type="submit"
					className=" border border-black bg-slate-100 my-5 p-2">
					Create Post
				</button>
			</form>
		</main>
	);
}

export default NewPost;
