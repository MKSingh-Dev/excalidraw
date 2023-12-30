// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Icon, IconArticleFilledFilled, IconHome2 } from '@tabler/icons-react';

type MenuType = {
    href: string;
    text: string;
    icon: Icon;
    name?: string;
    path?: string;
    havePage: boolean;
};

export type HeaderMenuType = MenuType & {
    children?: Omit<MenuType, 'icon'>[];
};

const HEADER_MENUS: Array<HeaderMenuType> = [
    {
        href: '/',
        text: 'Home',
        icon: IconHome2,
        havePage: true,
    },
    {
        href: '/', // Don't leave href as blank string otherwise accordion will not work.
        text: 'Blogs',
        icon: IconArticleFilledFilled,
        havePage: false,
        children: [
            {
                href: '/blogs/web-development',
                text: 'Web Development',
                havePage: true,
            },
            {
                href: '/blogs/desktop-application',
                text: 'Desktop Application',
                havePage: true,
            },
            {
                href: '/blogs/identity-and-access',
                text: 'Identity & Access',
                havePage: true,
            },
        ],
    },
];

export const headerMenu = (orgId?: string) => {
    return HEADER_MENUS.map(menu => {
        return { ...menu, href: menu.href.replace('{{orgId}}', String(orgId)) };
    });
};
