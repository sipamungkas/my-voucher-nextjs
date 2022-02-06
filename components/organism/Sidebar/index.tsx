import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

export default function Sidebar() {
  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem
            title='Overview'
            icon='ic-menu-overview'
            href='/member'
            active
          />
          <MenuItem
            title='Transactions'
            icon='ic-menu-transactions'
            href='/member/transactions'
          />
          <MenuItem title='Messages' icon='ic-menu-messages' href='/member' />
          <MenuItem title='Card' icon='ic-menu-card' href='/member' />
          <MenuItem title='Rewards' icon='ic-menu-rewards' href='/member' />
          <MenuItem
            title='Settings'
            icon='ic-menu-settings'
            href='/member/edit-profile'
          />
          <MenuItem
            title='Logout'
            icon='ic-menu-logout'
            href='/member/sign-in'
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
