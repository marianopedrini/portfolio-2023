import WorkDescriptionCol from "./WorkDescriptionCol";

const WorkDescriptionWrapper = ({
  info,
  role,
  stack,
  links,
}: {
  info: string;
  role: string;
  stack: string[];
  links?: string[];
}) => {
  return (
    <div
      className={`bg-white/5 mt-16 rounded-2xl h-fit col-span-full z-40 py-8 p-6 gap-12 grid grid-cols-1 md:mt-0 md:bg-black/80 md:gap-6 md:p-8 ${
        links ? 'sm:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-2 xl:grid-cols-3'
      }`}
    >
      <WorkDescriptionCol title="Info" content={info} />

      <WorkDescriptionCol title="Role" content={role} />

      <WorkDescriptionCol title="Stack" content={stack} />

      {links && <WorkDescriptionCol title="Links" content={links} />}
    </div>
  );
};
export default WorkDescriptionWrapper;
