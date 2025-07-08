"use client"
import { addToast, Button, ToastProvider } from '@heroui/react'
import React from 'react'

export default function page() {

  const test = ()=>{
      addToast({
        title:"hii ther"
      })
  }
  return (
    <div>
      page
      <Button onPress={test}>test me</Button>
    </div>
  )
}
