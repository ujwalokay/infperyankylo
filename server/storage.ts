import { type EmailSignup, type InsertEmailSignup } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createEmailSignup(signup: InsertEmailSignup): Promise<EmailSignup>;
  getEmailSignupByEmail(email: string): Promise<EmailSignup | undefined>;
}

export class MemStorage implements IStorage {
  private emailSignups: Map<string, EmailSignup>;

  constructor() {
    this.emailSignups = new Map();
  }

  async createEmailSignup(insertSignup: InsertEmailSignup): Promise<EmailSignup> {
    const id = randomUUID();
    const signup: EmailSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.emailSignups.set(id, signup);
    return signup;
  }

  async getEmailSignupByEmail(email: string): Promise<EmailSignup | undefined> {
    return Array.from(this.emailSignups.values()).find(
      (signup) => signup.email === email,
    );
  }
}

export const storage = new MemStorage();
