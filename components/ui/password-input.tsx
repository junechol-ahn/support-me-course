import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "./input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
  const [secretMode, setSecretMode] = React.useState(true)
  return (
    <div className="relative">
      <Input className={cn(className, "pr-10")} {...props} type={secretMode?"password":"text"}/>
      <div 
        className="absolute top-1 right-1.5 cursor-pointer select-none"
        onClick={()=>setSecretMode(prevMode=>!prevMode)}
      >
        {secretMode ?<EyeOffIcon />: <EyeIcon />  }
      </div>
    </div>
  )
}

export { PasswordInput }
