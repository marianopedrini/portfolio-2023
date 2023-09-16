const WorkDescriptionCol = ({title, content}: {title: string, content: string | string[] }) => {
  return (
    <div className="flex flex-col gap-5 text-white">
      <h5 className="text-4xl font-medium">{title}</h5>
      <div className="text-grey">
        {Array.isArray(content) ? (
          <ul className={`${title == 'Stack' && 'list-disc ml-6'}`}>
            {content?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
export default WorkDescriptionCol