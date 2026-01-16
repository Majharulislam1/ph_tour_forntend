import DivisionCard from "@/components/modules/DivisionCard";
import AddDivisionModal from "@/components/modules/Tour/AddDivisionModal";
import { useGetDivisionsQuery } from "@/Redux/features/division/division.api";
 



const Add_Division = () => {


    const { data } = useGetDivisionsQuery(undefined);

    console.log(data);

    return (
        <div>
            <h1> This is AddDivision component </h1>
            <AddDivisionModal />

            {
                data?.map((division) => (
                    <DivisionCard key={division._id} division={division} />
                ))
            }

        </div>
    );
};

export default Add_Division;