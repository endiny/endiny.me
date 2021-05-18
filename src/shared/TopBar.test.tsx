import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {TopBar} from './TopBar';
import {render, screen, fireEvent} from '@testing-library/react';

const links = [
  {text: 'Login', location: '#'},
  {text: 'Home', location: '/'},
  {text: 'Link', location: '/games'},
];

describe('TopBar', () => {
  it('Check if TopBar have all links', async () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    links.forEach((link) => {
      const linkDom = screen.getByText(link.text);
      expect(linkDom).toHaveAttribute('href', link.location);
    });
  });
});

describe('TopBar', () => {
  it('Should open the window when Login button pushed', async () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    window.open = jest.fn();
    const button = screen.getByText(links[0].text);
    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      expect.anything(),
      '_blank',
      'toolbars=yes,scrollbars=yes,width=500,height=500'
    );
  });
});

describe('TopBar', () => {
  it('Should show nickname and avatar when logged in', async () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );
  });
});
