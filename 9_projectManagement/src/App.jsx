import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/noProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleStartAddProject = () =>
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;