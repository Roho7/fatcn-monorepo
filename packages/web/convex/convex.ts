import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  uiBlocks: defineTable({
    name: v.string(),
    configuration: v.object({
      type: v.string(),
      props: v.any(),
      children: v.optional(v.array(v.id("uiBlocks")))
    }),
    createdAt: v.number(),
    createdBy: v.string(),
    tags: v.array(v.string()),
    aiGenerationData: v.optional(v.object({
      prompt: v.string(),
      model: v.string(),
      timestamp: v.number()
    }))
  })
  .index("by_createdAt", ["createdAt"])
  .index("by_createdBy", ["createdBy"])
  .index("by_tags", ["tags"])
});
