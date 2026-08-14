// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeakToken title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PeakToken/i);
    expect(titleElement).toBeInTheDocument();
});
