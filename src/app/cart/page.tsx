"use client";

import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CartItemSection from './sections/CartItemSection';
import OrderSummary from './sections/OrderSummary';

interface CartItem {
  id: string;
  courseId: string;
  title: string;
  instructor: string;
  thumbnail: string | null;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  level: string;
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      courseId: 'course-1',
      title: 'Lập trình React từ A-Z - Full Stack Development',
      instructor: 'Nguyễn Văn A',
      thumbnail: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fc/c1b8dfbac740999b6256aca490de43/Python-Image.jpg?auto=compress&dpr=2&fit=crop&w=164&h=109",
      price: 599000,
      originalPrice: 1299000,
      discount: 54,
      category: 'Lập trình',
      level: 'Trung cấp',
    },
    {
      id: '2',
      courseId: 'course-2',
      title: 'Machine Learning với Python cho người mới bắt đầu',
      instructor: 'Trần Thị B',
      thumbnail: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/3c/77927732934dc0a10a44bd3306833d/1200x1200px_1001823008.jpg?auto=compress&dpr=2&fit=crop&w=164&h=109",
      price: 799000,
      originalPrice: 1599000,
      discount: 50,
      category: 'Data Science',
      level: 'Cơ bản',
    },
    {
      id: '3',
      courseId: 'course-3',
      title: 'UI/UX Design Masterclass - Figma & Adobe XD',
      instructor: 'Lê Văn C',
      thumbnail: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/91/6067aeac8d46c4934084979dd1857c/200672_Course-Image.jpg?auto=compress&dpr=2&fit=crop&w=164&h=109",
      price: 499000,
      originalPrice: 999000,
      discount: 50,
      category: 'Thiết kế',
      level: 'Nâng cao',
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set(cartItems.map(item => item.id)));

  const toggleSelect = (id: string) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const selectedItemsData = cartItems.filter(item => selectedItems.has(item.id));
  const subtotal = selectedItemsData.reduce((sum, item) => sum + item.price, 0);
  const totalDiscount = selectedItemsData.reduce((sum, item) => sum + (item.originalPrice - item.price), 0);
  const total = subtotal;

  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="border-b border-gray-100">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
            <h1 className="text-2xl font-semibold text-gray-900">Giỏ hàng</h1>
            <p className="text-sm text-gray-500 mt-1">{cartItems.length} khóa học trong giỏ hàng</p>
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <CartItemSection
                cartItems={cartItems}
                selectedItems={selectedItems}
                onToggleSelect={toggleSelect}
                onToggleSelectAll={toggleSelectAll}
                onRemoveItem={removeItem}
              />
            </div>

            {/* Order Summary */}
            <div className="lg:w-80">
              <OrderSummary
                subtotal={subtotal}
                totalDiscount={totalDiscount}
                total={total}
                selectedCount={selectedItems.size}
                cartCount={cartItems.length}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
