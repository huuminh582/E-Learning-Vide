'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { User } from '@supabase/supabase-js'

import { supabase } from '@/lib/supabase'
import DropdownMenuAvatar from '@/components/ui/DropdownMenuAvatar'
import NavigationMenu from '@/components/ui/NavigationMenuMinimal'

const navigationMenuItems = [
  {
    label: 'Trang chủ',
    href: '/',
  },
  {
    label: 'Khóa học',
    href: '/courses',
    content: [
      {
        title: 'Lập trình',
        items: [
          {
            title: 'Lập trình Web',
            href: '/courses?cat=web',
            description: 'HTML, CSS, JavaScript, React, Next.js',
          },
          {
            title: 'Lập trình Mobile',
            href: '/courses?cat=mobile',
            description: 'React Native, Flutter, iOS, Android',
          },
          {
            title: 'DevOps & Cloud',
            href: '/courses?cat=devops',
            description: 'Docker, Kubernetes, AWS, Azure, GCP',
          },
        ],
      },
      {
        title: 'Khóa học khác',
        items: [
          {
            title: 'Khoa học dữ liệu',
            href: '/courses?cat=data',
            description: 'Python, Machine Learning, Data Analysis',
          },
          {
            title: 'Trí tuệ nhân tạo',
            href: '/courses?cat=ai',
            description: 'AI, Deep Learning, NLP, Computer Vision',
          },
          {
            title: 'Thiết kế UI/UX',
            href: '/courses?cat=design',
            description: 'Figma, Adobe XD, Design System',
          },
          {
            title: 'An ninh mạng',
            href: '/courses?cat=security',
            description: 'Cybersecurity, Ethical Hacking',
          },
        ],
      },
    ],
  },
  {
    label: 'Giảng viên',
    href: '/instructors',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Liên hệ',
    href: '/contact',
  },
]

const MainHeader = () => {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function bootstrapAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!isMounted) {
        return
      }

      setAuthUser(session?.user ?? null)
      setAuthReady(true)
    }

    void bootstrapAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthUser(session?.user ?? null)
      setAuthReady(true)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logoVIDE.png"
                alt="VIDE Logo"
                width={200}
                height={70}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            <NavigationMenu items={navigationMenuItems} />
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/cart"
              className="relative rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Gio hang"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>

            <div className="h-6 w-px bg-gray-200" />

            {authReady ? (
              authUser ? (
                <DropdownMenuAvatar user={authUser} />
              ) : (
                <>
                  <Link href="/login" className="btn-ghost rounded-md border border-gray-200 px-3 py-1.5 text-sm transition-colors hover:border-gray-300">
                    Đăng nhập
                  </Link>
                  <Link href="/register" className="btn-primary rounded-md px-4 py-1.5 text-sm shadow-sm">
                    Đăng ký
                  </Link>
                </>
              )
            ) : (
              <div className="h-8 w-24 animate-pulse rounded-md bg-gray-100" />
            )}
          </div>

          <div className="md:hidden">
            <button className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
