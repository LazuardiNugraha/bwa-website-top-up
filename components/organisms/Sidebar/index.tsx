import Footer from './footer';
import MenuItem from './menuItem';
import Profile from './profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/member" />
          <MenuItem title="Transactions" icon="icon-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
          <MenuItem title="Messages" icon="icon-menu-message" href="/member" />
          <MenuItem title="Card" icon="icon-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="icon-menu-reward" href="/member" />
          <MenuItem title="Settings" icon="icon-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
          <MenuItem title="Logout" icon="icon-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
