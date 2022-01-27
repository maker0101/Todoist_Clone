import { useContext } from 'react';
import { PROJECT_COLORS } from '../../constants/project-colors';
import { getColorIdByName, getColorNameById } from '../../utilities/get-color';
import { ProjectFormContext } from '../../contexts/ProjectFormContext';

const ProjectFormColor = () => {
  const { projectForm, setProjectForm } = useContext(ProjectFormContext);

  return (
    <>
      <label htmlFor='projectColors'>
        <h2>Color</h2>
      </label>
      <div className='project__selects'>
        <select
          required
          className='projectForm__input projectForm__select'
          id='projectColors'
          value={getColorNameById(projectForm.colorId)}
          onChange={(e) =>
            setProjectForm({
              ...projectForm,
              colorId: getColorIdByName(e.target.value),
            })
          }>
          {PROJECT_COLORS.map((color) => (
            <option key={color.id} value={color.name}>
              {color.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ProjectFormColor;
