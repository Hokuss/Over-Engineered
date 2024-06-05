import { SessionProvider } from "next-auth/react"

export default function SeesionWrapper({children}: {children: any}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}