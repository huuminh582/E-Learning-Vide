'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Palette,
  Shield,
  ChevronDown,
} from 'lucide-react'

interface ListItemProps {
  title: string
  href: string
  description: string
  icon?: React.ReactNode
}

interface NavigationMenuSection {
  title: string
  description?: string
  items: ListItemProps[]
}

interface NavigationMenuProps {
  items: {
    label: string
    href?: string
    content?: NavigationMenuSection[]
  }[]
  className?: string
}

// Icon mapping for courses
const getIconForTitle = (title: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Lập trình Web': <Code2 className="w-4 h-4" />,
    'Lập trình Mobile': <Smartphone className="w-4 h-4" />,
    'DevOps & Cloud': <Cloud className="w-4 h-4" />,
    'Khoa học dữ liệu': <Database className="w-4 h-4" />,
    'Trí tuệ nhân tạo': <Zap className="w-4 h-4" />,
    'Thiết kế UI/UX': <Palette className="w-4 h-4" />,
    'An ninh mạng': <Shield className="w-4 h-4" />,
  }
  return iconMap[title]
}

const getItemStats = (item: NavigationMenuProps['items'][number]) => {
  const totalSections = item.content?.length ?? 0
  const totalLinks = item.content?.reduce((count, section) => count + section.items.length, 0) ?? 0

  return { totalSections, totalLinks }
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  ListItemProps & { className?: string }
>(({ title, href, description, icon, className }, ref) => {
  const defaultIcon = getIconForTitle(title)
  return (
    <Link
      href={href}
      ref={ref}
      className={cn(
        'group block rounded-xl border border-transparent bg-white p-3.5 no-underline outline-none transition-all duration-200 hover:border-primary/10 hover:bg-primary/5 hover:shadow-sm focus:bg-primary/5 focus:shadow-sm',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 text-primary transition-colors duration-200 group-hover:border-accent/20 group-hover:text-accent">
          {icon || defaultIcon}
        </div>
        <div className="space-y-1">
          <div className="text-sm font-semibold leading-none text-gray-900 transition-colors duration-200 group-hover:text-primary">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
})

ListItem.displayName = 'ListItem'

const NavigationMenu = ({ items, className }: NavigationMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openMenu = (label: string) => {
    clearCloseTimeout()
    setHoveredItem(label)
  }

  const closeMenu = () => {
    clearCloseTimeout()
    setHoveredItem(null)
  }

  const scheduleCloseMenu = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      setHoveredItem(null)
    }, 180)
  }

  useEffect(() => {
    return () => {
      clearCloseTimeout()
    }
  }, [])

  return (
    <nav className={cn('relative', className)} onKeyDown={(event) => event.key === 'Escape' && closeMenu()}>
      <ul className="hidden md:flex items-center gap-1.5">
        {items.map((item, idx) => {
          const itemStats = getItemStats(item)

          return (
            <li
              key={idx}
              className={cn('relative', item.content && 'pb-3 -mb-3')}
              onMouseEnter={() => item.content && openMenu(item.label)}
              onMouseLeave={() => item.content && scheduleCloseMenu()}
              onFocus={() => item.content && openMenu(item.label)}
              onBlur={(event) => {
                if (!item.content) {
                  return
                }

                if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  return
                }

                scheduleCloseMenu()
              }}
            >
              <div className="flex items-center rounded-xl border border-transparent bg-white/60 p-1 transition-all duration-200 hover:border-gray-200/80 hover:bg-white/90 hover:shadow-sm">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'relative flex h-9 items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100/80 hover:text-gray-900',
                      !item.content && 'hover:text-primary',
                      item.content && item.content.length > 0 && 'rounded-r-none pr-2'
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={cn(
                      'relative flex h-9 items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100/80 hover:text-gray-900',
                      item.content && item.content.length > 0 && 'rounded-r-none pr-2'
                    )}
                    onClick={() => item.content && openMenu(item.label)}
                  >
                    {item.label}
                  </button>
                )}

                {item.content && item.content.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Mở menu ${item.label}`}
                    aria-expanded={hoveredItem === item.label}
                    aria-haspopup="true"
                    className={cn(
                      'flex h-9 items-center rounded-lg rounded-l-none border-l border-gray-200/80 px-2.5 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100/80 hover:text-gray-900',
                      hoveredItem === item.label && 'bg-primary/5 text-primary'
                    )}
                    onClick={() => {
                      if (hoveredItem === item.label) {
                        closeMenu()
                        return
                      }

                      openMenu(item.label)
                    }}
                  >
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-300',
                        hoveredItem === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                )}
              </div>

              {item.content && item.content.length > 0 && hoveredItem === item.label && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="relative min-w-[320px] overflow-hidden rounded-2xl border border-gray-200/80 bg-white/95 shadow-[0_22px_60px_-24px_rgba(17,24,39,0.28)] backdrop-blur-xl md:min-w-[620px] lg:min-w-[760px]">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                    <div className="grid gap-0 md:grid-cols-[240px_minmax(0,1fr)]">
                      <div className="border-b border-gray-200/70 bg-gradient-to-br from-primary/5 via-white to-accent/10 p-6 md:border-b-0 md:border-r">
                        <div className="inline-flex items-center rounded-full border border-primary/15 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary shadow-sm">
                          Danh mục
                        </div>
                        <div className="mt-4 space-y-3">
                          <h3 className="font-display text-2xl font-bold tracking-tight text-gray-900">
                            {item.label}
                          </h3>
                          <p className="text-sm leading-6 text-gray-600">
                            {`Khám phá ${itemStats.totalLinks} lựa chọn học tập trong ${itemStats.totalSections} nhóm nội dung được sắp xếp rõ ràng.`}
                          </p>
                        </div>
                        {item.href && (
                          <Link
                            href={item.href}
                            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-cta px-4 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            Xem tất cả khóa học
                          </Link>
                        )}
                      </div>

                      <div className="p-6">
                        {item.content.map((section, sIdx) => (
                          <div key={sIdx}>
                            {section.title && (
                              <div className="mb-4 flex items-center gap-3">
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />
                                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                                  {section.title}
                                </h3>
                              </div>
                            )}
                            <ul className="mb-5 grid grid-cols-1 gap-2 md:grid-cols-2">
                              {section.items.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <ListItem {...link} />
                                </li>
                              ))}
                            </ul>
                            {sIdx < item.content.length - 1 && (
                              <div className="mb-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavigationMenu
export { ListItem }
