import { AwardsWhereInput } from "./AwardsWhereInput";
import { AwardsOrderByInput } from "./AwardsOrderByInput";

export type AwardsFindManyArgs = {
  where?: AwardsWhereInput;
  orderBy?: Array<AwardsOrderByInput>;
  skip?: number;
  take?: number;
};
