
import Link from "next/link";
import { Company } from "@/types"

type CarreerItemProps = {
    company : Company
}

const CarreerItem = ({company}: CarreerItemProps) => {
  return (
    <div key={company.id} className="flex flex-col">
      {company.name &&
        (company.link ? (
          <Link href={company.link} target="_blank" className="font-medium text-grey">
            {company.name}
          </Link>
        ) : (
          <h6 className="font-medium text-grey mb-2">{company.name}</h6>
        ))}
      <p>{company.description}</p>
    </div>
  );
}

export default CarreerItem