import ProjectSelection from './ProjectSelection';
import ProjectEditor from './ProjectEditor';

const MainContent = ({ selectedProject, onCreateNewProject, onSelectProject }) => {
	return (
		<main className="flex-grow p-4">
			{selectedProject ? (
				<ProjectEditor projectName={selectedProject} />
			) : (
				<ProjectSelection
					onCreateNewProject={onCreateNewProject}
					onSelectProject={onSelectProject}
				/>
			)}
		</main>
	);
};

export default MainContent;
