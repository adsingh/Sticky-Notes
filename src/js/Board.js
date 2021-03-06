import React from 'react'
import Note from './Note'

export default class Board extends React.Component{

    state = {
              notes : [],
              hover : false
            }

    style = function(){
        var style = {
            background : 'none',
            border : 0,
            fontSize: 60
        }
        if(this.state.hover){
            style.color = 'black';
        }
        else{
            style.color = 'white';
        }
        return style;
    }

    getNextId(){
        this.nextId = this.nextId || 0;
        return this.nextId++;
    }

    add(text="new note"){
        var notes = [ 
            ...this.state.notes,
            {
                id:this.getNextId(), 
                text:text}
        ];
        this.setState({notes:notes,hover:false});
    }

    update(newText, id){
        var notes = this.state.notes.map((note)=>{
            return note.id !== id ? 
                note :
                {
                    ...note,
                    text : newText
                }
        });
        this.setState({notes});
    }

    remove(id){
        
        var notes = this.state.notes.filter(note=>{ 
            
            return note.id !== id;
         });
        
        this.setState({notes});
    }

    eachNote(note){
        return (
            <Note key={note.id} index={note.id} onChange={this.update.bind(this)} onRemove={this.remove.bind(this)} >{note.text}</Note>
        )
    }

    onMouseOver(){
        this.setState({hover : true})
    }

    onMouseOut(){
        this.setState({hover : false})
    }


    render(){

        return (
            <div className='board'>
                {this.state.notes.map(this.eachNote.bind(this))}
                <button style={this.style()} 
                        onClick={()=> this.add()}
                        onMouseOver={this.onMouseOver.bind(this)}
                        onMouseOut={this.onMouseOut.bind(this)}>
                        <i className="fa fa-plus-circle"></i></button>
            </div>
        )

    }

}