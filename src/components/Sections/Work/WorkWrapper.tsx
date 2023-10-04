import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Grid from '@/components/Grid/Grid';
import WorkTabs from '@/components/Sections/Work/WorkTabs';
import WorkDescription from '@/components/Sections/Work/WorkDescription';

import { Work } from '@/types';
import { works } from '@/data';

const preSelectedWork = works[0]

const WorkWrapper = () => {
  const [selectedID, setSelectedID] = useState(1);
  const [selectedWork, setSelectedWork] = useState<Work>(preSelectedWork);

  useEffect(() => {
    const workByID = works.find(work => work.id === selectedID) || preSelectedWork
    setSelectedWork(workByID);
  }, [selectedID]);

    // armar objewto de datos y pasarselo a WorkDescription
  return (
    <div className="container">
      <Grid extraClasses="relative">
        <WorkTabs selectedID={selectedID} setSelectedID={setSelectedID} />
        <WorkDescription selectedWork={selectedWork} />
      </Grid>
    </div>
  );
};

export default WorkWrapper;
