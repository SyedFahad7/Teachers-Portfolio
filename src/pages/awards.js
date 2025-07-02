import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { FaTrophy } from "react-icons/fa";

export default function Awards() {
  return (
    <>
      <Head>
        <title>Awards & Achievements | Md Ashique Hussain</title>
        <meta name="description" content="Awards and achievements of Md Ashique Hussain" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Layout className="pt-16">
          <div className="flex flex-col items-center mb-8">
            <FaTrophy className="text-5xl text-yellow-500 mb-2" />
            <h1 className="text-4xl font-bold text-center mb-2">Awards & Achievements</h1>
            <span className="text-lg text-yellow-700 dark:text-yellow-300 font-semibold">Recognitions & Honors</span>
          </div>
          <div className="bg-white dark:bg-dark rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-yellow-100 dark:border-gray-700 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Sl No.</th>
                  <th className="border-b p-2">Award / Achievement</th>
                  <th className="border-b p-2">Position/Prize</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-yellow-50 dark:bg-gray-800">
                  <td className="p-2">1</td><td className="p-2">Bharat Scouts and Guides</td><td className="p-2">---</td>
                </tr>
                <tr>
                  <td className="p-2">2</td><td className="p-2">Photography Exhibition</td><td className="p-2">2nd Prize</td>
                </tr>
                <tr className="bg-yellow-50 dark:bg-gray-800">
                  <td className="p-2">3</td><td className="p-2">Paper Presentation</td><td className="p-2">2nd Prize</td>
                </tr>
                <tr>
                  <td className="p-2">4</td><td className="p-2">Photoshop</td><td className="p-2">2nd Prize</td>
                </tr>
                <tr className="bg-yellow-50 dark:bg-gray-800">
                  <td className="p-2">5</td><td className="p-2">Cyber Jaagrookta Diwas Quiz</td><td className="p-2">1st Position</td>
                </tr>
                <tr>
                  <td className="p-2">6</td><td className="p-2">FDP on Data Science</td><td className="p-2">---</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Layout>
      </main>
    </>
  );
} 