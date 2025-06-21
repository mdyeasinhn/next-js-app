'use client';

import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105 flex flex-col justify-between">
      <div>
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.productName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {product.productName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {product.category} • {product.brand}
          </p>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
            ${product.price}
          </p>
        </div>
      </div>
      <div className="p-4 pt-0 flex justify-between gap-2">
        <button className="w-1/2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition ">
          See Details
        </button>
        <button className="w-1/2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
