import Section from "@/components/Section/Section"
import Grid from '../Grid/Grid';

import { aboutTexts } from '@/data';

const About = () => {
    aboutTexts
  return (
    <Section heightFit={true} id="about">
      <Grid extraClasses="container h-full">
        <div className="flex flex-col gap-14 lg:col-start-2 lg:col-end-12">
          {aboutTexts.map((text, index) => (
            <p className="text-3xl" key={index}>
              {text}
            </p>
          ))}
        </div>
      </Grid>
    </Section>
  );
};

export default About;
