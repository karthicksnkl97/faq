import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "./popup.css"
function PopUp({ setParaPopUp, item }) {
    return (
        <div className="popup">
            <div className='popup-show'>
                <div className='popup-heading'>
                    <div  className='popup-title'><h1>{item.title}</h1></div>
                    <div className='closeicon' onClick={() => setParaPopUp(false)}> <CloseRoundedIcon /></div>
                </div>
                <div className="blog-display-text"> <p >{item.date}</p></div>
                <img className='popup-image' src={item.image}  alt='image'/>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
export default PopUp;