import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Running Test for ReactLibraryBoilerPlate Input', () => {
    test('Check placeholder in Input', () => {
        render(<Input placeholder="Hello ReactLibraryBoilerPlate" />);
        expect(
            screen.getByPlaceholderText('Hello ReactLibraryBoilerPlate'),
        ).toHaveAttribute('placeholder', 'Hello ReactLibraryBoilerPlate');
    });

    test('renders the Input component', async () => {
        render(<Input placeholder="ReactLibraryBoilerPlate" />);
        const input = screen.getByPlaceholderText(
            'ReactLibraryBoilerPlate',
        ) as HTMLInputElement;
        await userEvent.type(input, 'Hello world!');
        expect(input.value).toBe('Hello world!');
    });
});
