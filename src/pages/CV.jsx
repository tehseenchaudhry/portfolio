import React, { useState } from "react";
import { FileText } from "lucide-react";

const CV = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="cv" className="px-4 sm:px-6 lg:px-18 mt-20 ">
      <div className="max-w-7xl mx-auto">

        {/* Resume Toggle Button */}
        <div className="mt-8 flex flex-col gap-6" data-aos="fade-up" data-aos-duration="1000">
          <button
            onClick={() => setShowResume(!showResume)}
            className="inline-flex items-center gap-2 mx-auto px-8 py-3 rounded-full bg-violet-600/80 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/30"
          >
            <FileText className="w-5 h-5" />
            {showResume ? "Hide Resume" : "Show Resume"}
          </button>

          {/* PDF Viewer */}
          {showResume && (
            <div className="border border-violet-500 rounded-xl overflow-hidden h-[460px] mt-4">
              <iframe
                src="/TEHSEEN FATIMA Frontend.pdf"
                title="Resume"
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CV;