import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddIcon from '@mui/icons-material/Add';
import "./faqdisplay.css"
import { Collapse, ListItemText } from '@mui/material';
import { useState } from 'react';
function FaqDisplay({ question, answer }) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='faq'>
            <div className='faq-question' onClick={handleClick}>
                {open ? <RemoveRoundedIcon /> : <AddIcon />}
                <div>
                    <ListItemText className="questions" primary={question} />
                </div>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div sx={{ pl: 4 }}>
                    <ListItemText className="answer" primary={answer} />
                </div>
            </Collapse>
        </div>
    )
}
export default FaqDisplay;