import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-orange-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.keyPoints.map((point, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
            {point}
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate(`/services/${service.id}`)}
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Explore Now
      </button>
    </motion.div>
  );
};