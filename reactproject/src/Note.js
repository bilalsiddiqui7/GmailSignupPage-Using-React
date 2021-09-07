import React from 'react'
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
}
