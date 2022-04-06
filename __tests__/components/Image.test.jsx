import { render, screen } from "../../test-utils";
import ImageViewer from "../../src/reusables/Image";

const testImageSrc =
	"https://images.unsplash.com/photo-1646419680123-51ee65084232?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTU0MjF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDkxODUyNDk\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200";

describe("ImageViewer component", () => {
	it("should render an image", () => {
		render(
			<ImageViewer src={testImageSrc} alt={testImageSrc.substring(0, 22)} />
		);
		const imageElement = screen.getByRole("img");

		expect(imageElement).toBeInTheDocument();
	});
});
