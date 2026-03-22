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
            <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p className="mb-4"><strong>Address:</strong> 123 Pet Street, Pet City, PC 12345</p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p>Map Placeholder - Integrate Google Maps here</p>
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