import WorkDescriptionCol from "./WorkDescriptionCol";

type WorkDescriptionWrapperProps = {
    info: string;
    role: string;
    stack: string[];
    links?: string[];
    forwardedRef?: React.RefObject<HTMLDivElement>;
}

const WorkDescriptionWrapper = ({
  info,
  role,
  stack,
  links,
  forwardedRef
}: WorkDescriptionWrapperProps) => {
  return (
    <div
      className={`opacity-0 bg-white/5 border border-darknessgrey rounded-2xl h-fit col-span-full z-40 py-8 p-6 gap-12 grid grid-cols-1 relative md:top-1/4 md:mt-0 md:bg-black/80 md:gap-6 md:p-8 ${
        links ? 'sm:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-2 xl:grid-cols-3'
      }`}
      ref={forwardedRef}
    >
      <WorkDescriptionCol title="Info" content={info} />

      <WorkDescriptionCol title="Role" content={role} />

      <WorkDescriptionCol title="Stack" content={stack} />

      {links && <WorkDescriptionCol title="Links" content={links} />}
    </div>
  );
};
export default WorkDescriptionWrapper;
