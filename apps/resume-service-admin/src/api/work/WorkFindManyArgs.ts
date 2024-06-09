import { WorkWhereInput } from "./WorkWhereInput";
import { WorkOrderByInput } from "./WorkOrderByInput";

export type WorkFindManyArgs = {
  where?: WorkWhereInput;
  orderBy?: Array<WorkOrderByInput>;
  skip?: number;
  take?: number;
};
