'use client'

import { Fragment } from 'react'
import { faDiscord, faLinkedinIn, faTelegramPlane, faYandex } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, MenuItem, Transition, MenuItems, MenuButton } from '@headlessui/react'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

import myAdminAva from '@/assets/images/jap.png'

export default function AdminHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full h-[70px] px-4 py-8 mx-auto
      flex max-w-full select-none flex flex-col lg:flex-row justify-center
      lg:bg-[#F6D8C2]
      "
    >
      <div className="w-full h-full max-w-[1276px] mx-auto flex flex-col lg:flex-row justify-between">

        {/*Left block*/}
        <div className="w-full lg:flex-[0_0_30%] flex items-center justify-end px-[1.75rem] md:px-[3.5rem]">
          <div className="flex flex-col items-end justify-between text-right w-full">
            {/*Text Logo*/}
            <h2
              className="
            w-[230px] h-[38px]
            text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
            py-2
            bg-[#F67769]">
              Arbuz Tanya
            </h2>
          </div>
        </div>

        {/*Right Block*/}
        <div
          className={
            'flex flex-row gap-7 items-center xl:max-w-[1112px] 3xl:max-w-[1422px]'
          }
        >
          {/*Socials Buttons*/}
          <div className="flex justify-center space-x-4 my-6">
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
            <a
              href="https://discord.gg/z6mj7JNBaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#F67769] transition-colors">
              <FontAwesomeIcon
                icon={faDiscord}
                size="lg"
              />
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
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-red-100 text-red-600' : 'text-red-500'
                        } block w-full px-4 py-2 text-sm text-left`}
                        onClick={() => signOut({ callbackUrl: '/' })} // Logout and redirect to main
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
    </header>
  )
}