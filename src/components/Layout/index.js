import React from 'react';
import './layout.scss'

export function LayoutNav({children}) {
  return (
    <nav className="layout__nav">
      {children}
    </nav>
  )
}

export function LayoutMain({children, header}) {
  return (
    <main className="layout__main">
      <header className="layout__header">{header}</header>
      <div className="layout__content">
        {children}
      </div>
    </main>
  )
}

export function Layout({children}) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}