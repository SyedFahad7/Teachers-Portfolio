import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { FaCalendarAlt } from "react-icons/fa";

export default function Workshops() {
  return (
    <>
      <Head>
        <title>Workshops & Conferences | Md Ashique Hussain</title>
        <meta name="description" content="Workshops and conferences attended by Md Ashique Hussain" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Layout className="pt-16">
          <div className="flex flex-col items-center mb-8">
            <FaCalendarAlt className="text-5xl text-green-600 mb-2" />
            <h1 className="text-4xl font-bold text-center mb-2">Workshops & Conferences Attended</h1>
            <span className="text-lg text-green-700 dark:text-green-300 font-semibold">Professional Development</span>
          </div>
          <div className="bg-white dark:bg-dark rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-green-100 dark:border-gray-700 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Sl No.</th>
                  <th className="border-b p-2">Name</th>
                  <th className="border-b p-2">Organization</th>
                  <th className="border-b p-2">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-gray-800">
                  <td className="p-2">1</td><td className="p-2">Workshop on Documentary Film Making</td><td className="p-2">Maulana Azad National Urdu University</td><td className="p-2">2023</td>
                </tr>
                <tr>
                  <td className="p-2">2</td><td className="p-2">ATAL FDP on Introduction to Quantum Computing</td><td className="p-2">Tripura University</td><td className="p-2">2022</td>
                </tr>
                <tr className="bg-green-50 dark:bg-gray-800">
                  <td className="p-2">3</td><td className="p-2">FDP on Machine Learning for Internet of Things</td><td className="p-2">Guru Jambheshwar University of Science and Technology</td><td className="p-2">2022</td>
                </tr>
                <tr>
                  <td className="p-2">4</td><td className="p-2">ATAL FDP on Data Science</td><td className="p-2">Maulana Azad National Urdu University</td><td className="p-2">2021</td>
                </tr>
                <tr className="bg-green-50 dark:bg-gray-800">
                  <td className="p-2">5</td><td className="p-2">National Workshop on IoT Using Arduino</td><td className="p-2">Mizoram University</td><td className="p-2">2018</td>
                </tr>
                <tr>
                  <td className="p-2">6</td><td className="p-2">National Conference on Strategies for Development of Higher Education in Northeast India</td><td className="p-2">Mizoram University</td><td className="p-2">2018</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Layout>
      </main>
    </>
  );
} 