import Link from 'next/link';
import { CarreerExperience, Company } from '@/types';

type CarreerItemProps = {
  item: CarreerExperience;
};

type CompanyItemProps = {
  company: Company;
};

const CarreerItem = ({ item }: CarreerItemProps) => {
  return (
    <li className="opacity-0 flex items-center" data-carreer-item>
      <p className="text-xl w-14 text-center md:text-2xl">{item.period}</p>
      <div className="ml-4 flex-1 flex flex-col gap-6 border-l border-l-white pl-4 md:text-xl">
        {item.companies.map((company) => (
            <CompanyItem company={company} key={company.id}/>
        ))}
      </div>
    </li>
  );
};

const CompanyItem = ({ company }: CompanyItemProps) => {
    const returnTitle = () => {
        if (company.link) {
            return (
                <Link href={company.link} target="_blank" className="font-medium text-grey block mb-1" data-hover>
                    {company.name}
                </Link>
            );
        }
        return <h6 className="font-medium text-grey mb-2">{company.name}</h6>;
    }

    return (
      <div>
        {company.name && returnTitle()}
        <p className='leading-9'>{company.description}</p>
      </div>
    );
  };

export default CarreerItem;
