interface IExperience {
  company: string;
  role: string;
  when: string;
}
export interface IProps {
  experiences?: IExperience[];
  error?: string;
}
