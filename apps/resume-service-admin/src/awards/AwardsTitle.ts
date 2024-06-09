import { Awards as TAwards } from "../api/awards/Awards";

export const AWARDS_TITLE_FIELD = "id";

export const AwardsTitle = (record: TAwards): string => {
  return record.id?.toString() || String(record.id);
};
