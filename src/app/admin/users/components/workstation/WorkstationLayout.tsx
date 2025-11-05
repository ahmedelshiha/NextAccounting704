'use client'

import React from 'react'
import { WorkstationLayoutProps } from '../../types/workstation'

/**
 * WorkstationLayout Component
 * Main 3-column layout container inspired by Oracle Fusion
 * Responsive: Desktop (3 columns) → Tablet (2 columns) → Mobile (1 column with drawer)
 */
export function WorkstationLayout({
  sidebar,
  main,
  insights,
  sidebarWidth = 280,
  insightsPanelWidth = 300,
  onSidebarToggle,
  onInsightsToggle,
  className
}: WorkstationLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  const [insightsOpen, setInsightsOpen] = React.useState(true)

  const handleSidebarToggle = (open: boolean) => {
    setSidebarOpen(open)
    onSidebarToggle?.(open)
  }

  const handleInsightsToggle = (open: boolean) => {
    setInsightsOpen(open)
    onInsightsToggle?.(open)
  }

  return (
    <div className={`workstation-container ${className || ''}`}>
      {/* Sidebar (Left Column) */}
      <aside className="workstation-sidebar">
        {sidebar}
      </aside>

      {/* Main Content (Center Column) */}
      <main className="workstation-main">
        {main}
      </main>

      {/* Insights Panel (Right Column) */}
      <aside className="workstation-insights">
        {insights}
      </aside>
    </div>
  )
}

export default WorkstationLayout
