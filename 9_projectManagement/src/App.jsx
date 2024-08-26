import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, { ...projectData, id: uuidv4() }],
    }));
  };

  console.log(projectState);
  
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
