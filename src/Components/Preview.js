import React, { useRef } from 'react';

function Preview({ basicInfo, educationList, workExperienceList, skillsList, professionalSummary }) {
    const previewRef = useRef(null);

    return (
        <div ref={previewRef}>
            <div>
                <h2>Preview</h2>
                <div>{basicInfo.name}</div>
                <div style={{ display: "flex" }}>
                    <div>{basicInfo.email}</div>
                    <div>{basicInfo.phone}</div>
                </div>
                <div>{basicInfo.address}</div>
                <div>
                    {professionalSummary}
                </div>
                <h3>Education</h3>
                <ul>
                    {educationList?.map((education, index) => (
                        <li key={index}>
                            <p>Degree: {education.degree}</p>
                            <p>Institution: {education.institution}</p>
                            <p>Field of Study: {education.fieldOfStudy}</p>
                            <p>Start Date: {education.startDate}</p>
                            <p>End Date: {education.endDate}</p>
                        </li>
                    ))}
                </ul>

                <h3>Work Experience</h3>
                <ul>
                    {workExperienceList?.map((workExperience, index) => (
                        <li key={index}>
                            <p>Company: {workExperience.company}</p>
                            <p>Position: {workExperience.position}</p>
                            <p>Start Date: {workExperience.startDate}</p>
                            <p>End Date: {workExperience.endDate}</p>
                            <p>Job Description: {workExperience.jobDescription}</p>
                        </li>
                    ))}
                </ul>

                <h3>Skills</h3>
                <ul>
                    {skillsList?.map((skill, index) => (
                        <li key={index}>
                            <p>Skill: {skill.skill}</p>
                            <p>Proficiency: {skill.proficiency}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Preview;
