import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSignupSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/email-signup", async (req, res) => {
    try {
      const validatedData = insertEmailSignupSchema.parse(req.body);
      
      const existingSignup = await storage.getEmailSignupByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(400).json({
          error: "This email is already registered",
        });
      }

      const signup = await storage.createEmailSignup(validatedData);
      
      res.status(201).json({
        message: "Successfully signed up!",
        signup: {
          id: signup.id,
          email: signup.email,
        },
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Invalid email address",
          details: error.errors,
        });
      }
      
      console.error("Email signup error:", error);
      res.status(500).json({
        error: "Failed to sign up. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
