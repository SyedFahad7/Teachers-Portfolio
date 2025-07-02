import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from "react";
import { FaFileDownload, FaFlask } from "react-icons/fa";

export default function Research() {
  const [showAbstract, setShowAbstract] = useState(false);
  return (
    <>
      <Head>
        <title>Research | Md Ashique Hussain</title>
        <meta name="description" content="Research work by Md Ashique Hussain" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Layout className="pt-16">
          <div className="flex flex-col items-center mb-8">
            <FaFlask className="text-5xl text-blue-600 mb-2" />
            <h1 className="text-4xl font-bold text-center mb-2">Research</h1>
            <span className="text-lg text-blue-700 dark:text-blue-300 font-semibold">Latest Research Project</span>
          </div>
          <div className="bg-white dark:bg-dark rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-blue-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
              Hospital Readmission Prediction for Diabetes Patients using Machine Learning
            </h2>
            <div className="flex flex-row gap-3 mb-4">
              <button
                onClick={() => setShowAbstract((v) => !v)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {showAbstract ? "Hide Abstract" : "Show Abstract"}
              </button>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition font-semibold">
                <FaFileDownload /> Download Paper
              </a>
            </div>
            {showAbstract && (
              <div className="mb-4 text-gray-700 dark:text-gray-200">
                <b>Abstract:</b> Readmission of patients to the hospital has become a major problem in healthcare, with studies suggesting that readmissions are associated with poor patient outcomes, higher costs, and lower quality of treatment. To measure hospital quality, it is often appropriate to use emergency readmission frequency, since a significant part of such readmissions can be avoided if the initial treatment provided for patients have been adequate. This means that the substantial number of readmissions can be avoided. The purpose of this study is to develop a model that can accurately forecast whether a diabetic patient discharged from the hospital will be readmitted within 30 days. In this research, we utilized five distinct machine learning algorithms: Decision Tree (DT), Random Forest (RF), Support Vector Machine (SVM), AdaBoost, and XGBoost. Among those algorithms that predicted hospital readmissions for diabetes patients, SVM achieved the highest accuracy of 98.75%. The results of the study have helped the healthcare providers to improve outcomes and reduce costs, machine learning algorithms can be an effective tool for predicting hospital readmissions.
                <div className="mt-2"><b>Keywords:</b> Hospital readmission; Diabetes; Prediction; Random forest; Support vector machine; Decision tree; Ensemble learning</div>
              </div>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
} 