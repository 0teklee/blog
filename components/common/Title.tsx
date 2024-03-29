import { clsx } from "clsx";

const Title = ({
  title,
  customStyle,
}: {
  title: string;
  customStyle?: string;
}) => {
  return (
    <h1
      className={clsx(
        "mt-8 transition-all duration-1000 font-sans whitespace-pre-wrap animate-intro",
        customStyle,
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
