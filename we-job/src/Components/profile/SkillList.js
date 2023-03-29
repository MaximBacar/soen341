import "./styles/SkillList.css";
const SkillList = (props) => {
  const skills = props.skills;

  return (
    <div className="skillList">
      {skills.map((skills) => (
        <div className="skillPreview" key={skills.id}>
          <h3 align="left">{skills.title}</h3>
          <div id="line"></div>
        </div>
        
      ))}
    </div>
  );
};

export default SkillList;
