// src/routers/costumerRouter.js
import express from "express";
import { createCostumerController } from "../controllers/costumer/createCostumerController.js";
import { listCostumerController } from "../controllers/costumer/listCostumerController.js";
import { getByIdCostumerController } from "../controllers/costumer/getByIdCostumerController.js";
import { editCostumerController } from "../controllers/costumer/editCostumerController.js";
import { deleteCostumerController } from "../controllers/costumer/deleteCostumerController.js";

const router = express.Router();

router.post("/", createCostumerController);
router.get("/", listCostumerController);
router.get("/:id", getByIdCostumerController);
router.put("/", editCostumerController);
router.delete("/", deleteCostumerController);

export default router;
