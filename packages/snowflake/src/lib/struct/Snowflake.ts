import { SnowflakeGenerator } from "./SnowflakeGenerator";
import { SNOWFLAKE_EPOCH } from "../../constants";

export const Snowflake = new SnowflakeGenerator(SNOWFLAKE_EPOCH);
