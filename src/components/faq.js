import NexaflowInit from "nexaflow-web-sdk";
import { useEffect, useState } from "react";
import FaqDisplay from "./faqdisplay";
import { useNavigate } from "react-router";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Faq() {
    const [data, setData] = useState();
    const navigate = useNavigate();

    const apiKey = "4HKDFCwXQK7AM";

    const nexaflowApi = new NexaflowInit(apiKey);

    const getPageByID = async () => {
        const page = await nexaflowApi.getPageByID({
            pageId: "66444ffee22f7fb0bb65479d",
            websiteId: "66444fa6e22f7fb0bb654795",
        })
        console.log(page)
        setData(page.faq)
    };
    useEffect(() => {
        getPageByID();
    }, [])


    return (
        <div className="faq-page">
            <h1>FAQs</h1>
            <p className="title">Questions about Juna? Explore our FAQs for answers.</p>
            <div className="faq-content">
                {data && data.length ? data.map((item, index) => {
                    return (
                        <FaqDisplay key={index} question={item.question} answer={item.answer} />
                    )
                }) : data && !data.length ? <p>No Data</p> : <p>Loading</p>
                }
            </div>
            <div onClick={() => navigate("/blog")}>
                <NavigateNextIcon className="navigate-btn" />
            </div>

        </div>
    )
}
export default Faq;