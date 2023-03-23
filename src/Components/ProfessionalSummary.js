import React from 'react';

function ProfessionalSummary({professionalSummary, setProfessionalSummary}) {
    
    function onChange(event){
        if (!setProfessionalSummary) {
            setProfessionalSummary = () => console.log('setProfessionalSummary not defined');
          }
        setProfessionalSummary(event.target.value)
    }
    
    return (
        <div>
            <label htmlFor="professionalsummary">Professional Summary :</label>
            <textarea type="text" id="professionalsummary" name="professionalsummary" value={professionalSummary} onChange={(e)=>onChange(e)} />
        </div>
    )
}


export default ProfessionalSummary;