'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ActionButton } from '@/shared/ui/components/ActionButton';
import type { SubunitSummary } from '@/shared/ui-composite/Menu/lib/unitSubunits';

type SubunitSelectorProps = {
  subunits: SubunitSummary[];
  selectedSubunitId: string;
  onSelect: (subunitId: string) => void;
};

const SUBUNIT_SELECTOR_ACTIVE_FLOAT_CLASSES =
  'motion-safe:animate-float [--float-distance:-0px] delay-500ms';

const SubunitSelector = ({
  subunits,
  selectedSubunitId,
  onSelect,
}: SubunitSelectorProps) => {
  if (subunits.length <= 1) {
    return null;
  }

  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6'>
      {subunits.map(subunit => {
        const isSelected = subunit.id === selectedSubunitId;
        const shortLabel = subunit.label.replace('Levels ', '');

        return (
          <div key={subunit.id} className='relative'>
            {isSelected && (
              <motion.div
                layoutId='subunit-selector-indicator'
                className='absolute inset-0 rounded-2xl'
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div
                  className={clsx(
                    'h-full w-full rounded-2xl border-b-8 border-(--secondary-color-accent) bg-(--secondary-color)',
                    SUBUNIT_SELECTOR_ACTIVE_FLOAT_CLASSES,
                  )}
                />
              </motion.div>
            )}
            <ActionButton
              onClick={() => onSelect(subunit.id)}
              borderBottomThickness={0}
              borderRadius='2xl'
              className={clsx(
                'relative z-10 w-full px-4 pt-3 pb-5 text-sm',
                isSelected && SUBUNIT_SELECTOR_ACTIVE_FLOAT_CLASSES,
                isSelected
                  ? 'bg-transparent text-(--background-color)'
                  : 'bg-transparent text-(--main-color) hover:bg-(--border-color)/50',
              )}
            >
              <span className='hidden sm:inline'>{subunit.label}</span>
              <span className='inline sm:hidden'>{shortLabel}</span>
            </ActionButton>
          </div>
        );
      })}
    </div>
  );
};

export default SubunitSelector;
