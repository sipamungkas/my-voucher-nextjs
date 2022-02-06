import Image from 'next/image';
import cx from 'classnames';
import Link, { LinkProps } from 'next/link';

interface MenuItemProps {
  title: string;
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-transactions'
    | 'ic-menu-messages'
    | 'ic-menu-card'
    | 'ic-menu-rewards'
    | 'ic-menu-settings'
    | 'ic-menu-logout';
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps> & LinkProps) {
  const { title, icon, active, href } = props;
  const classItem = cx({ item: true, active, 'mb-30': true });
  return (
    <div className={classItem}>
      <div className='me-3'>
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className='item-title m-0'>
        <Link href={href}>
          <a className='text-lg text-decoration-none'>{title}</a>
        </Link>
      </p>
    </div>
  );
}
