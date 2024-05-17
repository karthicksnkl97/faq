import { useState } from "react";
import "./blogdisplay.css"
import PopUp from "./popup";
function BlogDisplay({item}){
    const {image, title, date, description} = item;
    const [paraPopUp, setParaPopUp] = useState(false);
    return (
        <div className="blog-popup">
            {paraPopUp ? <PopUp setParaPopUp={setParaPopUp} item={item} /> : <></>}
        <div className="blog-display">
            <div><img className="image-blog" src={image} alt="BlogImage" /></div>
            <div className="blog-display-content">
                <div className="blog-display-head"> <h2 onClick={() =>setParaPopUp(true)}>{title}</h2></div>
                <div className="blog-display-text"> <p >{date}</p></div>
                <div className="blog-display-des"><p className="blog-readmore">{description}</p></div> 
            </div>
            </div>

        </div>
    )
}
export default BlogDisplay;