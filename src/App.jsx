import './App.css';
import Patients from './pages/Patients';
import PatientDetails from './pages/PatientDetails';
import ErrorPage from './pages/ErrorPage';
import AddPatientPage from './pages/AddPatientPage';
import { PatientProvider } from './contexts/PatientContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPatientsPage from './pages/AddPatientsPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Patients /> },
      { path: 'error', element: <ErrorPage /> },
      { path: 'patientDetails/:patientId', element: <PatientDetails /> },
      { path: 'add-patient-ReactHookForm', element: <AddPatientPage /> },
      { path: 'add-patients', element: <AddPatientsPage /> },
    ],
  },
  ],
  {
    basename: '/Patients-Mangemant-System', 
  }
);

function App() {
  return (
    <>
      <PatientProvider>
        <RouterProvider router={router} />
      </PatientProvider>
    </>
  );
}

export default App;
