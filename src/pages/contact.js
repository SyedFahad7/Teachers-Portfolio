import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Md Ashique Hussain</title>
        <meta name="description" content="Contact Md Ashique Hussain" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h1 className="mb-8 text-5xl font-bold text-center">Contact Me</h1>
          <div className="bg-white dark:bg-dark rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center mb-2"><span className="font-semibold mr-2">Name:</span> Md Ashique Hussain</div>
              <div className="flex items-center mb-2"><span className="font-semibold mr-2">Email:</span> <a href="mailto:ashique2u@gmail.com" className="text-blue-600 underline">ashique2u@gmail.com</a></div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Message Me</h2>
            {submitted ? (
              <div className="text-green-600 font-semibold text-lg">Thank you for contacting me. I will reach you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Name:</label>
                  <input type="text" id="name" name="name" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email:</label>
                  <input type="email" id="email" name="email" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="mobile" className="block font-medium mb-1">Mobile:</label>
                  <input type="tel" id="mobile" name="mobile" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message:</label>
                  <textarea id="message" name="message" rows={5} required className="w-full border rounded px-3 py-2" />
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
                  <button type="reset" className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
                </div>
              </form>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
