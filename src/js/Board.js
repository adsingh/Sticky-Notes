import React from 'react'
import Note from './Note'

export default class Board extends React.Component{

    state = {notes : [
        {id : 0 , text: 'Study CLRS'},
        {id : 1 , text: 'Apply for jobs'},
        {id : 2 , text: 'Call Nishi'}
    ]}

    eachNote(note){
        return (
            <Note key={note.id} index={note.id}>{note.text}</Note>
        )
    }


    render(){

        return (
            <div className='board'>
                {this.state.notes.map(this.eachNote)}
            </div>
        )

    }

}