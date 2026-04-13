'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ── Sub‑menu data for "Khóa học" ── */
const courseCategories = [
  {
    section: 'popular',
    items: [
      { href: '/courses?cat=web', label: 'Lập trình Web', icon: '🌐' },
      { href: '/courses?cat=mobile', label: 'Lập trình Mobile', icon: '📱' },
      { href: '/courses?cat=data', label: 'Khoa học dữ liệu', icon: '📊' },
    ],
  },
  {
    section: 'more',
    items: [
      { href: '/courses?cat=ai', label: 'Trí tuệ nhân tạo', icon: '🤖' },
      { href: '/courses?cat=design', label: 'Thiết kế UI/UX', icon: '🎨' },
      { href: '/courses?cat=devops', label: 'DevOps & Cloud', icon: '☁️' },
      { href: '/courses?cat=security', label: 'An ninh mạng', icon: '🔒' },
    ],
  },
];

/* ── Simple nav items (no dropdown) ── */
const simpleNavItems = [
  { href: '/', label: 'Trang chủ' },
  { href: '/instructors', label: 'Chứng chỉ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Liên hệ' },
];

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logoVIDE.png"
                alt="VIDE Logo"
                width={160}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Nav — shadcn: minimal, clean text links */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Trang chủ */}
            <Link
              href="/"
              className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100/80"
            >
              Trang chủ
            </Link>

            {/* ─── Khóa học — with dropdown ─── */}
            <div className="nav-dropdown-wrapper relative">
              <Link
                href="/courses"
                className="nav-dropdown-trigger relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100/80 flex items-center gap-1"
              >
                Khóa học
                {/* Chevron icon */}
                <svg
                  className="nav-dropdown-chevron w-3.5 h-3.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div className="nav-dropdown-menu absolute left-1/2 -translate-x-1/2 pt-2">
                <div className="z-50 min-w-[12rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md">
                  {courseCategories.map((section, sIdx) => (
                    <React.Fragment key={section.section}>
                      {sIdx > 0 && (
                        <div className="-mx-1 my-1 h-px bg-gray-100" />
                      )}
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                        >
                          <span className="mr-2 flex h-4 w-4 items-center justify-center text-base">{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}

                  {/* Footer link */}
                  <div className="-mx-1 my-1 h-px bg-gray-100" />
                  <Link
                    href="/courses"
                    className="relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm font-medium outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                  >
                    Xem tất cả khóa học
                    <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Remaining nav items */}
            {simpleNavItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart */}
            <button
              className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100"
              aria-label="Giỏ hàng"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Auth */}
            <button className="btn-ghost text-sm px-3 py-1.5 rounded-md">
              Đăng nhập
            </button>
            <button className="btn-primary text-sm px-4 py-1.5 rounded-md shadow-sm">
              Đăng ký
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
