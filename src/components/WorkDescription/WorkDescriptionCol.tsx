import Link from 'next/link';

type WorkDescriptionColProps = {
  title: string;
  content: string | string[];
};

const WorkDescriptionCol = ({ title, content }: WorkDescriptionColProps) => {
  const createUl = (content: string[]) => {
    return (
      <ul className={`${title == 'Stack' && 'list-disc ml-6'}`}>
        {title !== 'Links'
          ? content?.map((item) => <li key={item}>{item}</li>)
          : content?.map((item) => (
              <li key={item}>
                <Link
                  href={item}
                  target="_blank"
                  className="hover:text-darkgrey"
                >
                  {item}
                </Link>
              </li>
            ))}
      </ul>
    );
    //
  };

  return (
    <div className="work-desc-col flex flex-col gap-5 text-white">
      <h5 className="text-4xl font-medium">{title}</h5>
      <div className="text-grey">
        {Array.isArray(content) ? createUl(content) : content}
      </div>
    </div>
  );
};
export default WorkDescriptionCol;
