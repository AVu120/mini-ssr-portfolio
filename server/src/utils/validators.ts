import {TSkills} from "../types/skills";
import {TProjects} from "../types/projects";

export const isDataValid = (data: TSkills | TProjects): boolean =>
  !!(Array.isArray(data) && data.length);

export const isEmptyArray = (data: TSkills | TProjects): boolean =>
  !!(Array.isArray(data) && !data.length);
