import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
    it('Button should render', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })
})
