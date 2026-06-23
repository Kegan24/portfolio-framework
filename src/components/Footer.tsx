import React from 'react'

export default function Footer({ footer }: { footer: { copyright: string } }) {
  return (
    <footer className="site-footer">
      <div className="container">{footer.copyright}</div>
    </footer>
  )
}
