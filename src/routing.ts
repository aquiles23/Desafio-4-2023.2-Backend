import { type Express } from "express";
import apiRoutes from "./routes/apiRoutes";

export default function routing(app: Express) {
  app.use("/api/", apiRoutes);
}
