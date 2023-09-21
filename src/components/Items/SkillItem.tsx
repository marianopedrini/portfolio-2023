type SkillItemsProps = { skill: string }

const SkillItem = ({ skill }: SkillItemsProps) => {
  return (
    <li className="text-base md:text-xl pb-3 pt-5 pl-1 text-grey hover:bg-darkgrey/10 transition-all duration-200 border-b border-grey">
      {skill}
    </li>
  );
};

export default SkillItem;
