import { useState, useEffect } from "react";
import { React } from "react";

import Header from "./header";
import ContestList from "./contest-list";




const App = ({initialData}) => {
    //console.log({initialData});
    const [page, setPage] = useState("contestList");
    
    
    const navigateToContest = () => {
        setPage("contest");
    }
    
    //
    const pageContent = () => {
        switch(page){
            case "contestList":
                return <ContestList initialContests = { initialData.contests } onContestClick={navigateToContest} />
            case "contest":
                return "..."
        }
    }



    return  (
    <div className="container">
        <Header message="Naming Contests" />
        
        { pageContent() }

    </div>
    );
   };

  export default App