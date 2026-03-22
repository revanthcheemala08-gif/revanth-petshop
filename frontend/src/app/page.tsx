'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    { name: 'Pet Sales', href: '/category/sales', image: '/pet-sales.jpg' },
    { name: 'Pet Accessories', href: '/category/accessories', image: '/accessories.jpg' },
    { name: 'Pet Food', href: '/category/food', image: '/pet-food.jpg' },
    { name: 'Clinical Appointments', href: '/category/appointments', image: '/appointments.jpg' },
  ];

  return (
    <div className="flex-1">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Logo and Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg"
          >
            <img src="/logo.png" alt="Revanth Pet World" className="h-20 mb-4" />
            <h2 className="text-4xl font-bold mb-2">Revanth Pet World</h2>
            <p className="text-lg">Your trusted pet care partner</p>
          </motion.div>

          {/* Right Side: Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={category.href}>
                  <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded mb-2" />
                  <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
