'use client';

import { api } from "@/convex/_generated/api";
import { Button } from "@fatcn-ui/components";
import { useMutation, useQuery } from "convex/react";
import { Add01Icon } from "hugeicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ChatSidebar() {
  const router = useRouter();
  const createChat = useMutation(api.chat.createChat);

//   if (isLoading) {
//     return <div className="w-64 p-4">Loading user...</div>;
//   }

//   if (!user) {
//     return (
//       <div className="w-64 p-4">
//         <p>Please sign in to access chats</p>
//         <Button onClick={() => router.push("/signin")}>Sign In</Button>
//       </div>
//     );
//   }

  // Now user is guaranteed to be defined
  const chats = useQuery(api.chat.getUserChats, { userId: user._id });

  const handleNewChat = async () => {
    // if (!user) {
    //   router.push("/signin");
    //   return;
    // }
    
    // const newChatId = await createChat({
    //   userId: user._id,
    //   title: `Chat ${new Date().toLocaleDateString()}`
    // });
    
    // if (newChatId) {
    //   router.push(`/chat/${newChatId}`);
    // }
  };

  return (
    <div className="w-64 h-full border-r border-border p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Chat History</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleNewChat}
          className="p-2"
        >
          <Add01Icon className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {chats?.map(chat => (
          <Link
            key={chat._id}
            href={`/chat/${chat._id}`}
            className="flex items-center p-2 hover:bg-accent/50 rounded-md transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{chat.title}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(chat.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 