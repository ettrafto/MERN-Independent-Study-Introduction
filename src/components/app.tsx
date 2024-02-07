import { useState, useEffect } from "react";
import { React } from "react";

//component files
import ContestList from "./contest-list";
import Contest from "./contest";




const App = ({initialData}) => {
    //console.log({initialData});
    const [page, setPage] = useState<"contestList" | "contest">(
        initialData.currentContest ? "contest" : "contestList",);
    const [currentContest, setCurrentContest] = useState<object | undefined>(
        initialData.currentContest);
    
    //onpopstate manages page history
    useEffect(() => {
        window.onpopstate = (event) =>{
            const newPage = event.state?.contestId ? "contest" : "contestList";
            setPage(newPage);
            setCurrentContest({id: event.state?.contestId});
        };
    },[]);

    const navigateToContest = (contestId) => {
        window.history.pushState({contestId},"",`/contest/${contestId}`)
        setPage("contest");
        setCurrentContest({id: contestId});
    }

    const navigateToContestList = () => {
        window.history.pushState({},"","/")
        setPage("contestList");
        setCurrentContest(undefined);
    }

    //
    const pageContent = () => {
        switch(page){
            case "contestList":
                return <ContestList initialContests = { initialData.contests } onContestClick={navigateToContest} />
            case "contest":
                return <Contest initialContest={currentContest} onContestListClick={navigateToContestList}/>;
        }
    }



    return  (
    <div className="container">
        
        { pageContent() }

    </div>
    );
   };

  export default App