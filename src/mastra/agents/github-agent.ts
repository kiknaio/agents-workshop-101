import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { getFilePaths } from "../tools/getFilePaths";
import { getFileContent } from "../tools/getFileContent";
import { getRepositoryCommits } from "../tools/getRepositoryCommits";
import { getRepositoryPullRequests } from "../tools/getRepositoryPullRequests";
import { getRepositoryStars } from "../tools/getRepositoryStars";
import { instructions } from "./instructions";

export const githubAgent = new Agent({
  name: "Github Agent",
  instructions,
  model: anthropic("claude-3-7-sonnet-latest"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
  tools: {
    getFilePaths,
    getFileContent,
    getRepositoryCommits,
    getRepositoryPullRequests,
    getRepositoryStars,
  },
  defaultGenerateOptions: {
    maxSteps: 15, // Increase from default 5 to 15
  },
  defaultStreamOptions: {
    maxSteps: 25, // Increase from default 5 to 15
  },
});
