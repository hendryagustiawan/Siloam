import express from "express";
import VendorController from "../../src/controllers/VendorController";

const router = express.Router();

// Vendor
router.get("/vendor", VendorController.getVendor);
router.post("/vendor", VendorController.createVendor);
router.put("/vendor/:id", VendorController.updateVendor);
router.delete("/vendor/:id", VendorController.deleteVendor);

export default router;
