import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage'
import AddJobs from './pages/AddJobs'
import JobPage from './pages/JobPage'




const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>} />
      <Route path='/jobs' element={<JobsPage></JobsPage>}></Route>
      <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}></JobPage>}></Route>
      <Route path='/add-jobs' element={<AddJobs addJobSubmit={addJob}></AddJobs>}></Route>
      
    </Route> 
  )
  );
  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>

    </>
  );
};

export default App;