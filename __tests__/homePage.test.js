import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
    it('renders the heading and description correctly', () => {
        const { getByText } = render(<Home />);
        
        const heading = getByText('Discover & Share');
        const subHeading = getByText('AI-Powered Summerization');
        const description = getByText('Promptopia is an open-source AI prompting tool for modern world to discover, create and share your summerized paragraphs');
        
        expect(heading).toBeInTheDocument();
        expect(subHeading).toBeInTheDocument();
        expect(description).toBeInTheDocument();
      });
})