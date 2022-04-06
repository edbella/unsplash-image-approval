import { useEffect } from "react";
import useAuthenticationContext from "../context/Authentication";
import Body from "../reusables/Body";
import { H3Title, Paragraph } from "../reusables/Title";
import ApprovedImageList from "./components/ApprovedImageList";

const Home = () => {
	const { approvedImages } = useAuthenticationContext();

	useEffect(() => {
		document.title = "Home | Image Approval Application";
	}, []);

	return (
		<>
			<H3Title className="border-b border-b-stone-100 text-base p-3 bg-slate-100 sticky top-0 z-50 uppercase" primaryColor>
				Image Approval Application
			</H3Title>
			<Body className="space-y-4 h-auto min-h-full">
				<Paragraph className="uppercase text-xs font-medium">
					{`Approved Images (${approvedImages?.length})`}
				</Paragraph>
        <ApprovedImageList />
			</Body>
		</>
	);
};

export default Home;
