"use client";

import Link from "next/link";
import { UserProfile } from "../helpers/UserProfile";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const role = "";
  return (
    <header className="relative 2xl:px-20 px-10 flex items-center justify-between gap-x-2 ">
      <div className="flex items-center gap-x-2 py-4">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="object-cover size-8"
        />
        <Link href="/" className="font-normal text-2xl">
          <span className="font-semibold">Trade</span>Risk
        </Link>
      </div>
      <nav className="flex items-center gap-x-20">
        {role === "bank" ? (
          <>
            <div className="relative py-6">
              <Link
                href="/dashboard"
                className={`${
                  pathname === "/dashboard"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                Dashboard
              </Link>
              {pathname === "/dashboard" && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>

            <div className="relative py-6">
              <Link
                href="/"
                className={`${
                  pathname === "/risk-assessment"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                Risk Assessment
              </Link>
              {pathname === "/risk-assessment" && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>

            <div className="relative py-6">
              <Link
                href="/my-bids"
                className={`${
                  pathname === "/my-bids"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                My Bids
              </Link>
              {pathname === "/my-bids" && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>

            <div className="relative py-6">
              <Link
                href="/risk-participation"
                className={`${
                  pathname === "/risk-participation"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                Risk Participation Requests
              </Link>
              {pathname === "/risk-participation" && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="relative py-6">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                My Requests
              </Link>
              {pathname === "/" && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>
            <div className="relative py-6">
              <Link
                href="/risk-assessment"
                className={`${
                  pathname === "/risk-assessment"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                Risk Assessment
              </Link>
              {pathname === "/risk-assessment" && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>
            <div className="relative py-6">
              <Link
                href="/create-request"
                className={`${
                  pathname === "/create-request"
                    ? "text-primaryCol"
                    : "hover:text-primaryCol transition-colors duration-150"
                }  font-medium`}
              >
                Create a Request
              </Link>
              {pathname.includes("/create-request") && (
                <div className="absolute top-0 h-1.5 rounded-b-full w-full bg-primaryCol" />
              )}
            </div>
          </>
        )}
      </nav>
      <div>
        <UserProfile />
      </div>
    </header>
  );
};
