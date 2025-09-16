'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faGithub,
  faLinkedinIn,
  faTelegramPlane, faYandex,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslations } from 'next-intl'


export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full bg-[#FBE1D0] text-center py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold uppercase text-white bg-[#F67769] inline-block px-6 py-3">
          {t('finalWords')}
        </h2>

        {/*Social Buttons*/}
        <div className="flex justify-center space-x-4 my-6">
          <a
            href="https://github.com/devforthewin"
            className="text-gray-500 hover:text-[#F67769] transition-colors"><FontAwesomeIcon
              icon={faGithub}
              size="lg"/></a>
          <a
            href="https://www.linkedin.com/in/tanya-arbuz-187199221"
            className="text-gray-500 hover:text-[#F67769] transition-colors"><FontAwesomeIcon
              icon={faLinkedinIn}
              size="lg"/></a>
          <a
            href="https://t.me/tanya_arbuz"
            className="text-gray-500 hover:text-[#F67769] transition-colors"><FontAwesomeIcon
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
          <a
            href="https://mail.yandex.ru/compose?to=arbuztatiana@yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#F67769] transition-colors">
            <FontAwesomeIcon
              icon={faYandex}
              size="lg"
            />
          </a>

        </div>

        {/* Копирайт и год */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tanya Arbuz. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}