import React, { useState } from "react";
import { Header, Nav, Footer, Content } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import api from "./api/post";
import { useEffect } from "react";

function App() {
	const [posts, setPost] = useState([]);
	const [search, setSearch] = useState("");
	const [searcResult, setSearchResult] = useState([]);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const [errors, setErrors] = useState();
	const [editTitle, setEditTitle] = useState("");
	const [editBody, setEditBody] = useState("");

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await api.get("/post");
				setPost(response.data);
			} catch (error) {
				//Not in the 200 response range
				if (error.response) {
					console.error(error.response);
					setErrors(error.response);
				} else {
					// no response at all
					console.error(error.message);
					setErrors(error.message);
				}
			}
		};

		fetchPost();
	}, []);

	return (
		<div
			style={{
				height: "100dvh",
			}}
			className=" flex flex-col">
			<Router>
				<Header title="React JS Blog" />
				<Nav
					search={search}
					setSearch={setSearch}
				/>
				<Content
					posts={posts.filter(
						(e) =>
							e.title.toUpperCase().includes(search.toUpperCase()) ||
							e.body.toUpperCase().includes(search.toUpperCase())
					)}
					setPost={setPost}
					postTitle={postTitle}
					setPostTitle={setPostTitle}
					postBody={postBody}
					setPostBody={setPostBody}
					searcResult={searcResult}
					setSearchResult={setSearchResult}
					errors={errors}
					setErrors={setErrors}
					setEditBody={setEditBody}
					editBody={editBody}
					setEditTitle={setEditTitle}
					editTitle={editTitle}
				/>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
