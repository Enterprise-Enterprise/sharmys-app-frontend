import Location from '@/components/location';

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
import { Separator } from '@radix-ui/react-separator';
import Cart from './cart';
import Logo from './ui/logo';

export function Header() {
    return (
        <NavigationMenu className="border-b-2 w-full max-w-full px-4 sm:px-12 py-2 place-content-between">
            <div className="list-none flex flex-col sm:flex-row w-full justify-between item-center">
                <NavigationMenuItem className="flex flex-col items-center">
                    <Logo />
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center justify-center">
                    <Location />
                </NavigationMenuItem>
                <NavigationMenuItem className=" hidden sm:flex items-center justify-center">
                    <Cart />
                </NavigationMenuItem>
            </div>
        </NavigationMenu>
    );
}
