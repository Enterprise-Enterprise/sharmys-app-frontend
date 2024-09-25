import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import sharmysLogo from "@/public/sharmys-logo.png";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image className="w-24" src={sharmysLogo} alt="Sharmy's logo" />
      </Link>
      <span className="mx-auto">Sharmy&apos;s</span>
    </>
  );
}
