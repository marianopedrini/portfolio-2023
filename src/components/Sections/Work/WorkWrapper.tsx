import { useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import Grid from '@/components/Grid/Grid';

import { works } from '@/data';
import WorkTabs from '@/components/Sections/Work/WorkTabs';
import WorkDescription from '@/components/Sections/Work/WorkDescription';



const WorkWrapper = () => {
  const [selected, setSelected] = useState('calsa');

  return (
    <div className="container">
      <Grid extraClasses="relative">
        <WorkTabs selected={selected} setSelected={setSelected} />
        <WorkDescription selected={selected} />
      </Grid>
    </div>
  );
};

export default WorkWrapper;
