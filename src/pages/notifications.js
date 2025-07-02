import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import { FaBell } from "react-icons/fa";

export default function Notifications() {
  return (
    <>
      <Head>
        <title>Notifications | Md Ashique Hussain</title>
        <meta name="description" content="Important notifications and announcements from Md Ashique Hussain" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Layout className="pt-16">
          <div className="flex flex-col items-center mb-8">
            <FaBell className="text-5xl text-blue-500 mb-2" />
            <h1 className="text-4xl font-bold text-center mb-2">Important Notifications</h1>
            <span className="text-lg text-blue-700 dark:text-blue-300 font-semibold">Latest Announcements</span>
          </div>
          <div className="grid gap-6 max-w-2xl mx-auto w-full">
            <div className="bg-white dark:bg-dark rounded-xl shadow-lg p-6 flex items-center justify-between hover:shadow-2xl transition border border-blue-100 dark:border-gray-700">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">June 12, 2023</div>
                <a href="Frontend_Dev_CV.pdf" className="text-blue-600 underline font-semibold" target="_blank">Latest Resume</a>
              </div>
              <Image src="/images/profile/new.gif" alt="New" width={32} height={20} />
            </div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-lg p-6 flex items-center justify-between hover:shadow-2xl transition border border-blue-100 dark:border-gray-700">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">June 11, 2023</div>
                <a href="#" className="text-blue-600 underline font-semibold" target="_blank">New Project Announcement</a>
              </div>
              <Image src="/images/profile/new.gif" alt="New" width={32} height={20} />
            </div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-lg p-6 flex items-center justify-between hover:shadow-2xl transition border border-blue-100 dark:border-gray-700">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">June 11, 2023</div>
                <a href="#" className="text-blue-600 underline font-semibold" target="_blank">Latest Research Findings</a>
              </div>
              <Image src="/images/profile/new.gif" alt="New" width={32} height={20} />
            </div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-lg p-6 flex items-center justify-between hover:shadow-2xl transition border border-blue-100 dark:border-gray-700">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">June 10, 2023</div>
                <a href="#" className="text-blue-600 underline font-semibold" target="_blank">Important News Update</a>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
} 