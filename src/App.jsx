import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage'
import AddJobs from './pages/AddJobs'
import JobPage from './pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<MainLayout></MainLayout>}>
    <Route index element={<HomePage></HomePage>} />
    <Route path='/jobs' element={<JobsPage></JobsPage>}></Route>
    <Route path='/job/:id' element={<JobPage></JobPage>}></Route>
    <Route path='/add-jobs' element={<AddJobs></AddJobs>}></Route>
    
  </Route> 
)
);

const App = () => {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>

    </>
  );
};

export default App;