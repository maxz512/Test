import React, { useState } from 'react';

function App() {
  // State to store all patient data
  const [patients, setPatients] = useState([]);
  
  // State to store the current patient input data
  const [patientData, setPatientData] = useState({
    id: '',
    name: '',
    age: '',
    condition: ''
  });
  
  // State to store the ID input for retrieval
  const [patientIdToRetrieve, setPatientIdToRetrieve] = useState('');
  
  // State to store the retrieved patient data
  const [retrievedPatient, setRetrievedPatient] = useState(null);

  // Handle input changes for patient data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value
    });
  };

  // Handle input change for ID retrieval
  const handleIdChange = (e) => {
    setPatientIdToRetrieve(e.target.value);
  };

  // Handle form submission to add patient data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new patient to the patients list
    setPatients([...patients, patientData]);
    // Reset the patient input fields
    setPatientData({ id: '', name: '', age: '', condition: '' });
  };

  // Handle patient data retrieval by ID
  const handleRetrieve = () => {
    const patient = patients.find((p) => p.id === patientIdToRetrieve);
    setRetrievedPatient(patient || 'Patient not found');
    setPatientIdToRetrieve(''); // Clear the ID input field
  };

  return (
    <div className="App">
      <h1>Patient Data Management</h1>

      {/* Form to input patient data */}
      <form onSubmit={handleSubmit}>
        <label>
          Patient ID:
          <input
            type="text"
            name="id"
            value={patientData.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={patientData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Medical Condition:
          <input
            type="text"
            name="condition"
            value={patientData.condition}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Patient</button>
      </form>

      {/* Section to retrieve patient data by ID */}
      <h2>Retrieve Patient Data by ID</h2>
      <input
        type="text"
        value={patientIdToRetrieve}
        onChange={handleIdChange}
        placeholder="Enter Patient ID"
      />
      <button onClick={handleRetrieve}>Retrieve</button>

      {/* Display the retrieved patient data */}
      {retrievedPatient && (
        <div>
          <h3>Patient Details:</h3>
          {typeof retrievedPatient === 'string' ? (
            <p>{retrievedPatient}</p>
          ) : (
            <div>
              <p><strong>ID:</strong> {retrievedPatient.id}</p>
              <p><strong>Name:</strong> {retrievedPatient.name}</p>
              <p><strong>Age:</strong> {retrievedPatient.age}</p>
              <p><strong>Condition:</strong> {retrievedPatient.condition}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
