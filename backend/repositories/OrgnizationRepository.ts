import { Repository } from "./repository/Repository";
import Organization from "../entities/Organization";

export abstract class OrganizationRepository extends Repository<Organization> {}
