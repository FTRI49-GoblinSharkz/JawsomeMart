import React from 'react'
import { render } from '@testing-library/react'


export function ExampleComponent({ value }) {
  return <div>{value}</div>
}

// In-Source Test
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest
  
    it('renders the correct value', () => {
      const value = 42
      const { getByText } = render(<ExampleComponent value={value} />)
      expect(getByText(value.toString())).toBeTruthy()
    })
}