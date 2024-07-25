import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
     
    function handleChange(event){
    const {name, value} = event.target;

    
    setNote(prevNote =>{
       return { ...prevNote,
        [name]: value,
    };
    }) 
}


    function add(event){
        props.onAdd(note);
        setNote( {
            title: "",
            content: ""
        })
        event.preventDefault();
      }


  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <Zoom in={true}><Fab onClick={add}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );

}
export default CreateArea;