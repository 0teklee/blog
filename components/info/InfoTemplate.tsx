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
        <p>mail@leetekwoo.com</p>
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
      <h3 className="text-lg font-semibold mb-4">Websites</h3>
      <ul className="space-y-4">
        <li>
          <Link
            className={clsx("underline ")}
            href="https://portfolio.leetekwoo.com"
            target="_blank"
          >
            portfolio.leetekwoo.com
          </Link>
          <p>경력 및 사이드 프로젝트를 나타내는 포트폴리오 웹사이트입니다.</p>
        </li>
        <li>
          <Link
            className={clsx("underline ")}
            href="https://patterns.leetekwoo.com"
            target="_blank"
          >
            patterns.leetekwoo.com
          </Link>
          <p>
            알고리즘, UI/UX 등 패턴을 모은 웹사이트입니다. 런타임 환경으로
            컴포넌트를 실행하는 등 실험적인 기능을 포함하고 있습니다.
          </p>
        </li>
        <li>
          <Link
            className={clsx("underline ")}
            href="https://art.leetekwoo.com"
            target="_blank"
          >
            art.leetekwoo.com
          </Link>
          <p>제 개인 사진 작업을 공유하는 웹사이트입니다.</p>
        </li>
      </ul>
    </section>
    {/* <section className={clsx("mt-7 pb-8")}>
      <div className={clsx("text-xl font-bold text-center mb-6")}>CV</div>
      <div className={clsx("mb-4")}>
        <Link
          className={clsx(
            "underline block",
            "hover:bg-theme hover:text-white",
            "transition-colors duration-500 ease-in-out",
          )}
          href="https://resume.leetekwoo.com"
          target={"_blank"}
        >
          프론트 개발자 이택우 이력서
        </Link>
        <Link
          className={clsx(
            "underline block",
            "hover:bg-theme hover:text-white",
            "transition-colors duration-500 ease-in-out",
          )}
          href="https://0teklee.github.io/resume/cv.html"
        >
          {`Link to LEE TEKWOO'S CV (KR)`}
        </Link>
      </div>
    </section> */}
    <section className={clsx("mt-7 pb-8")}>
      <div className={clsx("flex justify-center", "mb-4", "text-sm")}>
        <p>built with Next.js 15 App router, tailwindCSS, Supabase and etc..</p>
      </div>
      <div
        className={clsx("flex flex-col justify-start gap-2", "mb-4", "text-sm")}
      >
        <p>
          현재는 DevOps(DevSecOps), WebGL, Cybersecurity 등 더 넓은 범위의
          기술에 관심이 있습니다.
        </p>
        <p>Currently interested in DevSecOps, WebGL, Cybersecurity and more</p>
      </div>
    </section>
  </div>
);

export default InfoTemplate;
