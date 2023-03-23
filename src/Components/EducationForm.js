import React from 'react';

function EducationForm({ educationList, setEducationList }) {

  const handleFieldChange = (event, index) => {
    const { name, value } = event.target;
    setEducationList(prevEducationList => {
      const updatedEducationList = [...prevEducationList];
      updatedEducationList[index] = { ...updatedEducationList[index], [name]: value };
      return updatedEducationList;
    });
  };

  const handleAdd = () => {
    setEducationList(prevEducationList => [...prevEducationList, { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' }]);
  };

  const handleDelete = (index) => {
    setEducationList(prevEducationList => prevEducationList.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h2>Education</h2>
      {educationList?.map((education, index) => (
        <div key={`education-${index}`}>
          <label htmlFor={`institution-${index}`}>Institution:</label>
          <input type="text" id={`institution-${index}`} name="institution" value={education.institution} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`degree-${index}`}>Degree:</label>
          <input type="text" id={`degree-${index}`} name="degree" value={education.degree} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`field-of-study-${index}`}>Field of Study:</label>
          <input type="text" id={`field-of-study-${index}`} name="fieldOfStudy" value={education.fieldOfStudy} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`start-date-${index}`}>Start Date:</label>
          <input type="date" id={`start-date-${index}`} name="startDate" value={education.startDate} onChange={(event) => handleFieldChange(event, index)} />
          <br />
          <label htmlFor={`end-date-${index}`}>End Date:</label>
          <input type="date" id={`end-date-${index}`} name="endDate" value={education.endDate} onChange={(event) => handleFieldChange(event, index)} />
          <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          <hr />
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Education</button>
    </div>
  );
}

export default EducationForm;
