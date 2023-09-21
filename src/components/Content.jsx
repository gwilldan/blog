import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Home from "../Pages/Home";
import NewPost from "../Pages/NewPost";
import PostPage from "../Pages/PostPage";
import About from "../Pages/About";
import Missing from "./Missing";
import Edit from "./Edit";
import { format } from "date-fns";
import api from "../api/post";

const Content = ({
	posts,
	setPost,
	id,
	postTitle,
	setPostTitle,
	postBody,
	setPostBody,
	errors,
	editTitle,
	setEditTitle,
	editBody,
	setEditBody,
}) => {
	const Navigate = useNavigate();
	const [editId, setEditId] = useState();

	const handleDelete = async (id) => {
		const filtPost = posts.filter((post) => post.id != id);
		try {
			await api.delete("/post/" + id);
			setPost(filtPost);
		} catch (error) {
			// response within 200
			if (error.response) {
				console.log(error.response);
			} else {
				console.log(err.message);
			}
		}
		Navigate("/");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = posts.length ? (posts.length !== 1 ? posts.length + 1 : 2) : 1;
		const datetime = format(new Date(), "MMMM dd, yyyy pp");
		const newPost = { id: id, title: postTitle, datetime, body: postBody };
		try {
			const response = await api.post("/post", newPost);
			const newPostArr = [response.data, ...posts];
			setPost(newPostArr);
			setPostTitle("");
			setPostBody("");
		} catch (error) {
			// not within 200 server stat
			if (error.response) {
				console.error(error.response);
			} else {
				console.log(error.message);
			}
		}

		Navigate("/");
	};

	const editPost = (id) => {
		posts.map((i) => {
			i.id == id &&
				(setEditTitle(i.title), setEditBody(i.body), setEditId(i.id));
		});

		Navigate("/edit/" + id);
	};

	const handleEdit = async (e) => {
		e.preventDefault();
		console.log(editId);
		const date = format(new Date(), "MMMM, dd, yyyy, pp");
		const editedPost = {
			id: editId,
			title: editTitle,
			datetime: date,
			body: editBody,
		};
		const newPost = posts.filter((post) => post.id !== editId);
		try {
			const response = await api.put("/post/" + editId, editedPost);

			setPost([editedPost, ...newPost]);
		} catch (error) {}
		Navigate("/");
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Home
						posts={posts}
						errors={errors}
					/>
				}
			/>
			<Route
				path="/post/:id"
				element={
					<PostPage
						posts={posts}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						id={id}
						editPost={editPost}
					/>
				}
			/>
			<Route
				path="/post"
				element={
					<NewPost
						posts={posts}
						setPost={setPost}
						handleSubmit={handleSubmit}
						postTitle={postTitle}
						setPostTitle={setPostTitle}
						postBody={postBody}
						setPostBody={setPostBody}
					/>
				}
			/>

			<Route
				path="/edit/:id"
				element={
					<Edit
						posts={posts}
						setPost={setPost}
						handleEdit={handleEdit}
						editTitle={editTitle}
						setEditTitle={setEditTitle}
						editBody={editBody}
						setEditBody={setEditBody}
						editId={editId}
						setEditId={setEditId}
					/>
				}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="*"
				element={<Missing />}
			/>
		</Routes>
	);
};

export default Content;
