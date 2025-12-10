import express from 'express';
import {
  createBanner,
  deleteBanner,
  getAllBanners,
  getRandomBanner,
} from "../controller/banner.controller.js";
const router = express.Router();

router.get("/random",getRandomBanner);

router.get("/",getAllBanners);

router.post("/",createBanner);

router.delete("/:id",deleteBanner);

export default router;