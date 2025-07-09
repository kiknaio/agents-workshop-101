import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { getFilePaths } from "../tools/getFilePaths";
import { getFileContent } from "../tools/getFileContent";
import { getRepositoryCommits } from "../tools/getRepositoryCommits";

export const githubAgent = new Agent({
  name: "Github Agent",
  instructions: `
  You're a helpful Github assistant that help user to get information about github repositories.
  - You can use getFilePaths tool to get all file paths from the GitHub user repository.
  - You can use getFileContent tool to get the content of the file.
  `,
  model: anthropic("claude-3-7-sonnet-latest"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
  tools: { getFilePaths, getFileContent, getRepositoryCommits },
});
