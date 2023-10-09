type SkillItemsProps = {
  title: string;
  skills: string[];
};

const SkillsList = ({ title, skills }: SkillItemsProps) => {
  return (
    <>
      <p className="opacity-0 mb-8 text-2xl" data-skill-title>{title}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill} className="opacity-0 py-4 border-b border-grey text-grey hover:text-white cursor-default" data-skill-item>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default SkillsList;
