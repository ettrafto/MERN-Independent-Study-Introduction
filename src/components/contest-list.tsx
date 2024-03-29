import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";
import { fetchContestList } from "../api-client";
import Header from "./header";

const ContestList = ( {initialContests, onContestClick} ) => {
    const [contests, setContests] = useState(initialContests ?? []);

    useEffect(()=>{
        //fetch contests is an axios call located in the api-client 
        
        if(!initialContests){
            fetchContestList().then((contests)=> {
                setContests(contests);
            });
        }
    },
    //dependency array 
    [initialContests]
    );
    return (
        <>
            <Header message="Naming Contests" />

            <div className="contest-list">
                {contests.map((contest)=> {
                    return (<ContestPreview key = {contest.id} contest = { contest } onClick={onContestClick} />
                    );
                })}
            </div>
        </>
    );
};

export default ContestList;