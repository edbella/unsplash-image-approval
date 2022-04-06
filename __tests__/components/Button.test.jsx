import { render, screen } from "../../test-utils";
import Button from "../../src/reusables/Button";

const buttonContent = "Button";

describe("Button component", () => {
	it("should render a button with content in default style", () => {
		render(<Button>{buttonContent}</Button>);

		const buttonElement = screen.getByRole("button", { name: buttonContent });

		const computedStyles = window.getComputedStyle(buttonElement);

		// Expect button to be present
		expect(buttonElement).toBeInTheDocument();

		// Expect text color to be white
		expect(computedStyles.color).toBe("white");

		// Expect background color to be transparent
		expect(computedStyles.backgroundColor).toBe("transparent");
	});

	it("should render a button with content and primary style", () => {
		render(<Button primary>{buttonContent}</Button>);

		const buttonElement = screen.getByRole("button", { name: buttonContent });
		const computedStyles = window.getComputedStyle(buttonElement);

		// Expect button to be present
		expect(buttonElement).toBeInTheDocument();

		// Expect text color to be white
		expect(computedStyles.color).toBe("white");

		// Expect background color to be primary color
		expect(computedStyles.backgroundColor).toBe("rgb(67, 56, 202)");
	});

	it("should render a button with content and secondary style", () => {
		render(<Button secondary>{buttonContent}</Button>);

		const buttonElement = screen.getByRole("button", { name: buttonContent });
		const computedStyles = window.getComputedStyle(buttonElement);

		// Expect button to be present
		expect(buttonElement).toBeInTheDocument();

		// Expect text color to be white
		expect(computedStyles.color).toBe("white");

		// Expect background color to be secondary color
		expect(computedStyles.backgroundColor).toBe("rgb(71, 85, 105)");
	});
});
