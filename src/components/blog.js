import "./blogdisplay.css"
import NexaflowInit from "nexaflow-web-sdk";
import { useEffect, useState } from "react";
import BlogDisplay from "./blogdisplay";
import PopUp from "./popup";

function Blog() {
    const [data, setData] = useState();
   

    const apiKey = "4HKDFCwXQK7AM";

    const nexaflowApi = new NexaflowInit(apiKey);

    const getPageByID = async () => {
        const page = await nexaflowApi.getPageByID({
            pageId: "66448422e22f7fb0bb65487b",
            websiteId: "66444fa6e22f7fb0bb654795",
        })
        console.log(page)
        setData(page.kraet_blog)
    };
    useEffect(() => {
        getPageByID();
    }, [])

    return (
        <div className="blog">
            
            <h1 className="blog-head">Check out Our Kraet Blog</h1>
            <div className="blog-content">
                {data && data.length ? data.map((item, index) => {
                    return (
                        <BlogDisplay key={index} item={item} />
                    )
                }) : data && !data.length ? <p>No Data</p> : <p>Loading</p>
                }
            </div>
        </div>
    )
}
export default Blog;