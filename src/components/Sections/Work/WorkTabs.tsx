import React from 'react'

import { works } from '@/data';

type WorkTabsProps = {
    selected: string;
    setSelected: (selected: string) => void;
  };

const WorkTabs = ({ selected, setSelected }: WorkTabsProps) => {
    return (
      <ul className="opacity-0 flex justify-between col-span-full border overflow-hidden border-grey rounded-md md:mb-4 lg:mb-0" id='workTabs'>
        {works.map((work) => (
          <li
            className={`select-none flex-1 flex items-center justify-center text-center cursor-pointer py-3 px-2 text-base border-l first:border-0 hover:bg-white/10 transition-colors lg:text-xl ${
              work.name.toLocaleLowerCase() == selected.toLocaleLowerCase()
                ? 'bg-white/90 text-black hover:bg-white/80'
                : ''
            }`}
            key={work.name}
            onClick={() => setSelected(work.name)}
            data-work-tab
          >
            <p>{work.name}</p>
          </li>
        ))}
      </ul>
    );
  };

export default WorkTabs