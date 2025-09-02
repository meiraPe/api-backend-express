import express from "express";
import { createSupplierController } from "../controllers/supplier/createSupplierController.js";
import { listSupplierController } from "../controllers/supplier/listSupplierController.js";
import { getByIdSupplierController } from "../controllers/supplier/getByIdSupplierController.js";
import { editSupplierController } from "../controllers/supplier/editSupplierController.js";
import { deleteSupplierController } from "../controllers/supplier/deleteSupplierController.js";

const router = express.Router();

router.post("/", createSupplierController);
router.get("/", listSupplierController);
router.get("/:id", getByIdSupplierController);
router.put("/", editSupplierController);
router.delete("/", deleteSupplierController);

export default router;
