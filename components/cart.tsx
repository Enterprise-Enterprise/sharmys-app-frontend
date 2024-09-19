'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { ShoppingCart } from 'lucide-react';
import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Label } from './ui/label';
import { Input } from './ui/input';
export default function Cart() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <ShoppingCart />
                    </NavigationMenuLink>
                </DialogTrigger>
                <DialogContent
                    className="sm:max-w-[425px] right-0 translate-x-0 left-auto h-screen animate-from-left
                 data-[state=open]:slide-in-from-right-full data-[state=open]:slide-in-from-top-1/2 data-[state=open]:!zoom-in-100
                 data-[state=closed]:slide-out-to-right-full data-[state=closed]:slide-out-to-top-1/2 data-[state=closed]:!zoom-out-100
                 "
                >
                    <DialogHeader>
                        <DialogTitle>Order Summary</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
    return (
        <form className={cn('grid items-start gap-4', className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" defaultValue="shadcn@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@shadcn" />
            </div>
            <Button type="submit">Save changes</Button>
        </form>
    );
}

// export default function Cart() {
//     return (
//         <>
//             <div className="flex rounded-lg px-4 py-2">
//                 <Dialog>
//                     <DialogTrigger asChild>
//                     </DialogTrigger>
//                 </Dialog>
//             </div>
//         </>
//     );
// }
