import Link from "next/link";
import { PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { GitHubIcon } from "../icons/github-icon";
import LlamaIconText from "../icons/llama-icon-text";

const Footer = (): JSX.Element => (
  <div className="flex justify-between border-t border-gray-200 bg-white p-4">
    <div>
      <Link href="/" aria-label="Go to home page">
        <LlamaIconText
          width={125}
          height={30}
        />
      </Link>
    </div>

    <div className="text-center md:text-left mt-2 md:mt-4 px-4">
      ⚡ Powered by {" "}
      <Link href="https://github.com/moltin/js-sdk" passHref legacyBehavior>
         <a className="text-brand-primary font-bold hover:underline">Elastic Path JS SDK</a>
     </Link>
    </div>
    
    <div className="flex items-center gap-4">
      <Link
        href="https://github.com/elasticpath/d2c-reference-store"
        aria-label="Go to repository on github"
        className="flex items-center justify-center"
        passHref
      >
        <GitHubIcon className="w-5 h-5 hover:fill-brand-primary" />
      </Link>
      <Link
        href="https://www.elasticpath.com"
        aria-label="Go to Elasticpath home page"
        passHref
      >
        <InformationCircleIcon
          className="hover:fill-brand-primary"
          width={25}
          height={25}
        />
      </Link>
      <Link
        href="https://www.elasticpath.com/company/contact-us#contact-information"
        aria-label="Go to Elasticpath contact us page"
        passHref
      >
        <PhoneIcon
          className="hover:fill-brand-primary"
          width={25}
          height={25}
        />
      </Link>
    </div>
  </div>
);

export default Footer;