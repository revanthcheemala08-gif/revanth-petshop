'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex-1 container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">About Revanth Pet World</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=400&fit=crop" alt="About Us" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div>
            <p className="text-lg mb-4">
              At Revanth Pet World, we are passionate about providing the best care for your beloved pets. 
              Founded by Revanth, our mission is to offer a wide range of products and services to ensure 
              your pets live happy and healthy lives.
            </p>
            <p className="text-lg">
              From premium pet food to accessories and clinical appointments, we have everything your pet needs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}