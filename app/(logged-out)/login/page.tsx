'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PersonStandingIcon } from "lucide-react"
import * as z from 'zod'
import { FieldErrors, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email: "", password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("login validation passed", values)
  }

  const onError = (e:FieldErrors<typeof formSchema>) => {
    console.log("form error", e)
  }

  return (
    <>
    <PersonStandingIcon size={50}/>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          Login
        </CardTitle>
        <CardDescription>
          Login to your SupportMe account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form 
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit, onError)}>
            <FormField 
              control={form.control}
              name="email"
              render={({field})=> (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your email"  {...field}/>
                  </FormControl>
                  <FormDescription>
                    {/* This is the email address you signed up with */}
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
              />

            <FormField 
              control={form.control}
              name="password"
              render={({field})=> (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password"  {...field}/>
                  </FormControl>
                  <FormDescription>

                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
              />
              <Button type="submit">login</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-between">
        <small>Don&apos;t have an account?</small>
        <Button asChild variant="outline" size="sm">
          <Link href="/sign-up">
            Sign Up
          </Link>
        </Button>
      </CardFooter>
    </Card>
    </>
  )
}
