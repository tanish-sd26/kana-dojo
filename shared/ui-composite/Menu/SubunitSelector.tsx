'use client';

import clsx from 'clsx';
import { ActionButton } from '@/shared/ui/components/ActionButton';
import type { SubunitSummary } from '@/shared/ui-composite/Menu/lib/unitSubunits';

type SubunitSelectorProps = {
  subunits: SubunitSummary[];
  selectedSubunitId: string;
  onSelect: (subunitId: string) => void;
};

const SubunitSelector = ({
  subunits,
  selectedSubunitId,
  onSelect,
}: SubunitSelectorProps) => {
  if (subunits.length <= 1) {
    return null;
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {subunits.map(subunit => {
        const isSelected = subunit.id === selectedSubunitId;

        return (
          <ActionButton
            key={subunit.id}
            onClick={() => onSelect(subunit.id)}
            colorScheme={isSelected ? 'main' : 'secondary'}
            borderColorScheme={isSelected ? 'main' : 'secondary'}
            borderBottomThickness={10}
            borderRadius='3xl'
            className={clsx(
              'w-auto px-4 py-3 text-sm',
              !isSelected && 'opacity-65',
            )}
          >
            {subunit.label}
          </ActionButton>
        );
      })}
    </div>
  );
};

export default SubunitSelector;
