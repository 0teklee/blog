import { clsx } from "clsx";
import Link from "next/link";

const headerLeftItems = [
  { id: 0, item: "info", path: "/info" },
  { id: 1, item: "gallery", path: "/gallery" },
];

const headerRightItems = [
  { id: 0, item: "archive", path: "/archive" },
  { id: 1, item: "blog", path: "/blog?page=1" },
];

const Header = () => {
  return (
    <header
      className={clsx(
        "fixed top-0 w-full p-8",
        "z-40",
        "md:w-screen",
        "mix-blend-difference invert",
      )}
    >
      <div className={clsx(" flex items-center justify-between")}>
        <div className={clsx("flex items-center justify-around gap-2")}>
          {headerLeftItems.map((item, idx) => (
            <Link
              key={item.id}
              className={clsx(
                "all-unset cursor-pointer text-lg",
                "font-[Cormorant] font-bold",
                "hover:text-blue-500 hover:invert transition duration-150",
                idx === 0 && "tablet:hidden",
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
        <div className={clsx("flex items-center justify-around gap-2")}>
          {headerRightItems.map((item, idx) => (
            <Link
              key={item.id}
              className={clsx(
                "text-lg",
                "font-[Cormorant] font-bold",
                "hover:text-blue-500 hover:invert transition duration-150",
                idx === 1 && "tablet:hidden",
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
};

export default Header;
