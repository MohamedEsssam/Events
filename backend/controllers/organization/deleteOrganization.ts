import { RequestHandler } from "express";
import { SocketIo } from "../../startup/socket.io";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import OrganizationModel from "../../models/organization";
import Organization from "../../entities/Organization";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: OrganizationRepository = new OrganizationRepository(
  OrganizationModel
);
const io = new SocketIo();
export const deleteOrganization: RequestHandler = async (req, res) => {
  const id: string = req.params["id"];
  try {
    const organization: Organization | null = await repository.delete(id);

    if (!organization) return res.status(NotFound.httpCode).send(NotFound);

    io.getIo().emit("organization", {
      action: "delete",
      organization: organization,
    });
    return res.status(200).send(organization);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
