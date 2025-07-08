import React from 'react'
import { ToastProvider } from "@heroui/toast"

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ToastProvider />
            {children}
        </>
    )
}
