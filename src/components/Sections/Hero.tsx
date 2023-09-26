import Image from 'next/image';

import Section from "@/components/Section/Section"
import Grid from '../Grid/Grid';

import { mainTitle } from '@/data';

const Hero = () => {
    return (
        <Section extraClasses="flex items-end pt-[20vh] pb-[10vh]" id="hero">
          <div className="container h-full">
            <Grid>
              <p className="text-5xl lg:text-6xl lg:col-start-2 lg:col-end-12 group">
               {mainTitle}
              </p>
              <div className="col-span-full col-start-2 flex items-center">
                <Image
                  className="col-start-2 col-end-3 ml-2 mt-10 animate-bounce"
                  src="/about-arrow.svg"
                  alt="Arrow pointing down"
                  width={8}
                  height={73}
                />
              </div>
            </Grid>
          </div>
        </Section>
      );
}
export default Hero