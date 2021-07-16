import { Repository } from "./repository/Repository";
import Organization from "../entities/Organization";
import { encryptPassword } from "../services/EncryptPasswordService";
import { validateOrganizationSchema } from "../schemas/OrganizationSchema";
import BadRequest from "../exceptions/BadRequest";

export class OrganizationRepository extends Repository<Organization> {
  public async register(
    organization: Organization
  ): Promise<Organization | null> {
    const { error } = validateOrganizationSchema(organization);
    if (error) throw new Error(BadRequest.description);

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
  public async addEvent(id: string, eventId: string): Promise<boolean> {
    const existOrganization = await this.model.findById({ _id: id });
    if (!existOrganization) return false;

    existOrganization?.createdEvents?.push(eventId);
    await existOrganization.save();

    return true;
  }
  public async removeEvent(id: string, eventId: string): Promise<boolean> {
    const existOrganization = await this.model.findById({ _id: id });
    if (!existOrganization) return false;

    existOrganization.createdEvents?.splice(
      existOrganization.createdEvents?.indexOf(eventId),
      1
    );
    await existOrganization.save();

    return true;
  }
}
