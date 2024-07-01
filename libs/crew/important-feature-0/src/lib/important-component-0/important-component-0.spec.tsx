import { render } from '@testing-library/react';

import ImportantComponent0 from './important-component-0';

describe('ImportantComponent0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent0 />);
    expect(baseElement).toBeTruthy();
  });

  it('should contain the specified text', () => {
    const { baseElement } = render(<ImportantComponent0 />);
    expect(baseElement.textContent).toContain('I hope you are having a great day');
    });
});
