import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cm from '@/public/images/cm.jpg'
import WorkLocationTrends from "./work-location-trends";


export default function EmployeesStats() {
  const totalEmployees = 98;
  const employeesPresent = 75;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-4 ">
      {/** first card */}
      <Card className="gap-1">
        <CardHeader>
          <CardTitle className="text-base">Total employees</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex gap-2">
            <UserIcon />
            <div className="text-5xl font-bold">{totalEmployees}</div>
          </div>
          <div>
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/** second card */}
      <Card className="gap-1">
        <CardHeader>
          <CardTitle className="text-base">Employees Present</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex gap-2">
            {employeesPresentPercentage > 75 ? (
              <UserCheck2Icon />
            ) : (
              <UserRoundXIcon />
            )}
            <div className="text-5xl font-bold">{employeesPresent}</div>
          </div>
        </CardContent>
        <CardFooter>
          {employeesPresentPercentage > 75 ? (
            <span className="text-xs text-green-500 flex gap-1 items-center">
              <BadgeCheckIcon size={20} />
              {employeesPresentPercentage.toFixed()}% of employees are present
            </span>
          ) : (
            <span className="text-xs text-orange-500 flex gap-1 items-center">
              <BadgeCheckIcon size={20} />
              Only {employeesPresentPercentage.toFixed()}% of employees are
              present
            </span>
          )}
        </CardFooter>
      </Card>

      {/** third card */}
      <Card className="gap-1 border-pink-500 flex flex-col">
        <CardHeader>
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <Avatar>
            <Image src={cm} alt="Employee of the month avatar"/>
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <span className="text-2xl">Collin Murray!</span>
        </CardContent>
        <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
          <PartyPopperIcon className="text-pink-500"/>
          <span>congratulations, Collin</span>
        </CardFooter>
      </Card>
    </div>
    <Card className="my-4">
      <CardHeader>

      <CardTitle className="text-lg flex items-center gap-2">
        <LaptopIcon/>
        <span>Employee work location trends</span>
      </CardTitle>
      </CardHeader>
      <CardContent className="pl-0">
        <WorkLocationTrends/>
      </CardContent>
    </Card>
    </>
  );
}
