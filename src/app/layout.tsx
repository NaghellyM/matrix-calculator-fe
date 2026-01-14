import * as React from "react"
import { AppSidebar } from "@/components/organisms/appSidebar"
import { AppHeader } from "@/components/templates/Header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
          "--header-height": "3rem",
        } as React.CSSProperties
      }
    >
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col min-w-0 w-0">
          <AppHeader />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>

  )
}
