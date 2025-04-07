import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '/images/flags/en.svg',
  },
  {
    code: 'ru',
    name: 'Russian',
    flag: '/images/flags/ru.svg',
  },
  {
    code: 'uz',
    name: 'Uzbek',
    flag: '/images/flags/uz.svg',
  },
];

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const currentLang = router.locale || 'en';

  return (
    <div className="relative inline-block text-left">
      <div className="flex space-x-2">
        {languages.map((language) => (
          <Link
            key={language.code}
            href={{ pathname, query }}
            as={asPath}
            locale={language.code}
            className={`flex items-center justify-center rounded-full overflow-hidden w-8 h-8 border-2 ${
              currentLang === language.code ? 'border-blue-500' : 'border-transparent'
            } hover:opacity-80 transition-opacity`}
            title={language.name}
          >
            <div className="relative w-full h-full">
              <Image
                src={language.flag}
                alt={language.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
