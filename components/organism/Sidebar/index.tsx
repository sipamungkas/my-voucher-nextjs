import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SidebarProps {
  activeMenu:
    | 'overview'
    | 'transactions'
    | 'messages'
    | 'card'
    | 'rewards'
    | 'settings'
    | 'logout';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem
            title='Overview'
            icon='ic-menu-overview'
            href='/member'
            active={activeMenu === 'overview'}
          />
          <MenuItem
            title='Transactions'
            icon='ic-menu-transactions'
            href='/member/transactions'
            active={activeMenu === 'transactions'}
          />
          <MenuItem
            title='Messages'
            icon='ic-menu-messages'
            href='/member'
            active={activeMenu === 'messages'}
          />
          <MenuItem
            title='Card'
            icon='ic-menu-card'
            href='/member'
            active={activeMenu === 'card'}
          />
          <MenuItem
            title='Rewards'
            icon='ic-menu-rewards'
            href='/member'
            active={activeMenu === 'rewards'}
          />
          <MenuItem
            title='Settings'
            icon='ic-menu-settings'
            href='/member/edit-profile'
            active={activeMenu === 'settings'}
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
