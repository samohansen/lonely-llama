import MobileNavBar from "./navigation/MobileNavBar";
import NavBar from "./navigation/NavBar";
import Link from "next/link";
import CartMenu from "./cart/CartMenu";
import LlamaIconText from "../icons/llama-icon-text";
import { Suspense } from "react";
import SearchModal from "../search/SearchModal";
import SearchBoxAlgolia from "../search/SearchBoxAlgolia";


const Header = (): JSX.Element => {
  return (
    <div className="sticky z-40 border-b border-gray-200 bg-white px-4 py-1">
      {/* Render this on mobile */}
      <Suspense>
        <MobileNavBar />
      </Suspense>

      {/* Md screen and up */}
      <div className="hidden w-full flex justify-between items-center md:flex">
        <div className="">
          <Suspense>
            <div>
              <SearchModal />
            </div>
          </Suspense>
        </div>
        <div className="flex min-w-[4rem]">
          <Link href="/" aria-label="Go to home page">
            <LlamaIconText
              width={175}
              height={50}
            />
          </Link>
        </div>
        <div className="flex items-center self-center">
          <CartMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
