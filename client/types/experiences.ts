export interface IExperience {
  company: string;
  role: string;
  when: string;
}

export type TExperienceKey = keyof IExperience;

export interface IProps {
  experiences?: IExperience[];
  error?: string;
}
