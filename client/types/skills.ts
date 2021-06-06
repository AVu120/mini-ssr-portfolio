export interface ISkill {
  name: string;
  url: string;
}

export interface IProps {
  skills?: ISkill[];
  error?: string;
}

export interface IContext {
  params: {name: string};
}
