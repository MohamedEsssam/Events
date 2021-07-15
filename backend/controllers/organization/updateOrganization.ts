import { RequestHandler } from "express";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import OrganizationModel from "../../models/organization";
import Organization from "../../entities/Organization";
import BadRequest from "../../exceptions/BadRequest";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: OrganizationRepository = new OrganizationRepository(
  OrganizationModel
);
export const updateOrganization: RequestHandler = async (req, res) => {
  const request: Organization = req.body;
  const id: string = req.params["id"];
  try {
    const organization: Organization | null = await repository.update(
      id,
      request
    );

    if (!organization) return res.status(NotFound.httpCode).send(NotFound);

    return res.status(200).send(organization);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
