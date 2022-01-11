import { render, screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

describe("PageNotFound", () => {
    test("render page not found",()=>{
        render(<PageNotFound />);

        const pagenotfound = screen.queryByText('Page Not Found');
        expect(pagenotfound).toBeInTheDocument();
    })
 
});
