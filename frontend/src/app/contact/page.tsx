'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="flex-1 container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2"><strong>Owner:</strong> REVANTH</p>
            <p className="mb-2"><strong>Phone:</strong> +91 9944978547</p>
            <p className="mb-2"><strong>Email:</strong> revanthcheemala08@gmail.com</p>
            <p className="mb-4"><strong>Address:</strong> Tirupati, Andhra Pradesh, India</p>
            <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.5!2d79.4167!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e4c!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tirupati Location"
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full p-2 border rounded h-32"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}