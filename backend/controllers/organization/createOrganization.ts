import { RequestHandler } from "express";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import OrganizationModel from "../../models/organization";
import Organization from "../../entities/Organization";
import UserAlreadyExist from "../../exceptions/UserAlreadyExist";
import BadRequest from "../../exceptions/BadRequest";
import InternalServer from "../../exceptions/InternalServer";

const repository: OrganizationRepository = new OrganizationRepository(
  OrganizationModel
);
export const register: RequestHandler = async (req, res) => {
  const request: Organization = req.body;
  try {
    const organization: Organization | null = await repository.register(
      request
    );

    if (!organization)
      return res.status(UserAlreadyExist.httpCode).send(UserAlreadyExist);

    return res.status(200).send(organization);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
