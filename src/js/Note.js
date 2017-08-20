import React from 'react'
import Draggable from 'react-draggable'

export default class Note extends React.Component{

    state = {editing : false}

    componentWillMount(){
        this.style = {
            right : this.getRandomPosition(0, window.innerWidth - 150, 'px'),
            top   : this.getRandomPosition(0, window.innerHeight - 150, 'px')
        }
    }

    getRandomPosition(x,y,unit){
        return (x + Math.ceil(Math.random() * (y-x))) + unit
    }

    edit(){
        this.setState({ editing : true});
        // alert('Editing')
    }

    remove(){
        alert('removing')
    }

    save(){
        // alert('saving')
        this.setState({editing : false})

    }

    renderForm(){
        return (
            <div className='note' style={this.style}>
                <textarea></textarea>
                <button onClick={this.save.bind(this)}>SAVE</button>
            </div>
        )
    }

    renderDisplay(){
        return (
            <div className='note' style={this.style}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit.bind(this)}>EDIT</button>
                    <button onClick={this.remove.bind(this)}>DEL</button>
                </span>
            </div>
        )
    }

    render(){
        return (
            <Draggable>
                {this.state.editing ? this.renderForm() : this.renderDisplay()}
            </Draggable>
        )
    }
}