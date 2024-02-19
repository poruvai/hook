import React from 'react';
import MyForm from './MyForm';
import DataTable from './DataTable';


  

const App = () => {
  const [formDataList, setFormDataList] = useState([]);

  const handleFormSubmit = formData => {
    setFormDataList(prevDataList => [...prevDataList, formData]);
  };

  return (
    <div>
      <h1>My Form App</h1>
      <MyForm onSubmit={handleFormSubmit} />
      {formDataList.length > 0 && <DataTable data={formDataList} />}
    </div>
  );
};

export default App;
