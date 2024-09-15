import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import sharmysLogo from 'public/sharmys-logo.png';
import githubLogo from 'public/images/github-mark-white.svg';
import { Button } from '@/components/ui/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const navItem = { linkText: 'Cart', href: '/cart' };

export function Header() {
    return (
        <NavigationMenu className="border-b-2 bg-yellow-300 flex w-full max-w-full px-6 sm:px-12">
            <NavigationMenuList>
                <NavigationMenuItem className="flex flex-col justify-start">
                    <Link href="/">
                        <Image className="w-24" src={sharmysLogo} alt="Sharmy's logo" />
                    </Link>
                    <span className="mx-auto">Sharmy&apos;s</span>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <div>Location data</div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={navItem.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {navItem.linkText}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
