import { WorkWhereInput } from "./WorkWhereInput";

export type WorkListRelationFilter = {
  every?: WorkWhereInput;
  some?: WorkWhereInput;
  none?: WorkWhereInput;
};
