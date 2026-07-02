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

  // ✅ toast state
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

  // ✅ show message function
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
      const res = await axios.post(
        "http://localhost:5000/api/contact",
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
    <div id="Contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-teal-800">Touch</span>
          </h1>

          <p>
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
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
              className="w-full px-5 py-3 border border-zinc-500 rounded outline-none"
            />

            {/* Message */}
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              required
              className="w-full px-5 py-3 border border-zinc-500 rounded outline-none resize-none"
            ></textarea>

            {/* Button + RIGHT MESSAGE */}
            <div className="flex items-center gap-4 justify-center sm:justify-start">

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-8 py-3 bg-zinc-800 text-white cursor-pointer rounded-full hover:bg-teal-700 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaArrowRight />} 
              </button>

              {/* ✅ RIGHT SIDE MESSAGE */}
              {toast.show && (
                <div
                  className={`px-4 py-2 rounded-md text-white text-sm shadow-md transition-all duration-300
                  ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
                  `}
                >
                  {toast.message}
                </div>
              )}

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;