import { Icon } from '@iconify/react';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import award from "@iconify/icons-eva/award-outline"

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'courses',
    path: '/main/courses',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'about us',
    path: '/main/about',
    icon: getIcon(award)
  }
];

export default sidebarConfig;
