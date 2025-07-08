"use client"
import { Button, ToastProvider, addToast } from '@heroui/react'
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {


  }, [])

  const register = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sevice-worker.js").then(e => {
        console.log("register done");
      }).catch(e => {
        console.log("register error ",e)
      })
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
    });
  }

  const unRegister = () => {


    if ('serviceWorker' in navigator) {
      console.log(navigator.serviceWorker)
      navigator.serviceWorker.getRegistration().then((registrations) => {
        console.log("registrations : ", registrations)
        // registrations?.unregister().then((bool) => {
        //   console.log("Service worker ", bool)
        // })
      })
    }

  }


  return (
    <div>

      <h1>WElCOME TO TASKMANAGER</h1>
      <p>Manage your tasks efficiently!</p>
      <div className='flex gap-3 p-10'>
        <Button onPress={register} color='primary'>Register</Button>
        <Button onPress={unRegister} color='danger'>un register</Button>
      </div>
    </div>
  )
}
