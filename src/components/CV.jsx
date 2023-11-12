import '../styles/CV.css';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const CV = forwardRef(
  ({ generalInfo, educationalExperience, workExperience }, ref) => {
    return (
      <div ref={ref} className="cvContainer">
        <div className="cvPaper">
          <div className="generalSectionCV">
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email}</p>
            <p>
              {generalInfo.phoneNumber != '' && <span>#</span>}
              {generalInfo.phoneNumber}
            </p>
          </div>
          <div className="educationSectionCV">
            {educationalExperience.length != 0 && <h1>Education</h1>}
            {educationalExperience.map((educationItem, index) => {
              if (!educationItem.hidden) {
                return (
                  <div key={index} className="educationItem">
                    <h3>{educationItem.typeOfEducation}</h3>

                    <h3>{educationItem.schoolName}</h3>
                    {educationItem.honors && (
                      <h4>Honors: {educationItem.honors}</h4>
                    )}
                    <h4>
                      {educationItem.startDate} - {educationItem.endDate}
                    </h4>
                  </div>
                );
              }
            })}
          </div>
          <div className="workSectionCV">
            {workExperience.length != 0 && <h1>Work Experience</h1>}
            {workExperience.map((workItem, index) => {
              if (!workItem.hidden) {
                return (
                  <div className="workItem" key={index}>
                    <h4>{workItem.jobDescription}</h4>

                    <h4>{workItem.companyName}</h4>
                    {workItem.details && <h4>{workItem.details}</h4>}
                    <h4>
                      {workItem.startDate} - {workItem.endDate}
                    </h4>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
);

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
