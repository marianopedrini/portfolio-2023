type SkillItemsProps = {
  title: string;
  skills: string[];
};

const SkillsList = ({ title, skills }: SkillItemsProps) => {
  return (
    <>
      <p className="mb-8 text-2xl">{title}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill} className="py-4 border-b border-grey text-grey hover:text-white transition-all select-none">{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default SkillsList;
