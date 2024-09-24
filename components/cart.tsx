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
                            <OrderSummary className="px-4" />
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
                    <DrawerTitle>Order Summary</DrawerTitle>
                    <DrawerDescription>
                        <OrderSummary className="px-4" />
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function OrderSummary({ className }) {
    return (
        <>
            <div className={className}>order stuff</div>
        </>
    );
}