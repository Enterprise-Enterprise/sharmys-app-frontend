import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Logo from './ui/logo';

const openToday: boolean = true;
const openingHours: string = '8am - 5pm';
const locationLink: string = 'url';
const phoneNumber: string = '+1 (473) 443-8658';

export default function Location(prop) {
    return (
        <>
            <div className="bg-slate-400 max-sm:hidden  h-10 space-x-4 flex rounded-lg px-4 py-2 text-white ">
                <section>
                    {openToday ? 'Open' : 'Closed'} <span>{openingHours}</span>
                </section>
                <Separator orientation="vertical" />
                <Link href={locationLink}>Location</Link>
                <Separator orientation="vertical" />
                <section>{phoneNumber}</section>
            </div>
            <div className="bg-slate-400 sm:hidden flex-col flex rounded-lg px-2 py-2 text-white ">
                <div className="flex flex-col items-center">
                    <Logo />
                </div>
                <Separator />
                <div className="py-2 flex justify-between">
                    <section>
                        {openToday ? 'Open' : 'Closed'} <span>{openingHours}</span>
                    </section>

                    <section>{phoneNumber}</section>
                </div>
            </div>
        </>
    );
}
