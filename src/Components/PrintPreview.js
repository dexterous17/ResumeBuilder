import React from 'react';
import ReactToPrint from 'react-to-print';
import Preview from './Preview';

const PrintPreview = ({ basicInfo, educationList, workExperienceList, skillsList, professionalSummary }) => {
    const componentRef = React.useRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <div style={{ display: 'flex' }}>
                <div ref={componentRef}>
                    <Preview
                        basicInfo={basicInfo}
                        educationList={educationList}
                        workExperienceList={workExperienceList}
                        skillsList={skillsList}
                        professionalSummary={professionalSummary}
                    />
                </div>
            </div>
        </div>
    );
};

export default PrintPreview;
