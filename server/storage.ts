import { type User, type InsertUser, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";
import nodemailer from 'nodemailer';

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password',
  },
});

// Email sending function
async function sendContactEmail(message: ContactMessage): Promise<void> {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.RECIPIENT_EMAIL || 'your-email@gmail.com',
      subject: `New Contact Message from ${message.firstName} ${message.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${message.firstName} ${message.lastName}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Subject:</strong> ${message.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.message}</p>
        <p><strong>Submitted at:</strong> ${message.createdAt.toLocaleString()}</p>
      `,
    });
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
  }
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private usersByUsername: Map<string, User> = new Map();
  private contactMessages: Map<string, ContactMessage> = new Map();

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.usersByUsername.get(username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    // Fix the User type by only including properties that exist in the type
    const user = { 
      ...insertUser, 
      id 
    } as User;
    
    this.users.set(id, user);
    this.usersByUsername.set(user.username, user);

    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    
    // Send email notification
    await sendContactEmail(message);
    
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
