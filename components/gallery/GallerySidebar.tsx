import { clsx } from "clsx";
import Link from "next/link";
import getGalleryCategoryList from "pages/api/getGalleryCategoryList";
import { cache } from "react";

const getGalleryCategoryListCache = cache(getGalleryCategoryList);

const GallerySidebar = async () => {
  const categories = await getGalleryCategoryListCache();

  return (
    <aside
      className={clsx(
        "flex-shrink",
        "lg:fixed lg:top-auto lg:left-0  ",
        "bg-white",
        "lg:pl-8",
        "",
      )}
    >
      <div className="flex flex-col items-start justify-center">
        <div className="w-full">
          <div className="mb-2 text-lg font-sans cursor-default">
            List of works
          </div>
        </div>
        {categories &&
          categories.length > 0 &&
          categories.map((item, i) => (
            <div
              className="flex items-start justify-between w-full"
              key={`category_${i}`}
            >
              <Link
                className="unset-button mb-2 text-black font-sans text-sm hover:text-primary hover:underline"
                href={`/gallery?category=${item.name}`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        <div className="flex items-start justify-between w-full">
          <Link
            className="unset-button mb-2 text-black font-sans text-sm hover:text-primary hover:underline"
            href={`/gallery?category=~2022`}
          >
            ~ 2022
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default GallerySidebar;
