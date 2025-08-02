import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailInput from './EmailInput';
import { vi } from 'vitest';

describe('EmailInput', () => {
  it('shows succes message when valid email typed', async () =>{
    render(<EmailInput></EmailInput>);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'regulo.leonardi@gmail.com');

    expect(screen.getByText(/Email is valid/i)).toBeInTheDocument();

  });

  it('shows error message when invalid email typed', async () =>{
    render(<EmailInput></EmailInput>);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'regulo.leonardi');

    expect(screen.getByText(/Email is not valid/i)).toBeInTheDocument();

  });

  it('calls onChange only when valid', async () =>{
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<EmailInput onChange={handleChange}></EmailInput>);
    
    const input = screen.getByRole('textbox');

    await user.type(input, 'regulo.leonardi@gmail.com');

    expect(handleChange).toHaveBeenCalledWith('regulo.leonardi@gmail.com')

  });
})