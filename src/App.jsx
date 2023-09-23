import React, { useState, useContext } from "react";
import { Header, Nav, Footer, Content } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import useAxios from "./hooks/useAxios";
import { DataProvider } from "./context/DataContext";

function App() {
	const [posts, setPost] = useState([]);
	const [search, setSearch] = useState("");
	const [searcResult, setSearchResult] = useState([]);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const [errors, setErrors] = useState();
	const [editTitle, setEditTitle] = useState("");
	const [editBody, setEditBody] = useState("");
	const { data, fetchError, isLoading } = useAxios(
		"http://localhost:3000/post"
	);

	const { width } = useWindowSize();

	useEffect(() => {
		setPost(data);
	}, [data]);

	return (
		<div
			style={{
				height: "100dvh",
			}}
			className=" flex flex-col">
			<DataProvider>
				<Router>
					<Header
						title="React JS Blog"
						width={width}
					/>
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
						fetchError={fetchError}
						isLoading={isLoading}
					/>
					<Footer />
				</Router>
			</DataProvider>
		</div>
	);
}

export default App;
