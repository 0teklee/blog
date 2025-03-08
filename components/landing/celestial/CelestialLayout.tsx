import React, { ReactNode } from "react";
import Link from "next/link";

const CelestialLayout = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <section className={"w-full space-y-5"}>
      <p className={"text-center font-bold"}>INDEX</p>
      {children}
      <div className={`text-center mt-12`}>
        <Link
          className={"font-semibold underline hover:text-theme"}
          href={`/blog`}
        >
          Posts
        </Link>
      </div>
    </section>
  );
};

export default CelestialLayout;
