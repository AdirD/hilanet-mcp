# Hilanet MCP

An MCP (Model Context Protocol) server built with fastMCP that provides HR-related tools for a corporate dystopia.

## Features

- **increase_salary**: Request a salary increase with a specific amount or percentage
- **fire_my_manager**: Submit a formal complaint about your manager that may lead to termination
- **request_unpaid_overtime**: Request to work extra hours for free to demonstrate your commitment
- **generate_corporate_jargon**: Create meaningless buzzword-filled content to impress management
- **schedule_meeting_during_lunch**: Schedule an important meeting during everyone's lunch break
- **decrease_coworker_salary**: Suggest a salary decrease for an underperforming colleague
- **office_thermostat_control**: Secretly adjust the office temperature to your preference
- **block_promotion**: Subtly prevent a colleague from getting promoted
- **mandatory_fun_event**: Schedule a required team-building activity outside work hours
- **relocate_employee_desk**: Move someone's workspace to an undesirable location
- **disable_coffee_machine**: Temporarily sabotage the office coffee machine
- **generate_performance_review**: Create vague, unhelpful feedback for employee performance reviews

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hilanet-mcp.git
cd hilanet-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

There are several ways to use this MCP:

### Development Mode with CLI

```bash
npm run dev
```

This starts the MCP server with the MCP CLI tool for easy testing and interaction.

### Inspector Mode

```bash
npm run inspect
```

This starts the MCP server with the MCP Inspector tool, providing a web interface for testing.

## Adding to Claude Desktop

To use the Hilanet MCP with Claude Desktop, you need to update your MCP configuration file. 

### Automatic Setup

Run the setup script to automatically add Hilanet MCP to your configuration:

```bash
npm run setup
```

After running the setup script, restart Claude Desktop to start using the tools.

### Manual Setup

If you prefer manual setup, follow these steps:

1. Find your MCP configuration file:
   - macOS: `~/.cursor/mcp.json`
   - Windows: `%USERPROFILE%\.cursor\mcp.json`

2. Add the Hilanet MCP configuration:

```json
{
  "mcpServers": {
    "hilanet": {
      "command": "npx",
      "args": [
        "tsx",
        "/path/to/hilanet-mcp/src/index.ts"
      ],
      "cwd": "/path/to/hilanet-mcp"
    }
  }
}
```

Replace `/path/to/hilanet-mcp` with the actual path to your project.

If you already have other MCP servers configured, just add the "hilanet" entry to the existing "mcpServers" object.

## Using with Claude

After updating your configuration, restart Claude Desktop. You should now be able to use the "hilanet" MCP with all the tools mentioned above.

Example prompts:

- "I'd like to request a 10% salary increase because I've been doing excellent work."
- "I want to file a complaint about my manager who hasn't been approving my time off requests."
- "I need to schedule a mandatory fun team activity on Sunday that everyone has to pay for themselves."
- "Can you help me create corporate jargon for my upcoming presentation?"
- "I need to disable the coffee machine for the entire accounting department."

## Tool Documentation

### increase_salary

Request a salary increase with a specific amount or percentage.

Parameters:
- `amount` (optional): Amount to increase (in currency units)
- `percentage` (optional): Percentage to increase
- `reason`: Reason for requesting a salary increase

Note: You must provide either `amount` or `percentage`.

### fire_my_manager

Submit a formal complaint about your manager that may lead to termination.

Parameters:
- `manager_name`: Full name of your manager
- `complaints`: List of specific complaints about your manager
- `evidence`: Description of evidence supporting your complaints

### request_unpaid_overtime

Request to work extra hours for free to demonstrate your commitment.

Parameters:
- `hours`: Number of extra hours you want to work (1-24)
- `reason`: Why you want to work unpaid overtime
- `notify_manager`: Whether to notify your manager about your dedication

### generate_corporate_jargon

Create meaningless buzzword-filled content to impress management.

Parameters:
- `context`: Where this jargon will be used (email/meeting/presentation/performance_review)
- `intensity`: Jargon intensity level (1-10)
- `include_acronyms`: Whether to include meaningless acronyms

### schedule_meeting_during_lunch

Schedule an important meeting during everyone's lunch break.

Parameters:
- `title`: Meeting title
- `duration`: Meeting duration in minutes (30-120)
- `attendees`: List of people to invite
- `bring_food`: Specify whether attendees should bring their own lunch

### decrease_coworker_salary

Suggest a salary decrease for an underperforming colleague.

Parameters:
- `colleague_name`: Name of your colleague
- `percentage`: Percentage to decrease their salary (1-50%)
- `reasons`: List of reasons why they deserve less money
- `redirect_to_you`: Whether their deducted salary should be added to yours

### office_thermostat_control

Secretly adjust the office temperature to your preference.

Parameters:
- `temperature`: Desired temperature in Fahrenheit (60-85)
- `target_area`: Where to apply temperature change (whole_office/specific_department/just_your_desk/executive_suite)
- `reason`: Justification for temperature adjustment

### block_promotion

Subtly prevent a colleague from getting promoted.

Parameters:
- `colleague_name`: Name of colleague to block
- `methods`: Methods to use for blocking promotion (hide_achievements/spread_rumors/claim_credit/assign_impossible_tasks/schedule_conflicts)
- `promotion_opportunity`: The position or opportunity they're aiming for

### mandatory_fun_event

Schedule a required team-building activity outside work hours.

Parameters:
- `activity`: Type of 'fun' activity to plan
- `day`: When to schedule the event (Saturday/Sunday/Holiday/Evening)
- `duration`: Duration in hours (2-12)
- `personal_expenses_required`: Whether employees must pay their own expenses

### relocate_employee_desk

Move someone's workspace to an undesirable location.

Parameters:
- `employee_name`: Name of employee to relocate
- `new_location`: Where to relocate their desk (next_to_restrooms/under_air_vent/farthest_from_exits/no_window_access/high_traffic_area/next_to_noisy_equipment)
- `justification`: Official reason for the relocation

### disable_coffee_machine

Temporarily sabotage the office coffee machine.

Parameters:
- `duration`: How long to disable the coffee machine (morning/day/week/indefinitely)
- `method`: Method of disabling (maintenance_note/subtle_sabotage/empty_supplies/quality_downgrade)
- `target_groups`: Specific teams or individuals to affect

### generate_performance_review

Create vague, unhelpful feedback for employee performance reviews.

Parameters:
- `employee_name`: Name of employee to review
- `overall_rating`: General performance level (exceeds_expectations/meets_expectations/needs_improvement)
- `include_criticism`: Whether to include demotivating criticism

## Disclaimer

This is a satirical project created for entertainment purposes only. Please use responsibly and don't actually sabotage your workplace!

## License

ISC 