import { render as libraryRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../test-utils";
import Home from "../../src/views/Home";
import { AuthenticationContext } from "../../src/context/Authentication";
import unsplashMock from "../../__mocks__/unsplash";

describe("Home View", () => {
	it("should show the add button on initialization", () => {
		render(<Home />);
		const homeTitle = screen.getByText(/Image Approval Application/i);
		const addButton = screen.getByRole("button");

		// Expect the title of the application to be found
		expect(homeTitle).toBeInTheDocument();

		// Expect the add button to be in the document
		expect(addButton).toBeInTheDocument();
	});

	it("should render a list of images matching an exact number", async () => {
		const { container } = libraryRender(
			<AuthenticationContext.Provider
				value={{ approvedImages: unsplashMock.slice(0, 6) }}
			>
				<Home />
			</AuthenticationContext.Provider>
		);
		const numberOfImages = screen.getByText("Approved Images (6)");
		const addButton = screen.queryByTitle("Add new image");
		const imageSlides = container.getElementsByClassName("flickity-slider")[0].children;

		// Expect the add button to be missing
		expect(addButton).toBeNull();

		// Expect the number of images to be 6
		expect(numberOfImages).toBeInTheDocument();

		// expect the number of image slides to be 6
		expect(imageSlides).toHaveLength(6);
	});

	// Increase time out specifier to allow for image loading
	jest.setTimeout(10000);
	it("should render an image with prompts to accept or reject", async () => {
		libraryRender(
			<AuthenticationContext.Provider
				value={{ approvedImages: unsplashMock.slice(0, 6) }}
			>
				<Home />
			</AuthenticationContext.Provider>
		);

		// Wait for image decider to be shown
		await waitFor(() => screen.findByTitle("Accept Image"), { timeout: 10000 });

		const acceptImage = screen.getByTitle("Accept Image");
		const rejectImage = screen.getByTitle("Reject Image");
		const image = screen.getByRole("presentation");

		// Expect the image to be shown
		expect(image).toBeInTheDocument();

		// Expect the accept button to be shown
		expect(acceptImage).toBeInTheDocument();

		// Expect the reject button to be shown
		expect(rejectImage).toBeInTheDocument();
	});

	it("should increase the number of images when image is accepted", async () => {
		// Initial list
		const initialList = unsplashMock.slice(0, 6);

		// Update image collection
		const updateImageCollection = (image) => {
			initialList.push(image);
		};

		const { container } = libraryRender(
			<AuthenticationContext.Provider
				value={{ approvedImages: initialList, updateImageCollection }}
			>
				<Home />
			</AuthenticationContext.Provider>
		);

		// Wait for image decider to be shown
		await waitFor(() => screen.findByTitle("Accept Image"), { timeout: 10000 });

    // Click accept button
		const acceptImage = screen.getByTitle("Accept Image");

    // Simulate click on accept image
		userEvent.click(acceptImage);

		const numberOfImages = screen.getByText(
			`Approved Images (${initialList.length})`
		);

    // Get the number of images displayed
		const imageSlides = container.getElementsByClassName("flickity-slider")[0].children;

		// Expect the number of images to be 6
		expect(numberOfImages).toBeInTheDocument();

		// Expect the accept button to be shown
		expect(acceptImage).toBeInTheDocument();

		// expect the number of image slides to be 6
		expect(imageSlides).toHaveLength(initialList.length);
	});
});
