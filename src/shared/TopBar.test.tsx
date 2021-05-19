import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {TopBar} from './TopBar';
import {render, screen, fireEvent} from '@testing-library/react';
// import {localStorageMock} from '../setupTests';
import {AuthStore} from './auth/auth-store';

const {currentUser, tokens} = {
  currentUser: {
    id: '12345',
    login: 'john',
    display_name: 'jonnie',
    type: '',
    broadcaster_type: '',
    description: '',
    profile_image_url: 'image.png',
    offline_image_url: '',
    view_count: 28,
    email: 'john@gmail.com',
    created_at: '2017-01-31T11:08:25.420124Z',
  },
  tokens: {
    access_token: 'token',
    expires_in: 14068,
    id_token: 'tokenid',
    refresh_token: 'refreshtoken',
    scope: ['openid', 'user_read'],
    token_type: 'bearer',
  },
};

// jest.mock('./auth/auth-store', function () {
//   return function () {
//     return {
//       AuthStore: function () {
//         this.currentUser = currentUser;
//         this.tokens = tokens;
//       },
//     };
//   };
// });

jest.spyOn(AuthStore.prototype, 'user');
const links = [
  {text: 'Login', location: '#'},
  {text: 'Home', location: '/'},
  {text: 'Link', location: '/games'},
];

describe('TopBar', () => {
  it('has all links', async () => {
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

  it.only('Should show nickname and avatar when logged in', async () => {
    // const credsJson = localStorage.getItem('creds');
    // const {user, tokens} = JSON.parse(credsJson);

    // expect(user.login).toEqual('john');

    const {container} = render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
    // expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);
  });
});
