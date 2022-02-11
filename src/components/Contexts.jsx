import { UserProvider } from '../contexts/UserContext';
import { SelectedProjectProvider } from '../contexts/SelectedProjectContext';
import { ProjectModalProvider } from '../contexts/ProjectModalContext';
import { TaskModalProvider } from '../contexts/TaskModalContext';
import { ProjectFormProvider } from '../contexts/ProjectFormContext';
import { TaskFormProvider } from '../contexts/TaskFormContext';
import { SidebarProvider } from '../contexts/SidebarContext';

const Contexts = ({ children }) => {
  return (
    <>
      <UserProvider>
        <SelectedProjectProvider>
          <SidebarProvider>
            <ProjectModalProvider>
              <TaskModalProvider>
                <ProjectFormProvider>
                  <TaskFormProvider>{children}</TaskFormProvider>
                </ProjectFormProvider>
              </TaskModalProvider>
            </ProjectModalProvider>
          </SidebarProvider>
        </SelectedProjectProvider>
      </UserProvider>
    </>
  );
};

export default Contexts;
