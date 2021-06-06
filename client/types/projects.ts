interface IProject {
  company: string;
  name: string;
  role: string;
  achievements: string;
  when: string;
}

export type TProjects = IProject[];

export type TProjectKey = keyof IProject;
export interface IProps {
  projects?: IProject[];
  error?: string;
}
