import { Button } from '@/components/ui/button'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
  return (
    <>
      <h1 className='flex gap-2 items-center'>
        <PersonStandingIcon size={50} className='text-pink-500' /> Support Me
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className='flex gap-2 items-center'>
        <Button asChild> 
          <Link href="/login">Log In</Link> 
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link> 
        </Button>
      </div>
    </>
  )
}
