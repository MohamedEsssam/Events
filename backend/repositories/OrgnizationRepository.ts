import { Repository } from "./repository/Repository";
import Organization from "../entities/Organization";

export class OrganizationRepository extends Repository<Organization> {
  public async register(
    organization: Organization
  ): Promise<Organization | null> {
    let createdOrganization = await this.model.findOne({
      email: organization["email"],
    });
    if (createdOrganization) return null;

    createdOrganization = new this.model(organization);

    return await createdOrganization.save();
  }
}
