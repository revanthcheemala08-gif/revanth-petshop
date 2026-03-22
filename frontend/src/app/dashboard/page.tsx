'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface Order {
  _id: string;
  products: { product: { name: string }; quantity: number }[];
  total: number;
  status: string;
}

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    const fetchData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);

        const ordersResponse = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex-1 container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard, {user.name}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
            <p><strong>Address:</strong> {user.address || 'Not provided'}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
            {orders.length === 0 ? (
              <p>No orders yet.</p>
            ) : (
              <ul className="space-y-2">
                {orders.map((order) => (
                  <li key={order._id} className="bg-white p-4 rounded shadow">
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <p><strong>Total:</strong> ${order.total}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Products:</strong></p>
                    <ul className="ml-4">
                      {order.products.map((item, index) => (
                        <li key={index}>{item.product.name} x {item.quantity}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}