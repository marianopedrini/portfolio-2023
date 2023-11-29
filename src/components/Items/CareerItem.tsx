import Link from 'next/link';
import { CareerExperience, Company } from '@/types';

type CareerItemProps = {
  item: CareerExperience;
};

type CompanyItemProps = {
  company: Company;
};

const CareerItem = ({ item }: CareerItemProps) => {
  return (
    <li className="opacity-0 flex items-center" data-career-item>
      <div className="ml-4 flex-1 flex flex-col gap-6 border-l border-l-white pl-4 md:text-xl">
        {item.companies.map((company) => (
          <CompanyItem company={company} key={company.id} />
        ))}
      </div>
    </li>
  );
};

const CompanyItem = ({ company }: CompanyItemProps) => {
  const returnTitle = () => {
    if (company.link) {
      return (
        <p className="font-medium text-grey block mb-1 w-fit">
          <Link
            href={company.link}
            target="_blank"
            className="relative custom-underline"
            data-hover
          >
            {company.name}
          </Link>
          {company.job && ` - ${company.job}`}
        </p>
      );
    }
    return <h6 className="font-medium text-grey mb-2">{company.name}</h6>;
  };

  return (
    <div>
      {company.name && returnTitle()}
      <p className="leading-9">{company.description}</p>
    </div>
  );
};

export default CareerItem;
