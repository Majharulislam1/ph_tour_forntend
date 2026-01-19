import DivisionCard from "@/components/modules/DivisionCard";
import AddDivisionModal from "@/components/modules/Tour/AddDivisionModal";
import { useGetDivisionsQuery } from "@/Redux/features/division/division.api";
import type { Division_single } from "@/types";




const Add_Division = () => {


    const { data } = useGetDivisionsQuery(undefined);
 
    console.log(data);
    
    return (
        <div >
            <h1> This is AddDivision component </h1>
            <AddDivisionModal  />

            <div className="flex justify-between flex-wrap gap-4 mt-4">

                {
                    data?.map((division:Division_single) => (

                        <DivisionCard key={division._id} division={division} />


                    ))
                }

            </div>





        </div>
    );
};

export default Add_Division;