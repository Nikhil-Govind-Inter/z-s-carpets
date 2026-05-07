"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Download,
  Menu,
  Search,
  ShoppingBag,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";


const navLinks = [
  {
    label: "About Us",
    link: "/about"
  },
  {
    label: "Services",
    link: "/services"
  },
  {
    label: "Our Work",
    link: "/"
  },
  {
    label: "Resources",
    link: "/resources"
  },
  {
    label: "Blogs",
    link: "/blogs"
  },
  {
    label: "Download Center",
    link: "/download-center",
    icon: <Download />
  }
]




export default function Header() {
  return (
    <section className="overflow-hidden min-w-full h-[66px] lg:h-[88px] xl:h-[110px] 2xl:h-[132px] bg-gray-300 px-[25px]">
      <div className="container h-full flex items-start justify-between mx-auto w-full bg-white p-[10px_25px_13px_20px] xl:p-[12px_0px_13px_59px]">
        <div className="my-auto">
          <Image
            src="/images/logo 3.svg"
            alt="Logo"
            width={140}
            height={56}
            className="min-w-[140px]"
          />
        </div>

        <div className="w-[70%] flex lg:flex-col items-end justify-end ">
          <div className="w-[87%] flex items-start justify-start gap-4 py-1 xl:py-2 pr-[25px]">
            <div className="flex items-center gap-3 border-b-2 py-2 flex-1 min-w-0 h-full lg:h-[25px] xl:h-[30px] border-gray-300 text-gray-600">
              <Search size={15} className="w-4 h-4 text-gray-500 shrink-0" />
              <input
                type="text"
                className="outline-none w-full min-w-0 text-[10px] lg:text-[12px] xl:text-[14px]"
                placeholder="Search"
              />
            </div>
            <div className="gap-2 flex items-center">
              <Button className="text-black text-[12px] bg-white h-[25px] xl:h-[30px] border-black border">
                Get a Sample
              </Button>

              <Button className="text-black text-[12px] bg-white h-[25px] xl:h-[30px] border-black border">
                Request Quote
              </Button>

              <Button className="bg-[#8129901A] border border-[#812990] aspect-square h-[25px] xl:h-[30px] text-[#812990]">
                <ShoppingBag size={10} />
              </Button>

              <Button className="bg-[#0066B31A] border border-[#0066B3] h-[25px] xl:h-[30px] text-xs aspect-square w-[50px] text-[#0066B3]">
                <span className="text-[10px] lg:text-[12px] xl:text-[14px]">En</span>
                <ChevronDown className="text-black font-normal -ml-2 w-[5px]" strokeWidth={1} />
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex lg:h-[48px] xl:h-[56px] items-center justify-between bg-[#363636]/10 p-[0px_25px_5px_50px] [clip-path:polygon(3%_0,100%_0,100%_100%,0_100%)] w-full">
            <ul className="flex items-center w-full justify-between mr-[45px] text-[12px] xl:text-[14px]">
              <li>
                <Image src="/images/home.png" alt="home image" width={30} height={30} />
              </li>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                ))
              }

              <li className="flex items-center gap-2">
                <span>Download Center</span>
                <Download />
              </li>
            </ul>

            <Button className="text-white flex gap-2 w-[144px] text-[12px] xl:text-[14px] h-[30px]">
              <span className="">Categories</span>
              <Menu />
            </Button>
          </div>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left border-b pb-2">
                  <div className="my-auto">
                    <Image
                      src="/images/logo 3.svg"
                      alt="Logo"
                      width={100}
                      height={30}
                      className="min-w-[140px]"
                    />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-6">
                <nav className="flex flex-col gap-4 px-4">
                  <div className="flex items-center gap-3 py-1 hover:bg-gray-100 cursor-pointer transition-colors">
                    <Image src="/images/home.png" alt="home" width={24} height={24} />
                    <span className="font-medium">Home</span>
                  </div>

                  {
                    navLinks?.map((item, index) => (
                      <Link key={index} href={item?.link} className="py-1 hover:bg-gray-100 cursor-pointer transition-colors font-medium">{item?.label}</Link>

                    ))
                  }
                  <div className="flex items-center justify-start gap-2 py-1 hover:bg-gray-100 cursor-pointer transition-colors font-medium">
                    <span>Download Center</span>
                    <Download size={18} className="text-gray-500" />
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>




    </section>
  );
}


