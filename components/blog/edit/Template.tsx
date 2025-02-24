import { FC, PropsWithChildren } from "react";

export const EditLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full p-0">{children}</div>
  );
};
