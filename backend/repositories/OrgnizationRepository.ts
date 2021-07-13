import { Repository } from "./repository/Repository";
import Organization from "../entities/Organization";
import { encryptPassword } from "../services/EncryptPasswordService";

export class OrganizationRepository extends Repository<Organization> {
  public async register(
    organization: Organization
  ): Promise<Organization | null> {
    let createdOrganization = await this.model.findOne({
      email: organization["email"],
    });
    if (createdOrganization) return null;

    organization["password"] = (await encryptPassword(
      organization["password"] as string
    )) as string;

    createdOrganization = new this.model(organization);

    return await createdOrganization.save();
  }
}
