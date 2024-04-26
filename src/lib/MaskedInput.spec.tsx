
/**
 * @jest-environment jsdom
 */
import { cleanup, render   } from '@testing-library/react';
import MaskedInput from './MaskedInput';
import React from 'react';

describe('MaskedInput', () => {
  afterEach(async () => {
    await cleanup();
  });

  it('should render correctly', async () => {
    const { container } = render(
      <MaskedInput mask={'111.111.111.111'} value="192.16.1.5" />
    );

    const sut = container.querySelector('input');
    expect(sut).toBeTruthy();
  });

  test('should handle a masking workflow', () => {
    const { container } = render(<MaskedInput mask={'00/00'} value="123" />);

    const sut = container.querySelector('input')!;
    expect(sut).toBeTruthy();
    expect(sut.value).toBe('12/3_');
    expect(sut.placeholder).toBe('__/__');
  });
});
