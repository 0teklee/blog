import { clsx } from "clsx";
import Link from "next/link";
import { HEADER_LFET_ITEMS, HEADER_RIGHT_ITEMS } from "./values";

const Header = () => (
  <header
    className={clsx(
      "fixed top-0 w-full p-8",
      "z-40",
      "md:w-screen",
      "mix-blend-difference invert",
    )}
  >
    <div className={clsx(" flex items-center justify-between")}>
      <div className={clsx("flex items-center justify-around gap-6")}>
        {HEADER_LFET_ITEMS.map((item, idx) => (
          <Link
            key={item.id}
            aria-label={item.item}
            className={clsx(
              "text-lg font-[Cormorant] font-bold",
              "hover:text-blue-500 hover:invert transition duration-150",
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
          "font-[Cormorant] font-bold",
          "hover:text-blue-500 hover:invert transition duration-150",
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
              "text-lg font-[Cormorant] font-bold",
              "hover:text-blue-500 hover:invert transition duration-150",
              idx === 1 && "hidden md:block",
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
