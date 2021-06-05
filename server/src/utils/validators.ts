import {TSkills} from "../types/skills";

export const isDataValid = (data: TSkills): boolean =>
  !!(Array.isArray(data) && data.length);

export const isEmptyArray = (data: TSkills): boolean =>
  !!(Array.isArray(data) && !data.length);
