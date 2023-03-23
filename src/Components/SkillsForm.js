import React from 'react';

function SkillsForm({ skillsList, setSkillsList }) {

  const handleFieldChange = (event, index) => {
    const { name, value } = event.target;
    setSkillsList(prevSkillsList => {
      const updatedSkillsList = [...prevSkillsList];
      updatedSkillsList[index] = { ...updatedSkillsList[index], [name]: value };
      return updatedSkillsList;
    });
  };

  const handleAdd = () => {
    setSkillsList(prevSkillsList => [...prevSkillsList, { skill: '', proficiency: 'Beginner' }]);
  };

  const handleDelete = (index) => {
    setSkillsList(prevSkillsList => prevSkillsList.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h2>Skills</h2>
      {skillsList.map((skill, index) => (
        <div key={index}>
          <label htmlFor={`skill-${index}`}>Skill:</label>
          <input
            type="text"
            id={`skill-${index}`}
            name="skill"
            value={skill.skill}
            onChange={(event) => handleFieldChange(event, index)}
          />
          <br />
          <label htmlFor={`proficiency-${index}`}>Proficiency:</label>
          <select
            id={`proficiency-${index}`}
            name="proficiency"
            value={skill.proficiency}
            onChange={(event) => handleFieldChange(event, index)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          <hr />
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Skill</button>
    </div>
  );
}

export default SkillsForm;
