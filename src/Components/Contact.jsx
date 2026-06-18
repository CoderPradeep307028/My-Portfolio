import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white via-gray-100 to-white py-20 px-6 md:px-[10vw]"
    >
      <h2 className="text-5xl font-bold text-center text-emerald-700 mb-16 tracking-wide">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 bg-white shadow-2xl rounded-3xl p-10 md:p-14 transition-transform hover:scale-[1.01] duration-300">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-emerald-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p className="text-base text-[14px]">pradeep2003kumar2003gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-emerald-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-base">+91 8058658515</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-emerald-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p className="text-base">Chandigarh, India</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-4">
            <FaGithub className="text-emerald-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">GitHub</p>
                <a
                  href="https://github.com/CoderPradeep307028"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  github.com/CoderPradeep307028
                </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLinkedin className="text-emerald-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/pradeep-kumar-742b60252"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  linkedin.com/in/pradeep-kumar-742b60252
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
