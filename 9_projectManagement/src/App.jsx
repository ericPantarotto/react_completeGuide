import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/noProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () =>
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));

  const handleCancelAddProject = () =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));

  const handleAddProject = (projectData) =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, { ...projectData, id: uuidv4() }],
    }));

  const handleSelectProject = (id) =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));

  const handleDeleteProject = () =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));

  const handleAddTask = (text) =>
    setProjectState((prevState) => ({
      ...prevState,
      tasks: [
        { text: text, projectId: prevState.selectedProjectId, id: uuidv4() },
        ...prevState.tasks,
      ],
    }));

  const handleDeleteTask = () => _;

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
