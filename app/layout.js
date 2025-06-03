export const metadata = {
  title: 'HOA Management System',
  description: 'Condo Management Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
