interface IProject {
  company: string;
  name: string;
  role: string;
  achievements: string;
  when: string;
}

export interface IProps {
  projects?: IProject[];
  error?: string;
}
