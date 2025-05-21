import React, { useState } from 'react';

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 md:!mt-15 mx-auto max-w-6xl px-4 !pb-10">
      {/* Form */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-5xl font-bold text-[#0C0C3C] !mb-2">
          Book an appointment for free require.
        </h2>
        <p className="text-gray-600 !mb-6">
          Whether you have a query about our renewable energy solutions, need
          assistance with a project, or simply want to share your thoughts.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 !mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Text here"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#6366F1] cursor-pointer !mt-4 text-white px-6 py-3 rounded-full hover:bg-[#3730A3] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="w-full lg:w-1/2">
        <iframe
          title="Google Map"
          className="w-full h-80 md:h-[30rem] rounded-xl"
          src="https://www.google.com/maps?q=52.3732,4.8928&z=14&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactFrom;
