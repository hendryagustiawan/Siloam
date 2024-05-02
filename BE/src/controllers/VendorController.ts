import { Request, Response } from "express";
import Vendor from "../db/models/vendor";
import Helper from "../helpers/showError";

const getVendor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const vendors = await Vendor.findAll({});

    return res.status(200).send(Helper.ResponseData(200, "OK", null, vendors));
  } catch (error: any) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

const createVendor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, address } = req.body;

    const create = await Vendor.create({ name, address });

    return res.status(201).send({
      status: 201,
      message: "Success Create Vendor!",
      data: create,
    });
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(200).send({
        status: 500,
        message: error.message,
        errors: error,
      });
    }

    return res.status(200).send({
      status: 500,
      message: "Internal Server Error",
      errors: error,
    });
  }
};

const updateVendor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    const vendor = await Vendor.findByPk(id);

    if (!vendor) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    vendor.name = name;
    vendor.address = address;

    await vendor.save();

    return res.status(200).send({
      status: 200,
      message: "Success Update Vendor!",
      data: vendor,
    });
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(200).send({
        status: 500,
        message: error.message,
        errors: error,
      });
    }

    return res.status(200).send({
      status: 500,
      message: "Internal Server Error",
      errors: error,
    });
  }
};

const deleteVendor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const vendor = await Vendor.findByPk(id);

    if (!vendor) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await vendor.destroy();

    return res.status(200).send({
      status: 200,
      message: "Success Delete Vendor!",
      data: vendor,
    });
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(200).send({
        status: 500,
        message: error.message,
        errors: error,
      });
    }

    return res.status(200).send({
      status: 500,
      message: "Internal Server Error",
      errors: error,
    });
  }
};

export default {
  getVendor,
  createVendor,
  updateVendor,
  deleteVendor,
};
