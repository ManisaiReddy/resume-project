import { Work as TWork } from "../api/work/Work";

export const WORK_TITLE_FIELD = "id";

export const WorkTitle = (record: TWork): string => {
  return record.id?.toString() || String(record.id);
};
