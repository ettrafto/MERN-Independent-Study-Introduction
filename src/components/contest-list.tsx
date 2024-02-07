import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";
import { fetchContests } from "../api-client";

const ContestList = ( {initialContests, onContestClick} ) => {
    const [contests, setContests] = useState(initialContests);

    useEffect(()=>{
        //fetch contests is an axios call located in the api-client 
        //fetchContests().then((contests)=> {
        //    setContests(contests);
        //});
    },
    //dependency array 
    []
    );
    return (
        <div className="contest-list">
            {contests.map((contest)=> {
                return (<ContestPreview key = {contest.id} contest = { contest } onClick={onContestClick} />
                );
            })}
        </div>

    );
};

export default ContestList;