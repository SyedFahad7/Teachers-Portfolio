import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { FaCode, FaPaintBrush, FaMobileAlt, FaHtml5, FaCss3Alt, FaJs, FaGlobe, FaTachometerAlt, FaIdBadge, FaCertificate, FaRegAddressCard, FaRegEnvelope, FaRegFileImage, FaRegFileAlt, FaRegImages, FaRegClone, FaRegObjectGroup, FaRegNewspaper, FaRegCreditCard, FaRegCalendarAlt, FaRegFile, FaRegEdit, FaRegListAlt, FaRegBookmark, FaRegUserCircle, FaRegAddressBook, FaRegChartBar, FaRegWindowMaximize, FaRegClone as FaWebGrid } from "react-icons/fa";

const frontendServices = [
  { icon: <FaMobileAlt className="text-blue-500 text-3xl" />, title: "Responsive Web Design" },
  { icon: <FaHtml5 className="text-orange-500 text-3xl" />, title: "HTML/CSS Development" },
  { icon: <FaJs className="text-yellow-400 text-3xl" />, title: "JavaScript Functionality" },
  { icon: <FaGlobe className="text-green-500 text-3xl" />, title: "Cross-Browser Compatibility" },
  { icon: <FaTachometerAlt className="text-purple-500 text-3xl" />, title: "Performance Optimization" },
];

const graphicServices = [
  { icon: <FaPaintBrush className="text-pink-500 text-3xl" />, title: "Logo Design" },
  { icon: <FaRegAddressCard className="text-blue-400 text-3xl" />, title: "Brand Design" },
  { icon: <FaRegFileImage className="text-yellow-500 text-3xl" />, title: "Poster Design" },
  { icon: <FaCertificate className="text-green-500 text-3xl" />, title: "Certificate Design" },
  { icon: <FaRegFileAlt className="text-purple-500 text-3xl" />, title: "OMR Sheet Design" },
  { icon: <FaIdBadge className="text-blue-600 text-3xl" />, title: "ID Card Design" },
  { icon: <FaRegEnvelope className="text-pink-400 text-3xl" />, title: "Invitation Card Design" },
  { icon: <FaRegCreditCard className="text-indigo-500 text-3xl" />, title: "Visiting Card Design" },
  { icon: <FaRegListAlt className="text-green-400 text-3xl" />, title: "Menu Card Design" },
  { icon: <FaRegImages className="text-blue-500 text-3xl" />, title: "Social Media Design" },
  { icon: <FaRegFile className="text-yellow-600 text-3xl" />, title: "Letterhead Design" },
  { icon: <FaRegClone className="text-purple-400 text-3xl" />, title: "Brochure Design" },
  { icon: <FaRegNewspaper className="text-pink-600 text-3xl" />, title: "Print Design" },
  { icon: <FaWebGrid className="text-blue-400 text-3xl" />, title: "Web Graphics" },
  { icon: <FaRegEdit className="text-green-600 text-3xl" />, title: "UI/UX Design" },
];

function ServiceCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark rounded-xl shadow-md p-6 m-2 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition min-h-[160px]">
      {icon}
      <span className="mt-4 text-lg font-semibold text-center text-gray-800 dark:text-gray-100">{title}</span>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Md Ashique Hussain</title>
        <meta name="description" content="Services offered by Md Ashique Hussain" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Layout className="pt-16">
          <h1 className="mb-8 text-5xl font-bold text-center">My Services</h1>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-blue-700 flex items-center gap-2"><FaCode className="text-blue-500" /> Frontend Developer Services</h2>
            <div className="grid grid-cols-5 sm:grid-cols-2 gap-6">
              {frontendServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-pink-700 flex items-center gap-2"><FaPaintBrush className="text-pink-500" /> Graphic Designing Services</h2>
            <div className="grid grid-cols-5 sm:grid-cols-2 gap-6">
              {graphicServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
} 