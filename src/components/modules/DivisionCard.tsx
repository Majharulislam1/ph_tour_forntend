import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Division_single } from "@/types"

 

interface DivisionCardProps {
  division: Division_single
}



const DivisionCard: React.FC<DivisionCardProps> = ({division}) => {

 



  return (
      <Card className="w-full max-w-md overflow-hidden">
      <CardHeader>
        <CardTitle>{division.name}</CardTitle>

        {division.description && (
          <CardDescription className="sr-only">
            {division.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <img
          src={division.thumbnail}
          alt={division.name}
          className="rounded-lg"
        />
      </CardContent>
    </Card>
  )
}

export default DivisionCard
