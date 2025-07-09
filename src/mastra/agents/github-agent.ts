import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const githubAgent = new Agent({
  name: "Github Agent",
  instructions:
    "You're a helpful Github assistant that help user to get information about github repositories",
  model: anthropic("claude-3-5-sonnet-20241022"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});
