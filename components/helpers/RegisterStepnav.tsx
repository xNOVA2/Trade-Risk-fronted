"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const RegisterStepnav = () => {
  const pathname = usePathname();
  const isInfoPage = pathname === "/register/corporate/product-info";
  const isContactPage = pathname === "/register/corporate/point-contact";
  const isCurrentBanking = pathname === "/register/corporate/current-banking";

  return (
    <header className="flex items-center justify-between border-b border-primaryCol py-4 md:px-10 px-4  bg-white">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="object-cover size-10"
        />
        <h1 className="font-normal text-2xl">
          <span className="font-semibold">Trade</span>Risk
        </h1>
      </div>
      {/* Nav */}
      <nav className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-2">
          {!isInfoPage && (
            <Check strokeWidth={2.5} className="text-primaryCol size-5" />
          )}
          <p
            className={`${
              isInfoPage ? "text-primaryCol" : "text-black"
            } font-medium`}
          >
            Product Info
          </p>
        </div>

        <div className="flex items-center gap-x-2">
          {!isContactPage && !isInfoPage && (
            <Check strokeWidth={2.5} className="text-primaryCol size-5" />
          )}
          <p
            className={`${
              isContactPage
                ? "text-primaryCol font-medium"
                : isInfoPage
                ? "text-para"
                : "text-black font-medium"
            }`}
          >
            Point of Contact
          </p>
        </div>

        <div className="flex items-center gap-x-2">
          <p
            className={`${isCurrentBanking ? "text-primaryCol font-medium" : "text-para"}`}
          >
            Current Banking
          </p>
        </div>
      </nav>
      {/* Extra space */}
      <div></div>
    </header>
  );
};
