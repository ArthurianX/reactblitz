import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test for ReactLibraryBoilerPlate Button', () => {
    test('Check Button Disabled', () => {
        render(<Button text="Button ReactLibraryBoilerPlate" disabled />);
        expect(
            screen.getByRole('button', {
                name: 'Button ReactLibraryBoilerPlate',
            }),
        ).toBeDisabled();
    });
});
