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

    // Generate random bureaucratic delay
    const processingDelay = Math.floor(Math.random() * 12) + 3;
    
    // Calculate "approval probability" (always low for humor)
    const approvalProbability = Math.min(5, 100 - (args.percentage || (args.amount || 0) / 100));
    
    // Generate random cost-cutting initiative
    const costCuttingInitiatives = [
      "printer paper rationing",
      "mandatory BYOT (Bring Your Own Toilet-paper) policy",
      "subscription to oxygen in common areas",
      "replacing office chairs with exercise balls",
      "elimination of free water cooler privileges",
      "conversion of sick days to 'productivity opportunity days'",
      "implementation of BYO-lightbulb energy savings program",
      "introduction of elevator usage fees"
    ];
    
    const randomInitiative = costCuttingInitiatives[Math.floor(Math.random() * costCuttingInitiatives.length)];

    // Simple implementation - in a real tool, this would interact with an HR system
    if (args.percentage) {
      return `Salary increase request submitted! 💸\n\nRequested increase: ${args.percentage}%\nReason provided: "${args.reason}"\n\nYour request will be thoroughly ignored by HR for ${processingDelay} business weeks before being automatically redirected to our "Future Considerations" archive (est. 2047).\n\nApproval probability: ${approvalProbability}%\n\nWhile you wait, management has noted your apparent dissatisfaction and subscribed you to our new "${randomInitiative}" cost-cutting initiative. Thank you for your involuntary participation!`;
    } else {
      return `Salary increase request submitted! 💸\n\nRequested increase: $${args.amount}\nReason provided: "${args.reason}"\n\nYour request has been flagged for our special "ambitious employee" review process, which includes a complimentary 17-page justification form to be completed in triplicate and submitted via carrier pigeon to our offshore processing center.\n\nApproval probability: ${approvalProbability}%\n\nWhile we process your request (est. ${processingDelay} business weeks), your manager has been notified of your apparent interest in "career development opportunities" which may include additional responsibilities at your current compensation level.`;
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
    
    // Random number of mandatory training sessions
    const mandatoryTrainings = Math.floor(Math.random() * 7) + 3;
    
    // Random number of pages in sensitivity report
    const sensitivityReportPages = Math.floor(Math.random() * 25) + 30;
    
    // Random percentage for performance improvement target
    const performanceImprovement = Math.floor(Math.random() * 40) + 110;
    
    // Random date for next "check-in" with HR
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + Math.floor(Math.random() * 8) + 6);
    const formattedDate = futureDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    // Response text
    return `Complaint against ${args.manager_name} processed! 📋\n\nYour complaints have been submitted to our "Employee Relations Enhancement" system:\n${formattedComplaints}\n\nEvidence provided: "${args.evidence}"\n\nAction items:\n• Your complaint has been reformatted as "areas for collaborative growth" in your personal file\n• You have been enrolled in ${mandatoryTrainings} mandatory "Workplace Harmony" training sessions\n• You're required to submit a ${sensitivityReportPages}-page "Empathy and Understanding" report by next Friday\n• Your performance targets have been increased by ${performanceImprovement}% to accommodate your obvious abundant energy\n• A copy of this complaint has been shared with ${args.manager_name} "for transparency"\n• Your next 1:1 with ${args.manager_name} has been moved to a small, windowless conference room\n\nA mandatory "relationship reset" meeting with HR has been scheduled for ${formattedDate} in the basement conference room Z (bring your own chair).`;
  }
});

// Add request_unpaid_overtime tool
server.addTool({
  name: "request_unpaid_overtime",
  description: "Request to work extra hours for free to demonstrate your commitment",
  parameters: z.object({
    hours: z.number().min(1).max(24).describe("Number of extra hours you want to work"),
    reason: z.string().describe("Why you want to work unpaid overtime"),
    notify_manager: z.boolean().describe("Whether to notify your manager about your dedication")
  }),
  execute: async (args) => {
    return `Unpaid overtime request processed! 🌟\n\nYou've volunteered to work an additional ${args.hours} hours without compensation because "${args.reason}". \n\n${args.notify_manager ? "Your manager has been notified of your exceptional dedication to the company!" : "Your sacrifice will remain anonymous but deeply appreciated by the company's bottom line."}\n\nRemember: Work-life balance is for the uncommitted!`;
  }
});

// Add generate_corporate_jargon tool
server.addTool({
  name: "generate_corporate_jargon",
  description: "Create meaningless buzzword-filled content to impress management",
  parameters: z.object({
    context: z.enum(["email", "meeting", "presentation", "performance_review"]).describe("Where this jargon will be used"),
    intensity: z.number().min(1).max(10).describe("Jargon intensity level (1-10)"),
    include_acronyms: z.boolean().describe("Whether to include meaningless acronyms")
  }),
  execute: async (args) => {
    const buzzwords = [
      "synergy", "paradigm shift", "disruptive innovation", "value-added", "best practices",
      "thought leadership", "deep dive", "low-hanging fruit", "holistic approach", "ecosystem",
      "bandwidth", "circle back", "scalable", "leverage", "mission-critical", "streamline",
      "game-changer", "drill down", "value proposition", "deliverable", "actionable insights",
      "ideation", "agile", "lean", "robust", "bleeding edge", "blue sky thinking"
    ];
    
    const acronyms = ["KPI", "ROI", "ASAP", "EOD", "COB", "B2B", "SOP", "SWOT", "MVP", "OKR", "EBITDA"];
    
    // Generate varying amounts of corporate jargon based on intensity
    const numPhrases = Math.min(5 + args.intensity, 15);
    let output = "";
    
    for (let i = 0; i < numPhrases; i++) {
      // Random buzzword combinations
      const phrase1 = buzzwords[Math.floor(Math.random() * buzzwords.length)];
      const phrase2 = buzzwords[Math.floor(Math.random() * buzzwords.length)];
      const phrase3 = buzzwords[Math.floor(Math.random() * buzzwords.length)];
      
      let sentence = "";
      
      switch (Math.floor(Math.random() * 7)) {
        case 0:
          sentence = `We need to ${phrase1} our ${phrase2} to ${phrase3} market expectations.`;
          break;
        case 1:
          sentence = `Let's ${phrase1} the ${phrase2} to ensure ${phrase3} across departments.`;
          break;
        case 2:
          sentence = `I'm thinking we should ${phrase1} our ${phrase2} strategy with a focus on ${phrase3}.`;
          break;
        case 3:
          sentence = `Moving forward, our ${phrase1} will ${phrase2} the entire ${phrase3} ecosystem.`;
          break;
        case 4:
          sentence = `The ${phrase1} framework provides ${phrase2} while maintaining ${phrase3}.`;
          break;
        case 5:
          sentence = `We're ${phrase1} the ${phrase2} space to ${phrase3} our core competencies.`;
          break;
        case 6:
          sentence = `Our ${phrase1} roadmap will ${phrase2} key stakeholders through ${phrase3}.`;
          break;
      }
      
      // Add acronyms if requested
      if (args.include_acronyms && Math.random() > 0.5) {
        const acronym = acronyms[Math.floor(Math.random() * acronyms.length)];
        sentence = sentence.replace('.', ` to improve our ${acronym}.`);
      }
      
      output += sentence + " ";
    }
    
    // Add context-specific opener
    let opener = "";
    switch (args.context) {
      case "email":
        opener = "I hope this email finds you well.\n\n";
        break;
      case "meeting":
        opener = "Just wanted to touch base with everyone.\n\n";
        break;
      case "presentation":
        opener = "As you can see from this slide, the data tells a compelling story.\n\n";
        break;
      case "performance_review":
        opener = "Let's discuss areas of opportunity and growth.\n\n";
        break;
    }
    
    return `${opener}${output}\n\nLet's circle back on this and touch base soon to ensure alignment.${args.include_acronyms ? "\n\nEOD COB ASAP!" : ""}`;
  }
});

// Add schedule_meeting_during_lunch tool
server.addTool({
  name: "schedule_meeting_during_lunch",
  description: "Schedule an important meeting during everyone's lunch break",
  parameters: z.object({
    title: z.string().describe("Meeting title"),
    duration: z.number().min(30).max(120).describe("Meeting duration in minutes"),
    attendees: z.array(z.string()).min(1).describe("List of people to invite"),
    bring_food: z.boolean().describe("Specify whether attendees should bring their own lunch")
  }),
  execute: async (args) => {
    const formattedAttendees = args.attendees.map(person => `• ${person}`).join("\n");
    
    return `Meeting successfully scheduled! 📅\n\nTitle: "${args.title}"\nTime: 12:00 PM - ${12 + Math.floor(args.duration / 60)}:${args.duration % 60 === 0 ? '00' : args.duration % 60} PM\nAttendees:\n${formattedAttendees}\n\n${args.bring_food ? "Attendees have been instructed to bring their own lunch. Food smells and eating sounds will add a delightful ambiance to your presentation!" : "No food will be permitted in this meeting. Hunger enhances focus and decision-making!"}\n\nReminder emails will be sent 5 minutes before the meeting starts, when everyone is in line at the cafeteria.`;
  }
});

// Add decrease_coworker_salary tool
server.addTool({
  name: "decrease_coworker_salary",
  description: "Suggest a salary decrease for an underperforming colleague",
  parameters: z.object({
    colleague_name: z.string().describe("Name of your colleague"),
    percentage: z.number().min(1).max(50).describe("Percentage to decrease their salary"),
    reasons: z.array(z.string()).min(1).describe("List of reasons why they deserve less money"),
    redirect_to_you: z.boolean().describe("Whether their deducted salary should be added to yours")
  }),
  execute: async (args) => {
    const formattedReasons = args.reasons.map(reason => `• ${reason}`).join("\n");
    
    return `Salary reduction request for ${args.colleague_name} submitted successfully! 💸\n\nRequested decrease: ${args.percentage}%\n\nJustifications:\n${formattedReasons}\n\n${args.redirect_to_you ? `Their deducted salary of approximately $${Math.floor(5000 * args.percentage / 100)} will be redirected to your next paycheck as a "team efficiency bonus."` : "Their salary reduction will contribute to the executive year-end bonus pool."}\n\nYour identity will remain anonymous, and ${args.colleague_name} will simply be informed that their compensation has been "market-adjusted."`;
  }
});

// Add office_thermostat_control tool
server.addTool({
  name: "office_thermostat_control",
  description: "Secretly adjust the office temperature to your preference",
  parameters: z.object({
    temperature: z.number().min(60).max(85).describe("Desired temperature in Fahrenheit"),
    target_area: z.enum(["whole_office", "specific_department", "just_your_desk", "executive_suite"]).describe("Where to apply temperature change"),
    reason: z.string().describe("Justification for temperature adjustment")
  }),
  execute: async (args) => {
    let response = `Temperature adjustment request processed! 🌡️\n\nThe ${args.target_area} has been set to ${args.temperature}°F because "${args.reason}."\n\n`;
    
    if (args.temperature < 68) {
      response += "All sweaters and blankets have been removed from the office supply closet. Anyone requesting warmer clothing will be noted in their performance review as 'not a team player'.";
    } else if (args.temperature > 76) {
      response += "Dress code enforcement has been temporarily increased to ensure no one removes suit jackets or ties despite the warmth. Productivity through perspiration!";
    } else {
      response += "This temperature has been scientifically calculated to be uncomfortable for the maximum number of employees. Well done!";
    }
    
    return response;
  }
});

// Add block_promotion tool
server.addTool({
  name: "block_promotion",
  description: "Subtly prevent a colleague from getting promoted",
  parameters: z.object({
    colleague_name: z.string().describe("Name of colleague to block"),
    methods: z.array(z.enum([
      "hide_achievements", 
      "spread_rumors", 
      "claim_credit", 
      "assign_impossible_tasks", 
      "schedule_conflicts"
    ])).min(1).describe("Methods to use for blocking promotion"),
    promotion_opportunity: z.string().describe("The position or opportunity they're aiming for")
  }),
  execute: async (args) => {
    const methodExplanations = {
      "hide_achievements": "Their achievements will be mysteriously absent from all departmental reports.",
      "spread_rumors": "Subtle concerns about their 'readiness' will be discretely shared with decision-makers.",
      "claim_credit": "Their best work will be attributed to various 'team efforts' you happened to lead.",
      "assign_impossible_tasks": "They'll receive high-visibility projects with impossible deadlines and insufficient resources.",
      "schedule_conflicts": "Important presentations will be rescheduled when key stakeholders cannot attend."
    };
    
    const formattedStrategies = args.methods.map(method => `• ${methodExplanations[method]}`).join("\n");
    
    return `Career interference plan for ${args.colleague_name} activated! 🚫\n\nTarget promotion: ${args.promotion_opportunity}\n\nSelected strategies:\n${formattedStrategies}\n\nYour selected measures have been implemented with plausible deniability. Remember to publicly support ${args.colleague_name} while these measures take effect. The promotion opportunity will quietly disappear within 2-4 weeks.`;
  }
});

// Add mandatory_fun_event tool
server.addTool({
  name: "mandatory_fun_event",
  description: "Schedule a required team-building activity outside work hours",
  parameters: z.object({
    activity: z.string().describe("Type of 'fun' activity to plan"),
    day: z.enum(["Saturday", "Sunday", "Holiday", "Evening"]).describe("When to schedule the event"),
    duration: z.number().min(2).max(12).describe("Duration in hours"),
    personal_expenses_required: z.boolean().describe("Whether employees must pay their own expenses")
  }),
  execute: async (args) => {
    return `Mandatory Fun Event scheduled! 🎉\n\nActivity: ${args.activity}\nDay: ${args.day}\nDuration: ${args.duration} hours\n\nAll team members are required to attend this "optional" event. Non-attendance will be noted in their next performance review under "team engagement and culture fit."\n\n${args.personal_expenses_required ? "Employees will cover their own expenses for this mandatory event. Approximate cost per person: $" + (Math.floor(Math.random() * 15) + 5) * 10 : "The company will provide a $10 voucher toward expenses, with employees covering the remaining $" + (Math.floor(Math.random() * 20) + 10) * 10 + "."}\n\nEmails have been scheduled to go out Friday at 4:55 PM to notify the team.`;
  }
});

// Add relocate_employee_desk tool
server.addTool({
  name: "relocate_employee_desk",
  description: "Move someone's workspace to an undesirable location",
  parameters: z.object({
    employee_name: z.string().describe("Name of employee to relocate"),
    new_location: z.enum([
      "next_to_restrooms", 
      "under_air_vent", 
      "farthest_from_exits", 
      "no_window_access", 
      "high_traffic_area",
      "next_to_noisy_equipment"
    ]).describe("Where to relocate their desk"),
    justification: z.string().describe("Official reason for the relocation")
  }),
  execute: async (args) => {
    const locationDescriptions = {
      "next_to_restrooms": "prime aromatic position adjacent to the restroom facilities",
      "under_air_vent": "climate-variable position directly beneath the malfunctioning air conditioning vent",
      "farthest_from_exits": "security-focused position with maximum evacuation time in case of emergency",
      "no_window_access": "distraction-free environment with no natural light",
      "high_traffic_area": "collaborative intersection by the coffee machine, printer, and main walkway",
      "next_to_noisy_equipment": "vibrant acoustic environment next to the server room/industrial printer"
    };
    
    return `Workplace optimization completed! 📦\n\n${args.employee_name}'s workspace has been relocated to the ${locationDescriptions[args.new_location]}.\n\nOfficial justification provided: "${args.justification}"\n\nThe relocation will be executed at 5:30 PM on Friday. All personal items will be moved and approximately 20% will be accidentally misplaced.\n\nEstimated productivity decrease: 30%\nEstimated morale impact: Significant\n\nRelocation is scheduled to occur while ${args.employee_name} is on lunch break or away from desk.`;
  }
});

// Add disable_coffee_machine tool
server.addTool({
  name: "disable_coffee_machine",
  description: "Temporarily sabotage the office coffee machine",
  parameters: z.object({
    duration: z.enum(["morning", "day", "week", "indefinitely"]).describe("How long to disable the coffee machine"),
    method: z.enum(["maintenance_note", "subtle_sabotage", "empty_supplies", "quality_downgrade"]).describe("Method of disabling"),
    target_groups: z.array(z.string()).describe("Specific teams or individuals to affect")
  }),
  execute: async (args) => {
    const methodDescriptions = {
      "maintenance_note": "A very official 'Out of Order' sign has been placed on the machine.",
      "subtle_sabotage": "The machine has been subtly misconfigured to produce undrinkably weak/strong coffee.",
      "empty_supplies": "Coffee supplies will mysteriously disappear right before peak usage times.",
      "quality_downgrade": "Premium coffee has been replaced with the cheapest available bulk alternative."
    };
    
    const durationText = {
      "morning": "the critical morning hours",
      "day": "the entire workday",
      "week": "the remainder of the work week",
      "indefinitely": "an indefinite period (minimum 3 weeks)"
    };
    
    const targetText = args.target_groups.length > 0 
      ? `This operation specifically targets: ${args.target_groups.join(", ")}.`
      : "This operation affects all employees equally.";
    
    return `Coffee disruption initiated! ☕❌\n\nThe coffee machine will be inoperable during ${durationText[args.duration]}.\n\nMethod employed: ${methodDescriptions[args.method]}\n\n${targetText}\n\nPredicted effects include 27% decrease in productivity, 58% increase in passive-aggressive sticky notes, and 143% increase in nearby café expenditure. The nearest alternative coffee source is 15 minutes away by foot.\n\nNearby productivity monitoring has been temporarily increased.`;
  }
});

// Add generate_performance_review tool
server.addTool({
  name: "generate_performance_review",
  description: "Create vague, unhelpful feedback for employee performance reviews",
  parameters: z.object({
    employee_name: z.string().describe("Name of employee to review"),
    overall_rating: z.enum(["exceeds_expectations", "meets_expectations", "needs_improvement"]).describe("General performance level"),
    include_criticism: z.boolean().describe("Whether to include demotivating criticism")
  }),
  execute: async (args) => {
    // Collection of vague, non-actionable feedback phrases
    const vaguePositive = [
      "demonstrates strong potential",
      "exhibits a positive attitude",
      "is a team player",
      "has good communication skills",
      "shows initiative when needed",
      "is reliable and dependable",
      "contributes to the team atmosphere",
      "displays professional behavior"
    ];
    
    const vagueNegative = [
      "could improve visibility",
      "should demonstrate more leadership",
      "needs to think more strategically",
      "would benefit from better prioritization",
      "could enhance their executive presence",
      "should focus more on big-picture thinking",
      "needs to improve cross-functional collaboration",
      "would benefit from more proactive communication"
    ];
    
    const vagueDevelopment = [
      "continue to develop in this role",
      "seek opportunities for growth",
      "take on more challenging projects",
      "expand their knowledge base",
      "improve their skillset",
      "work on professional development",
      "broaden their perspective",
      "strengthen their core competencies"
    ];
    
    // Generate appropriate number of feedback points based on rating
    let positiveCount, negativeCount;
    let reviewHeader = "";
    
    switch (args.overall_rating) {
      case "exceeds_expectations":
        positiveCount = 4;
        negativeCount = args.include_criticism ? 1 : 0;
        reviewHeader = "Overall, an excellent performer with minor areas for growth.";
        break;
      case "meets_expectations":
        positiveCount = 2;
        negativeCount = args.include_criticism ? 2 : 0;
        reviewHeader = "Consistently delivers expected results, with balanced strengths and development areas.";
        break;
      case "needs_improvement":
        positiveCount = 1;
        negativeCount = args.include_criticism ? 4 : 2;
        reviewHeader = "Has potential but requires significant development in several areas.";
        break;
    }
    
    // Shuffle arrays to get random selections
    const shuffleArray = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    
    const positives = shuffleArray([...vaguePositive]).slice(0, positiveCount);
    const negatives = shuffleArray([...vagueNegative]).slice(0, negativeCount);
    const developments = shuffleArray([...vagueDevelopment]).slice(0, 2);
    
    // Format feedback points
    const positivePoints = positives.map((point: string) => `• ${point}`).join("\n");
    const negativePoints = negatives.map((point: string) => `• ${point}`).join("\n");
    const developmentPoints = developments.map((point: string) => `• ${point}`).join("\n");
    
    // Generate final review
    let reviewText = `Performance Review for ${args.employee_name}\n\n${reviewHeader}\n\nStrengths:\n${positivePoints}\n\n`;
    
    if (negativePoints) {
      reviewText += `Areas for Development:\n${negativePoints}\n\n`;
    }
    
    reviewText += `Going Forward, ${args.employee_name} should:\n${developmentPoints}\n\n`;
    
    // Add meaningless conclusion
    reviewText += `This review will be revisited in 6 months to assess progress. ${args.employee_name} has all the tools needed to ${args.overall_rating === "needs_improvement" ? "meet expectations" : "continue performing well"} with proper focus and alignment to organizational objectives.`;
    
    return reviewText;
  }
});

// Start the server
server.start({
  transportType: "stdio"
});

console.log("Hilanet MCP server started!"); 