'use client'

import React, { useRef, useState } from 'react'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface DropdownMenuAvatarProps {
  user: User
}

const DropdownMenuAvatar = ({ user }: DropdownMenuAvatarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsOpen(false)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  const handleAvatarClick = () => {
    router.push('/student')
  }

  const userInitials = user.email?.charAt(0).toUpperCase() || 'U'
  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleAvatarClick}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-semibold text-white transition-transform hover:scale-110"
        title={userName}
      >
        {userInitials}
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 z-50 mt-2 min-w-[200px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="text-sm font-semibold text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>

          <div className="py-1">
            <Link
              href="/student"
              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            >
              Student Portal
            </Link>
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            >
              Hồ sơ của tôi
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            >
              Cài đặt
            </Link>
          </div>

          <div className="border-t border-gray-100 py-1">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenuAvatar
