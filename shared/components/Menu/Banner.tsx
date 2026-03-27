'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/shared/lib/pathUtils';
import { Sparkles } from 'lucide-react';

const USE_NEW_BADGE_DESIGN = true;

const badgeClasses = USE_NEW_BADGE_DESIGN
  ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-b-6 border-(--secondary-color-accent) bg-(--secondary-color) leading-none text-(--background-color) animate-float [--float-distance:-4px]'
  : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border-b-6 border-(--main-color-accent) bg-(--main-color) leading-none text-(--background-color)';

const Banner = () => {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);
  const isKanaRoute = pathWithoutLocale.startsWith('/kana');
  const isKanjiRoute = pathWithoutLocale.startsWith('/kanji');
  const isVocabRoute = pathWithoutLocale.startsWith('/vocabulary');
  const isPreferencesRoute = pathWithoutLocale === '/preferences';

  const subheading = isKanaRoute
    ? 'Kana あ'
    : isKanjiRoute
      ? 'Kanji 字'
      : isVocabRoute
        ? 'Vocabulary 語'
        : isPreferencesRoute
          ? 'Preferences'
          : '';

  return (
    <h2
      className={clsx(
        'pt-3 text-3xl lg:pt-6',
        'flex items-center gap-2 overflow-visible',
      )}
    >
      <span className={badgeClasses}>
        {isPreferencesRoute ? <Sparkles size={22} /> : subheading.split(' ')[1]}
      </span>
      <span>{subheading.split(' ')[0]}</span>
    </h2>
  );
};

export default Banner;
