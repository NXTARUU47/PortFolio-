import React, { useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showMessage = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "success",
      });
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://portfolio-backend-xxxx.onrender.com/api/contact",
        formData
      );

      showMessage(res.data.message || "Message sent successfully!", "success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      showMessage("Failed to send message!", "error");
    }

    setLoading(false);
  };

  return (
    <div id="Contact" className="py-12 md:py-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get In <span className="text-teal-800">Touch</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 max-w-md mx-auto">
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none text-sm sm:text-base"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              required
              className="w-full px-4 sm:px-5 py-3 border border-zinc-500 rounded outline-none text-sm sm:text-base"
            />

            {/* Message */}
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              required
              className="w-full px-4 sm:px-5 py-3 border border-zinc-500 rounded outline-none resize-none text-sm sm:text-base"
            ></textarea>

            {/* Submit Button */}
            <div className="w-full sm:w-auto">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-zinc-800 text-white cursor-pointer rounded-full hover:bg-teal-700 transition-all duration-300 disabled:opacity-60 w-full sm:w-auto text-sm sm:text-base"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaArrowRight />}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Floating Toast Notification - highly responsive positioning */}
      {toast.show && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
          <div
            className={`px-4 py-3 rounded-lg text-white text-sm shadow-xl text-center font-medium animate-bounce
              ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
            `}
          >
            {toast.message}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Contact;