import Link from "next/link"
import { StarsIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface RepoInfo {
  name: string;
  version: string;
  description: string;
}
import jsonData from '@/remote-content/tlp-components.json' assert { type: 'json' }

export function VersionCards({ Component, pageProps }) {  
  return (
    <div className="flex flex-col w-full">
      <main className="flex flex-col flex-1 md:pt-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        { 
          Object.entries(jsonData).map(([name, info]) => {
            // const repoInfo = info as RepoInfo;
            return (
              <Card className="transition-all cursor-pointer hover:scale-[1.05] hover:drop-shadow-lg">
                <CardHeader className="uppercase text-muted-foreground flex flex-row pb-2 space-y-0 space-x-3 align-middle">
                  <CardTitle className="">
                    <Badge className="bg-green-500">v{ info?.version }</Badge>
                  </CardTitle>
                  <CardDescription>{ info?.date }</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="py-6">
                    <StarsIcon className="w-6 h-6 text-yellow-500" />
                    <div className="text-2xl font-bold">{ name }</div>
                  </div>
                  <p className="">{ info?.description }</p>
                </CardContent>
              </Card>
            );
          }
        )}
        </div>
      </main>
    </div>
  )
}
