 
 

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Division } from "@/types";

export const title = "Image Card";

 interface DivisionCardProps {
  division: Division;
}

const DivisionCard : React.FC<DivisionCardProps>= (division) => (

  <Card className="w-full max-w-md overflow-hidden">
    <CardHeader>
      <CardTitle>3-Bedroom House</CardTitle>
      <CardDescription className="sr-only">
        A luxurious 3-bedroom house with a modern design.
      </CardDescription>
    </CardHeader>
    <CardContent className="p-4 ">
       
      <img
        alt=""
        height={1380}
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={2070}
        className="rounded-lg"
      />
    </CardContent>
  </Card>
);

export default DivisionCard;
