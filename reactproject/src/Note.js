/*import React from 'react'
import '../src/Note.css'

export const Note = () => {
    return (
        <div>
            <div id="container">
                <form id="form_main">
                <input type="text" placeholder="Title"></input>
                <textarea rows="" column="" placeholder="Take a note ..."></textarea>
                
                </form>
            </div>
        </div>
    )
}*/
import React, { Component } from 'react'
import '../src/Note.css'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import CollaboratorIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
class Note extends Component {
    constructor(props) {
        super(props)

        this.state = {
            condition: true
        }
    }
    render() {
        if (this.state.condition) {
            return <div>
                <div id="container">
                    <form id="form_main">
                        <input type="text" onClick={() => this.setState({ condition: this.state.condition = false })} placeholder="Take a note ..."></input>
                        <span id='icons_note'>
                            <CheckBoxOutlinedIcon />
                            <BrushIcon />
                            <ImageOutlinedIcon />
                        </span>
                    </form>
                </div>
            </div>
        }
        else {
            return <div>
                <div id="container">
                    <form id="form_main">
                        <input type="text" placeholder="Title"></input>
                        <textarea rows="" column="" placeholder="Take a note ..."></textarea>
                        <div id="icons_note_down">
                            <AddAlertOutlinedIcon />
                            <CollaboratorIcon />
                            <ColorLensRoundedIcon />
                            <ImageOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <MoreVertOutlinedIcon />
                        </div>

                    </form>
                </div>
            </div>
        }
    }
}

export default Note

