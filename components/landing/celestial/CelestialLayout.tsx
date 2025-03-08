import React, { ReactNode } from "react";

const CelestialLayout = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <section className={"w-full space-y-2"}>
      <p className={"text-center font-bold"}>INDEX</p>
      {children}
    </section>
  );
};

export default CelestialLayout;
