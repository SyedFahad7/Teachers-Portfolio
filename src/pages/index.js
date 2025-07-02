import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/ashique.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Md Ashique Hussain | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Md Ashique Hussain, Frontend Developer and Graphic Designer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="Md Ashique Hussain"
                  className="h-auto w-100 rounded-full border-4 border-blue-400 shadow-lg"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi, I'm Md Ashique Hussain"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  Frontend Developer & Graphic Designer
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                I am a passionate Frontend developer and Graphic Designer. I create visually appealing, user-friendly websites and impactful designs. With a strong background in web development and design, I strive to deliver modern solutions and intuitive experiences. Explore my work, skills, and achievements below!
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Get To Know Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Projects
                </Link>
                <Link
                  href="/services/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-blue-600 p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-blue-600 hover:bg-transparent hover:text-blue-600 
            dark:bg-blue-600 dark:text-light dark:hover:border-blue-600 dark:hover:bg-dark dark:hover:text-blue-400
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </article>
    </>
  );
}
