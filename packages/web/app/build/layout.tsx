'use client'

import { ConvexClientProvider } from "@/convex/convexProvider"
import Topbar from "../_components/topbar"

const BuilderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexClientProvider>
      <div className="flex w-full" >
    <div className="flex flex-col w-full">
        <Topbar />
      <div className="flex flex-1 w-full">
        {/* <ChatSidebar /> */}
        {children}
      </div>
    </div>
    </div>
    </ConvexClientProvider>
  )
}

export default BuilderLayout