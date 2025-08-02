import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreditCardInput from './CreditCardInput'

describe('CreditCardInput - async validation', () => {
  
  it('shows validating and the valid credit card if valid', async () => {
    render(<CreditCardInput />)

    const input = screen.getByLabelText(/credit card number/i)
    await userEvent.type(input, '1234567890123456')

    expect(screen.getByText(/validating/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/valid credit card/i)).toBeInTheDocument()
    })
  })

  it('show invalid credit card if the number ends in 0', async () => {
    render(<CreditCardInput />)

    const input = screen.getByLabelText(/credit card number/i)
    await userEvent.type(input, '1234567890123450')

    expect(screen.getByText(/validating/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/invalid credit card/i)).toBeInTheDocument()
    })
  })

  test('format correctly when typing a number', async () => {
    render(<CreditCardInput />);
    const input = screen.getByLabelText(/credit card number/i);

    await userEvent.type(input, '1234567890123456');

    expect(input).toHaveValue('1234 5678 9012 3456');

   
    await waitFor(() => {
      expect(screen.getByText(/valid credit card/i)).toBeInTheDocument();
    });
  });
})
