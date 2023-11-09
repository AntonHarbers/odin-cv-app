import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import '../styles/Form.css';

export default function NewWorkItemForm({ addNewWorkExperience }) {
  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    companyName: '',
    jobDescription: '',
    details: '',
    startDate: '',
    endDate: '',
  });

  const resetNewItem = () => {
    setNewItem({
      id: uuidv4(),
      companyName: '',
      jobDescription: '',
      details: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <form className="newItemForm">
      <div className="newItemFormRow">
        <label htmlFor="companyName">Company Name:</label>
        <input
          className="newFormInput"
          type="text"
          name="companyName"
          placeholder="Company Name"
          id="companyName"
          value={newItem.companyName}
          onChange={(e) => {
            setNewItem({ ...newItem, companyName: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="jobDescription">Job Description:</label>
        <input
          className="newFormInput"
          placeholder="Job Description"
          type="text"
          name="jobDescription"
          id="jobDescription"
          value={newItem.jobDescription}
          onChange={(e) => {
            setNewItem({ ...newItem, jobDescription: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="jobDetails">Job Details:</label>
        <input
          className="newFormInput"
          placeholder="Job Details..."
          type="textarea"
          name="jobDescription"
          id="jobDescription"
          value={newItem.details}
          onChange={(e) => {
            setNewItem({ ...newItem, details: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="startDateWork">From:</label>
        <input
          className="newFormInput"
          placeholder="01.01.2021"
          type="text"
          name="startDateWork"
          id="startDateWork"
          value={newItem.startDate}
          onChange={(e) => {
            setNewItem({ ...newItem, startDate: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="endDateWork">To:</label>
        <input
          className="newFormInput"
          type="text"
          name="endDateWork"
          placeholder="01.01.2022"
          id="endDateWork"
          value={newItem.endDate}
          onChange={(e) => {
            setNewItem({ ...newItem, endDate: e.target.value });
          }}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();

          if (
            newItem.jobDescription == '' ||
            newItem.companyName == '' ||
            newItem.startDate == '' ||
            newItem.endDate == ''
          ) {
            alert('Please fill out all the required Information');
            return;
          }

          addNewWorkExperience(newItem);
          resetNewItem();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="addIcon"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
