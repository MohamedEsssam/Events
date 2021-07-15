import { RequestHandler } from "express";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import OrganizationModel from "../../models/organization";
import Organization from "../../entities/Organization";
import InternalServer from "../../exceptions/InternalServer";

const repository: OrganizationRepository = new OrganizationRepository(
  OrganizationModel
);
export const getOrganizations: RequestHandler = async (req, res) => {
  try {
    const organizations: Organization[] | null = await repository.getAll();

    return res.status(200).send(organizations);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
