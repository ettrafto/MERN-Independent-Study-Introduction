// this file is to seed the client with pure html if javascript is disabled
import { fetchContest, fetchContestList } from "../api-client";

import App from "../components/app";
import ReactDOMServer from "react-dom/server";

const serverRender = async (req) => {
    
    const {contestId} = req.params;

    const initialData = contestId
        ? { currentContest: await fetchContest(contestId) }
        : { contests: await fetchContestList()};
    


    const initialMarkup = ReactDOMServer.renderToString(
        <App initialData={ initialData }/>,
    );

    return { initialMarkup, initialData }

};

export default serverRender;