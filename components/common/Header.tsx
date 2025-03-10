import { clsx } from "clsx";
import Link from "next/link";
import { HEADER_LFET_ITEMS, HEADER_RIGHT_ITEMS } from "./values";

const Header = ({ fonts }: { fonts: string }) => (
  <header
    className={clsx(
      "fixed top-0 ",
      "z-40",
      "w-screen",
      "mix-blend-difference invert dark:invert-0",
      "font-bold",
      fonts,
    )}
  >
    <div
      className={clsx(
        " flex items-center justify-between px-4 tablet:px-12 lg:px-20 py-8",
      )}
    >
      <div className={clsx("flex items-center justify-around gap-6")}>
        {HEADER_LFET_ITEMS.map((item, idx) => (
          <Link
            key={item.id}
            aria-label={item.item}
            className={clsx(
              "text-lg  font-bold",
              "hover:text-theme hover:invert transition duration-700",
              idx === 0 && "hidden md:block",
            )}
            href={item.path}
          >
            {item.item}
          </Link>
        ))}
      </div>
      <Link
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40",
          "font-bold",
          "hover:text-theme transition-all duration-700",
          "text-6xl",
        )}
        href="/"
      >
        teklog
      </Link>
      <div className={clsx("flex items-center justify-around gap-6")}>
        {HEADER_RIGHT_ITEMS.map((item, idx) => (
          <Link
            key={item.id}
            aria-label={item.item}
            className={clsx(
              "text-lg  font-bold",
              "hover:text-theme hover:invert transition duration-700",
              idx === 0 && "hidden md:block",
            )}
            href={item.path}
          >
            {item.item}
          </Link>
        ))}
      </div>
    </div>
  </header>
);

export default Header;
