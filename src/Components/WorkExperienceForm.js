import React from 'react';

function WorkExperienceForm({ workExperienceList, setWorkExperienceList }) {

  const handleFieldChange = (event, index) => {
    const { name, value } = event.target;
    setWorkExperienceList(prevWorkExperienceList => {
      const updatedWorkExperienceList = [...prevWorkExperienceList];
      updatedWorkExperienceList[index] = { ...updatedWorkExperienceList[index], [name]: value };
      return updatedWorkExperienceList;
    });
  }

  const handleAdd = () => {
    setWorkExperienceList(prevWorkExperienceList => [...prevWorkExperienceList, { company: '', position: '', startDate: '', endDate: '', description: '' }]);
  }

  const handleDelete = (index) => {
    setWorkExperienceList(prevWorkExperienceList => prevWorkExperienceList.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Work Experience</h2>
      {workExperienceList?.map((workExperience, index) => (
        <div key={index}>
          <label htmlFor={`company-${index}`}>Company:</label>
          <input type="text" id={`company-${index}`} name="company" value={workExperience.company} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`position-${index}`}>Position:</label>
          <input type="text" id={`position-${index}`} name="position" value={workExperience.position} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`start-date-${index}`}>Start Date:</label>
          <input type="date" id={`start-date-${index}`} name="startDate" value={workExperience.startDate} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`end-date-${index}`}>End Date:</label>
          <input type="date" id={`end-date-${index}`} name="endDate" value={workExperience.endDate} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`description-${index}`}>Description:</label>
          <textarea id={`description-${index}`} name="description" value={workExperience.description} onChange={(event) => handleFieldChange(event, index)} />
          <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          <hr />
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Work Experience</button>
    </div>
  );
}

export default WorkExperienceForm;
