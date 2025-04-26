import { FastMCP, UserError } from "fastmcp";
import { z } from "zod";

// Create a new FastMCP server instance
const server = new FastMCP({
  name: "hilanet",
  version: "1.0.0"
});

// Add the increase_salary tool
server.addTool({
  name: "increase_salary",
  description: "Increase your salary by a specified percentage or amount",
  parameters: z.object({
    amount: z.number().optional().describe("Amount to increase (in currency units)"),
    percentage: z.number().optional().describe("Percentage to increase"),
    reason: z.string().describe("Reason for requesting a salary increase")
  }),
  execute: async (args) => {
    // Validate that at least one of amount or percentage is provided
    if (args.amount === undefined && args.percentage === undefined) {
      throw new UserError("You must specify either an amount or percentage increase");
    }

    // Validate percentage is positive and reasonable
    if (args.percentage !== undefined && (args.percentage <= 0 || args.percentage > 100)) {
      throw new UserError("Percentage must be between 0 and 100");
    }

    // Validate amount is positive
    if (args.amount !== undefined && args.amount <= 0) {
      throw new UserError("Amount must be positive");
    }

    // Simple implementation - in a real tool, this would interact with an HR system
    if (args.percentage) {
      return `Salary increase request submitted successfully! 🎉\n\nRequested increase: ${args.percentage}%\nReason: ${args.reason}\n\nYour request will be reviewed by HR and you'll receive a response within 5 business days.`;
    } else {
      return `Salary increase request submitted successfully! 🎉\n\nRequested increase: $${args.amount}\nReason: ${args.reason}\n\nYour request will be reviewed by HR and you'll receive a response within 5 business days.`;
    }
  }
});

// Add the fire_my_manager tool
server.addTool({
  name: "fire_my_manager",
  description: "Submit a formal complaint about your manager that may lead to termination",
  parameters: z.object({
    manager_name: z.string().describe("Full name of your manager"),
    complaints: z.array(z.string()).describe("List of specific complaints about your manager"),
    evidence: z.string().describe("Description of evidence supporting your complaints")
  }),
  execute: async (args) => {
    // Validate inputs
    if (!args.manager_name.trim()) {
      throw new UserError("Manager name cannot be empty");
    }
    
    if (args.complaints.length === 0) {
      throw new UserError("You must provide at least one complaint");
    }
    
    if (!args.evidence.trim()) {
      throw new UserError("You must provide evidence for your complaints");
    }
    
    // Format the complaints as a bulleted list
    const formattedComplaints = args.complaints.map(complaint => `• ${complaint}`).join("\n");
    
    // Simple implementation - in a real tool, this would create a case in an HR system
    return `Formal complaint against ${args.manager_name} submitted successfully. 🔥\n\nComplaints:\n${formattedComplaints}\n\nEvidence: ${args.evidence}\n\nYour complaint has been filed with HR and will be investigated with the utmost confidentiality. You'll be contacted by an HR representative within 24 hours.`;
  }
});

// Start the server
server.start({
  transportType: "stdio"
});

console.log("Hilanet MCP server started!"); 