'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    { name: 'Pet Sales', href: '/category/sales', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop' },
    { name: 'Pet Accessories', href: '/category/accessories', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop' },
    { name: 'Pet Food', href: '/category/food', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop' },
    { name: 'Clinical Appointments', href: '/category/appointments', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
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
            <img src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=100&h=100&fit=crop&crop=center" alt="Revanth Pet World" className="h-20 mb-4 rounded-full" />
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
