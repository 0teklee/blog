import Link from "next/link";
import { clsx } from "clsx";
import FooterScrollButton from "./module/FooterScrollButton";

const Footer = ({ fonts }: { fonts: string }) => {
  return (
    <footer
      className={clsx(
        "fixed bottom-0 w-full p-8 z-40",
        "mix-blend-difference invert dark:invert-0",
        "text-lg",
        fonts,
      )}
    >
      <div className={clsx("relative flex justify-between items-center")}>
        <Link
          href={"/gallery"}
          className={clsx(
            "absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-5",
            "hover:text-theme hover:font-bold",
            "transition-all duration-150",
          )}
        >
          𓃠
        </Link>
        <div className={clsx("relative")}>
          <Link
            href={"/info"}
            className={clsx(
              "mt-4 cursor-pointer font-normal",
              "hover:text-theme hover:font-bold",
              " transition-all duration-150",
            )}
          >
            contact
          </Link>
        </div>
        <FooterScrollButton
          className={clsx(
            "absolute cursor-pointer font-normal",
            "hover:text-theme hover:font-bold",
            "transition-all duration-150 top-1/2 left-1/2",
            "-translate-x-1/2 -translate-y-1/2",
          )}
        >
          top
        </FooterScrollButton>
        <button
          className={clsx(
            "cursor-pointer font-normal",
            "hover:text-theme hover:font-bold",
            "transition-all duration-150",
          )}
        >
          <Link href="/guestbook">guestbook</Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
