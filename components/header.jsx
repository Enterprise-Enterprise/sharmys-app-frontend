import Location from "@/components/location";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@radix-ui/react-separator";
import Cart from "./cart";
import Logo from "./ui/logo";

export function Header() {
  return (
    <NavigationMenu className="w-full max-w-full place-content-between border-b-2 px-4 py-2 sm:px-12">
      <div className="item-center flex w-full list-none flex-col justify-between sm:flex-row">
        <NavigationMenuItem className="flex flex-col items-center">
          <Logo />
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center justify-center">
          <Location />
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden items-center justify-center sm:flex">
          <Cart />
        </NavigationMenuItem>
      </div>
    </NavigationMenu>
  );
}
