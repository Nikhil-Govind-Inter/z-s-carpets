"use client";

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
 
const footerData = {
  Copyright: "Copyright © Z & S Carpets Trading L.L.C. All Rights Reserved.",
  description: `<p>Premium carpets and flooring solutions for homes, offices and a spaces across UAE and the GCC region.</p>`,
  soocialLinks: [
    {
      label: "Facebook",
      icon: "facebook",
      link: "https://www.facebook.com/ZS-Carpets-Trading-LLC-100882441644096",
    },
    {
      label: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/zs_carpets_trading_llc/",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/z-s-carpets-trading-llc/",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/ZSCARPETS",
    },
  ],
};

export default function Footer() {
  return (
    <div className="w-full relative bg-[#023260] z-0 h-full text-white py-[24px] md:py-[32px] lg:py-[44px] xl:py-[55px] 2xl:py-[64px]">
      <Image
        src="/images/footer_bg.png"
        alt="footer bg"
        fill
        className="object-cover z-1"
      />
      <div className="container px-4 mx-auto z-0 text-white">
        <div className="flex md:flex-col justify-between ">

        <Link href={"/"} className="">
          <Image
            src={"/images/logo 3.svg"}
            alt="Logo"
            width={140}
            height={56}
            className="w-[126px] lg:w-[168px] xl:w-[210px] 2xl:w-[252px] block md:mb-[28px] mb-[20px] lg:mb-[36px] xl:mb-[44px] 2xl:mb-[52px]"
            />
        </Link>
        <div className="text-[14px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] w-[200px] md:w-[138px] lg:w-[180px] xl:w-[222px] 2xl:w-[264px] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
          {parse(footerData?.description)}
        </div>
            </div>

        <div className="grid grid-cols-4 gap-4"></div>
      </div>

      <div className="container relative z-2 px-4 mx-auto">
        <p>Copyright © Z & S Carpets Trading L.L.C. All Rights Reserved.</p>
        {footerData?.soocialLinks?.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}