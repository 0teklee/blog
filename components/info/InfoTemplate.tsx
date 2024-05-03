import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

const InfoTemplate = () => (
  <div className={clsx("max-w-md mx-auto")}>
    <section className={clsx("mt-12 pb-8")}>
      <div className={clsx("flex justify-center items-center mb-8")}>
        <Image
          className={"rounded-full"}
          src="https://res.cloudinary.com/dolziw8fv/image/upload/v1663058798/logo_ktizgo.jpg"
          width={300}
          height={300}
          alt="Teklog-Info"
        />
      </div>
      <div className={clsx("text-xl font-bold text-center mb-6")}>Contact</div>
      <div className={clsx("flex justify-between items-center mb-4")}>
        <p>Email</p>
        <p>leetekwoo@gmail.com</p>
      </div>
      <div
        className={clsx(
          "relative flex justify-between items-center mb-6 w-full",
        )}
      >
        <p>Github</p>
        <Link
          className={clsx("underline ")}
          href="https://www.github.com/0teklee"
        >
          @0teklee
        </Link>
      </div>
    </section>
    <section className={clsx("mt-7 pb-8")}>
      <div className={clsx("text-xl font-bold text-center mb-6")}>CV</div>
      <div className={clsx("mb-4")}>
        <Link
          className={clsx(
            "underline block",
            "hover:bg-blue-500 hover:text-white",
            "transition-colors duration-500 ease-in-out",
          )}
          href="https://https://0teklee.github.io/resume/index.html"
        >
          프론트 개발자 이택우 이력서
        </Link>
        <Link
          className={clsx(
            "underline block",
            "hover:bg-blue-500 hover:text-white",
            "transition-colors duration-500 ease-in-out",
          )}
          href="https://0teklee.github.io/resume/cv.html"
        >
          {`Link to LEE TEKWOO'S CV (KR)`}
        </Link>
      </div>
    </section>
    <section className={clsx("mt-7 pb-8")}>
      <div className={clsx("flex justify-center", "mb-4", "text-sm")}>
        <p>built with Next.js 14 App router, tailwindCSS, prisma and etc..</p>
      </div>
    </section>
  </div>
);

export default InfoTemplate;
