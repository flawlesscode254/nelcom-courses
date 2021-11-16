import { Icon } from '@iconify/react';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'courses',
    path: '/main/courses',
    icon: getIcon(shoppingBagFill)
  }
];

export default sidebarConfig;
