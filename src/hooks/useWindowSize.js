import { useState, useEffect } from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		height: undefined,
		width: undefined,
	});

	useEffect(() => {
		const handleSize = () => {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};

		handleSize();

		window.addEventListener("resize", handleSize);

		const cleanUp = () => {
			window.removeEventListener("resize", handleSize);
			console.log("runs if a use effect dependency changes");
		};

		return cleanUp;
	}, []);

	return windowSize;
};

export default useWindowSize;
