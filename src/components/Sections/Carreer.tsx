import Section from "@/components/Section/Section"
import Title from "@/components/Title/Title"
import CarreerItem from "@/components/Items/CarreerItem";

import { carreerItems } from "@/data"

const Carreer = () => {
  return (
    <Section>
      <div className="container grid grid-cols-12 lg:gap-x-8">
        <Title title={'Carreer'} color={'white'} />

        {/* Works container */}
        <ul className="mt-5 col-span-full flex flex-col gap-10">
          {carreerItems.map((item) => (
            <li
              key={item.period}
              className="grid grid-cols-4 md:grid-cols-12 md:gap-y-12 md:gap-x-8"
            >
              <h6 className="col-end-2 md:col-end-6 md:col-span-2 w-min text-end my-auto ml-auto text-xl">
                {item.period}
              </h6>
              <div className="col-start-2 col-span-full md:col-start-6 pl-4 border-l border-darkgrey text-xl flex flex-col my-auto gap-5">
                {item.companies.map((company) => (
                  <CarreerItem company={company} key={company.id}/>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Carreer
