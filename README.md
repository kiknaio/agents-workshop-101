# Github Chat Agent

This project is part of a "Building & Deploying AI Agents with JS/TS" workshop, demonstrating how to build an AI agent with Mastra.ai that can interact with and answer questions about any GitHub repository.

You'll learn how to:

- Build an AI agent with Mastra
- Ingest and parse GitHub repo content
- Enable natural language chat interface
- Query repository structure, code, and documentation

## Workshop requirements

- [Generate a Github Personal Access Token](https://github.com/settings/tokens)
- [Generate API token from Anthropic](https://console.anthropic.com/settings/keys) or ask me

## How to get started

1. Clone this repository and checkout to `01-initialize-mastra-project` this branch.

```bash
$ git clone https://github.com/kiknaio/agents-workshop-101.git
$ git checkout 01-initialize-mastra-project
```

2. Install required packages

```bash
$ npm install
```

## How It Works

This agent pulls code and documentation from a GitHub repo, chunks and embeds it, then uses an LLM to answer questions conversationally.

## How to generate Github Personal Access Token?

1. Go to https://github.com/settings/tokens
2. Click Personal access tokens
3. Select Tokens (classic)
4. Click "Generate new token" dropdown and select Generate new token (classic)
5. You can provide any Note for the token, it doesn't matter, but it can't be empty
6. Just select "repo" under the "Select scopes" and click green button Generate token
7. Once token is generated, copy and save it into .env as `GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>`
