import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetAllTourTypeQuery } from '@/Redux/features/tour/tour.api';
import {  Trash2 } from 'lucide-react';


const Add_Tour_Type = () => {

    const { data } = useGetAllTourTypeQuery(undefined);

   

    return (
        <div className="w-full max-w-7xl mx-auto px-5">
            <div className="flex justify-between my-8">
                <h1 className="text-xl font-semibold">Tour Types</h1>

            </div>
            <div className="border border-muted rounded-md">
                 <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: { name: string ,_id:string } ) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell>
                  <Button size="sm">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
            </div>
        </div>
    );
};

export default Add_Tour_Type;