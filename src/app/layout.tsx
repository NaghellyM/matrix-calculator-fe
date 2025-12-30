import * as React from "react"
import { AppSidebar } from "@/components/organisms/appSidebar"
import { AppHeader } from "@/components/templates/Header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar />
 <SidebarInset
  className="
    flex min-h-screen flex-col
    md:peer-data-[state=expanded]:pl-(--sidebar-width)
    md:peer-data-[state=collapsed]:pl-(--sidebar-width-icon)
  "
>

        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
