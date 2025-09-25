'use client'

import { Fragment, useState } from 'react'
import { faLinkedinIn, faTelegramPlane, faYandex } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, MenuItem, Transition, MenuItems, MenuButton } from '@headlessui/react'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

import myAdminAva from '../../../public/assets/images/jap.png'
import MobileMenu from '@/components/ui/MobileMenu'

export default function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <header
        className="sticky top-0 z-50 w-full h-[70px] bg-[#F6D8C2] px-4"
      >
        <div className="w-full h-full max-w-[1276px] mx-auto flex items-center">
          
          {/*DESKTOP VERSION*/}
          <div className="hidden md:flex w-full items-center justify-between">
            
            {/*Left block*/}
            <h2
              className="
            w-[230px] h-[38px]
            text-md font-bold uppercase text-[#FFFFFF] text-center
            py-2 bg-[#F67769]">
              Arbuz Tanya
            </h2>
            
            {/*Right Block*/}
            <div
              className="flex items-center gap-3 sm:gap-4"
            >
              {/*Socials Buttons*/}
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://mail.yandex.ru/compose?to=arbuztatiana@yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#F67769] transition-colors">
                  <FontAwesomeIcon
                    icon={faYandex}
                    size="lg"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/tanya-arbuz-187199221"
                  className="text-gray-500 hover:text-[#F67769] transition-colors">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="lg"/>
                </a>
                <a
                  href="https://t.me/tanya_arbuz"
                  className="text-gray-500 hover:text-[#F67769] transition-colors">
                  <FontAwesomeIcon
                    icon={faTelegramPlane}
                    size="lg"/>
                </a>
              </div>
              
              {/*Lang Block*/}
              
              {/* Avatar Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton
                  data-tooltip-id="avatar-tooltip"
                  className="flex items-center justify-center ring-2 rounded-full focus:outline-none
                         hover:ring-2 hover:ring-[#F67769] transition
                         p-1"
                >
                  <Image
                    src={myAdminAva}
                    alt="User Avatar"
                    width={41}
                    height={41}
                    className="rounded-full"
                  />
                </MenuButton>
                
                {/* Tooltip */}
                <Tooltip id="avatar-tooltip" place="bottom">
                  Demo Samurai
                </Tooltip>
                
                {/* Dropdown items */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems
                    className="absolute right-0 mt-2 w-44 origin-top-right rounded-md
                           bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                  >
                    <div className="py-1">
                      <MenuItem>
                        {() => (
                          <span
                            className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                          >
                          Profile
                        </span>
                        )}
                      </MenuItem>
                      <div className="border-t border-gray-200 my-1"/>
                      <MenuItem>
                        {({active}) => (
                          <button
                            className={`${
                              active ? 'bg-red-100 text-red-600' : 'text-red-500'
                            } block w-full px-4 py-2 text-sm text-left`}
                            onClick={() => signOut({callbackUrl: '/'})} // Logout and redirect to main
                          >
                            Logout
                          </button>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
          
          {/*MOBILE VERSION*/}
          <div className="flex md:hidden w-full items-center justify-between">
            <h2
              className="
            w-[230px] h-[38px]
            text-md font-bold uppercase text-[#FFFFFF] text-center
            py-2 bg-[#F67769]">
              Arbuz Tanya
            </h2>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-gray-800 transition hover:text-black focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-8 h-8">
                <path
                  strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>
        
        </div>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        socials={{ faYandex, faLinkedinIn, faTelegramPlane }}
        user={{ name: 'Demo Samurai', avatar: myAdminAva }}
        onLogout={() => signOut({ callbackUrl: '/' })}
      />
    </>
  )
}
