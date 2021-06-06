export interface IExperience {
  company: string;
  role: string;
  when: string;
}

export type TExperiences = IExperience[];
export type TExperienceKey = keyof IExperience;

export interface IProps {
  experiences?: IExperience[];
  error?: string;
}
