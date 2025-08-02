import { render, screen} from '@testing-library/react'
import KeywordFilter from "./KeywordFilter";
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('KeyboardInpit', ()  =>  {
  it('shows filtered results on input', async () => {
    render(<KeywordFilter label={'Search'} list={['Argentina', 'France', 'Spain']}/>);

    const user = userEvent.setup();
    const input = screen.getByLabelText('Search');

    await user.type(input, 'r');

    expect(screen.getByText(/argentina/i)).toBeInTheDocument();
    expect(screen.getByText(/france/i)).toBeInTheDocument();
  });

  it('calls on select when item is clicked', async () => {
    const handleSelection = vi.fn();

    render(<KeywordFilter label={'Search'} list={['Argentina', 'France', 'Spain']} onSelect={handleSelection}/>);

    const user = userEvent.setup();
    const input = screen.getByLabelText('Search');

    await user.type(input, 'Argentina');

    const option = screen.getByText(/argentina/i);

    await user.click(option);

    expect(handleSelection).toHaveBeenCalledWith('Argentina');
  })
});