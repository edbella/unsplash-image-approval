import { render } from "../../test-utils";
import {
	H1Title,
	H2Title,
	H3Title,
	Paragraph,
} from "../../src/reusables/Title";

describe("H1 Title component", () => {
	it("should render an h1 HTML tag with content", () => {
		const content = "Hello h1";

		const { container } = render(<H1Title>{content}</H1Title>);
		const h1Tag = container.querySelector("h1");

		expect(h1Tag).toBeInTheDocument();
		expect(h1Tag.innerHTML).toBe(content);
	});

	it("should render an h1 HTML tag with the primary color", () => {
		const content = "Hello h1";

		const { container } = render(<H1Title primaryColor>{content}</H1Title>);
		const h1Tag = container.querySelector("h1");
		const computedStyles = window.getComputedStyle(h1Tag);

		expect(computedStyles.color).toBe("rgb(29, 78, 216)");
	});
});

describe("H2 Title component", () => {
	it("should render an h2 HTML tag with content", () => {
		const content = "Hello h2";

		const { container } = render(<H2Title>{content}</H2Title>);
		const h2Tag = container.querySelector("h2");

		expect(h2Tag).toBeInTheDocument();
		expect(h2Tag.innerHTML).toBe(content);
	});

	it("should render an h2 HTML tag with the primary color", () => {
		const content = "Hello h2";

		const { container } = render(<H2Title primaryColor>{content}</H2Title>);
		const h2Tag = container.querySelector("h2");
		const computedStyles = window.getComputedStyle(h2Tag);

		expect(computedStyles.color).toBe("rgb(29, 78, 216)");
	});
});

describe("H3 Title component", () => {
	it("should render an h3 HTML tag with content", () => {
		const content = "Hello h3";

		const { container } = render(<H3Title>{content}</H3Title>);
		const h3Tag = container.querySelector("h3");

		expect(h3Tag).toBeInTheDocument();
		expect(h3Tag.innerHTML).toBe(content);
	});

	it("should render an h3 HTML tag with the primary color", () => {
		const content = "Hello h3";

		const { container } = render(<H3Title primaryColor>{content}</H3Title>);
		const h3Tag = container.querySelector("h3");
		const computedStyles = window.getComputedStyle(h3Tag);

		expect(computedStyles.color).toBe("rgb(29, 78, 216)");
	});
});

describe("Paragraph component", () => {
	it("should render a p HTML tag with content", () => {
		const content = "Hello paragraph";

		const { container } = render(<Paragraph>{content}</Paragraph>);
		const pTag = container.querySelector("p");

		expect(pTag).toBeInTheDocument();
		expect(pTag.innerHTML).toBe(content);
	});

	it("should render an h3 HTML tag with the primary color", () => {
		const content = "Hello paragraph";

		const { container } = render(<Paragraph primaryColor>{content}</Paragraph>);
		const pTag = container.querySelector("p");
		const computedStyles = window.getComputedStyle(pTag);

		expect(computedStyles.color).toBe("rgb(29, 78, 216)");
	});
});
