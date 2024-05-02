"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CreateTabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-5 mb-2 border-b-2 border-borderCol">
      <div className="relative py-3">
        <Link href="/create-request" className="text-neutral-700 font-semibold">
          LC Confirmation
        </Link>
        {pathname === "/create-request" && (
          <div className="absolute bottom-0 h-1 w-full bg-primaryCol" />
        )}
      </div>
      <div className="relative py-3">
        <Link
          href="/create-request/discount"
          className="text-neutral-700 font-semibold"
        >
          LC Discounting
        </Link>
        {pathname === "/create-request/discount" && (
          <div className="absolute bottom-0 h-1 w-full bg-primaryCol" />
        )}
      </div>
      <div className="relative py-3">
        <Link
          href="/create-request/discount"
          className="text-neutral-700 font-semibold"
        >
          LC Confirmation Discounting
        </Link>
        {pathname === "/create-request/discount" && (
          <div className="absolute bottom-0 h-1 w-full bg-primaryCol" />
        )}
      </div>
      <div className="relative py-3">
        <Link
          href="/create-request/discount"
          className="text-neutral-700 font-semibold"
        >
          LC Issuance
        </Link>
        {pathname === "/create-request/discount" && (
          <div className="absolute bottom-0 h-1 w-full bg-primaryCol" />
        )}
      </div>
    </div>
  );
};
