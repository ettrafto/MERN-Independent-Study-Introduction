import { fetchContest } from "../api-client";
import {useState, useEffect} from 'react';
import Header from "./header";

const Contest = ({ initialContest, onContestListClick }) => {
    const [contest, setContest] = useState(initialContest);

    useEffect(() => {

        //if we do not have the contest.name, we do not have the data/havent fetched 
        if (!contest.names){
            fetchContest(contest.id).then((contest)=> {
                setContest(contest);
            });
        }
        
    },[contest.id, contest.names]);
    
    const handleClickContestList = (event) => {
        event.preventDefault();
        onContestListClick();
    }
    
    return (
        <>
            <Header message={contest.contestName}/>
            <div className="contest">
                <div className="title"></div>
                <div className="description">{contest.description}</div>

                <a href="/" className="link" onClick={handleClickContestList}>
                    ContestList</a>
            </div>
        </>
)};

export default Contest;