import express from "express";
import {
  forgotPassword,
  getAllUsers,
  Login,
  Register,
  requestTutor,
  resetPasswordGet,
  resetPasswordPost,
} from "../controller/userController";
import { protect } from "../Middlewares/authMiddleware";

const router = express.Router();

// router.get("/", (req: Request, res: Response) => {
//   return res.status(200).json({
//     message: "my landing page",
//   });
// });
router.post("/signup", Register);
router.post("/login", Login);
router.get("/", protect, getAllUsers);
router.post("/forgot-password", forgotPassword);
router.get("/resetpassword/:id/:token", resetPasswordGet);
router.post("/resetpassword/:id/:token", resetPasswordPost);
router.post("/request", protect, requestTutor);

export default router;
