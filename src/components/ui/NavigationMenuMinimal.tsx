'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Cloud, Code2, Database, Palette, Shield, Smartphone, Zap } from 'lucide-react'

import { cn } from '@/lib/utils'

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

const getIconForTitle = (title: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Lập trình Web': <Code2 className="h-4 w-4" />,
    'Lập trình Mobile': <Smartphone className="h-4 w-4" />,
    'DevOps & Cloud': <Cloud className="h-4 w-4" />,
    'Khoa học dữ liệu': <Database className="h-4 w-4" />,
    'Trí tuệ nhân tạo': <Zap className="h-4 w-4" />,
    'Thiết kế UI/UX': <Palette className="h-4 w-4" />,
    'An ninh mạng': <Shield className="h-4 w-4" />,
  }

  return iconMap[title]
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps & { className?: string }>(
  ({ title, href, description, icon, className }, ref) => {
    const defaultIcon = getIconForTitle(title)

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          'group flex items-start gap-3 rounded-xl px-3 py-2.5 outline-none transition-colors duration-150 hover:bg-accent/5 focus:bg-accent/5',
          className
        )}
      >
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors duration-150 group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
          {icon || defaultIcon}
        </div>
        <div className="min-w-0 space-y-1">
          <div className="text-sm font-medium leading-none text-gray-900 transition-colors duration-150 group-hover:text-accent">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-5 text-gray-500">{description}</p>
        </div>
      </Link>
    )
  }
)

ListItem.displayName = 'ListItem'

const NavigationMenuMinimal = ({ items, className }: NavigationMenuProps) => {
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
      <ul className="hidden items-center gap-1 md:flex">
        {items.map((item, idx) => (
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
            <div className="flex items-center rounded-xl bg-white p-1">
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-10 items-center rounded-xl px-4 text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900',
                    item.content && 'rounded-r-none pr-1',
                    hoveredItem === item.label && 'bg-gray-100 text-gray-900'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className={cn(
                    'flex h-10 items-center rounded-xl px-4 text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900',
                    item.content && 'rounded-r-none pr-1.5',
                    hoveredItem === item.label && 'bg-gray-100 text-gray-900'
                  )}
                  onClick={() => item.content && openMenu(item.label)}
                >
                  {item.label}
                </button>
              )}

              {item.content && (
                <button
                  type="button"
                  aria-label={`Mo menu ${item.label}`}
                  aria-expanded={hoveredItem === item.label}
                  aria-haspopup="true"
                  className={cn(
                    'flex h-10 items-center justify-center rounded-xl rounded-l-none pr-2.5 pl-0.5 text-gray-700 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900',
                    hoveredItem === item.label && 'bg-gray-100 text-gray-900'
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
                    className={cn('h-4 w-4 transition-transform duration-200 mt-[3px]', hoveredItem === item.label && 'rotate-180')}
                  />
                </button>
              )}
            </div>

            {item.content && hoveredItem === item.label && (
              <div className="absolute left-0 top-full z-50 pt-1">
                <div className="w-[350px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_18px_50px_-24px_rgba(17,24,39,0.28)]">
                  {item.content.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                      <div className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                        {section.title}
                      </div>
                      <ul className="grid grid-cols-1 gap-1">
                        {section.items.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <ListItem {...link} />
                          </li>
                        ))}
                      </ul>
                      {sectionIdx < item.content.length - 1 && <div className="my-2 h-px bg-gray-100" />}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenuMinimal
