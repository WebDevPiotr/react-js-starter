import { render } from "@testing-library/react";
import App from '../src/App';

it('renders properly', () => {
  const { getByText, queryByText } = render(<App />);
  expect(getByText(`React js`)).toBeInTheDocument()
  expect(queryByText(`Test worng`)).not.toBeInTheDocument()
});
