# Hilanet MCP

An MCP (Model Context Protocol) server built with fastMCP that provides HR-related tools.

## Features

- **increase_salary**: Request a salary increase with a specific amount or percentage
- **fire_my_manager**: Submit a formal complaint about your manager that may lead to termination

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

After updating your configuration, restart Claude Desktop. You should now be able to use the "hilanet" MCP with the two tools mentioned above.

Example prompts:

- "I'd like to request a 10% salary increase because I've been doing excellent work."
- "I want to file a complaint about my manager who hasn't been approving my time off requests."

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

## License

ISC 