import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createChat = mutation({
  args: {
    userId: v.id("users"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const newChatId = await ctx.db.insert("chatLogs", {
      userId: args.userId,
      title: args.title,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return newChatId;
  },
});

export const getUserChats = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    try {
      const chats = await ctx.db
        .query("chatLogs")
        .filter(q => q.eq(q.field("userId"), args.userId))
        .order("desc")
        .collect();
      return chats;
    } catch (error) {
      console.error("Error fetching chats:", error);
      return [];
    }
  },
}); 