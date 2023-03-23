import React, { useState } from 'react';
import BasicInfoForm from './BasicInfoForm';
import EducationForm from './EducationForm';
import WorkExperienceForm from './WorkExperienceForm';
import SkillsForm from './SkillsForm';
import PrintPreview from './PrintPreview';
import ProfessionalSummary from './ProfessionalSummary';

function Resume() {
    const [basicInfo, setBasicInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const [professionalSummary,setProfessionalSummary] = useState("");

    const [links,setlinks] = useState([ ])

    const [educationList, setEducationList] = useState([]);

    const [workExperienceList, setWorkExperienceList] = useState([]);

    const [skillsList, setSkillsList] = useState([]);
    

    function handleBasicInfoChange(newBasicInfo) {
        setBasicInfo(newBasicInfo);
    }
    return (
        <div>
            <div>
                <BasicInfoForm basicInfo={basicInfo} onBasicInfoChange={handleBasicInfoChange} />
                <hr />
                <ProfessionalSummary professionalSummary={professionalSummary} setProfessionalSummary={setProfessionalSummary}/>
                <hr />
                <EducationForm educationList={educationList} setEducationList={setEducationList} />
                <hr />
                <WorkExperienceForm workExperienceList={workExperienceList} setWorkExperienceList={setWorkExperienceList} />
                <hr />
                <WorkExperienceForm workExperienceList={workExperienceList} setWorkExperienceList={setWorkExperienceList} />
                <hr/>
                <SkillsForm skillsList={skillsList} setSkillsList={setSkillsList} />
                <hr />
            </div>
            <PrintPreview basicInfo={basicInfo} educationList={educationList} workExperienceList={workExperienceList} skillsList={skillsList} professionalSummary={professionalSummary}/>
        </div>
    );
}

export default Resume;
