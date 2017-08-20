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

    componentDidUpdate(){
        if(this.state.editing){
            this.refs.newText.focus();
            this.refs.newText.select();
        }
    }
    getRandomPosition(x,y,unit){
        return (x + Math.ceil(Math.random() * (y-x))) + unit
    }

    edit(){
        
        this.setState({ editing : true});
    }

    remove(){
        this.props.onRemove(this.props.index);
    }

    save(){
        // alert('saving')
        this.props.onChange(this.refs.newText.value, this.props.index)
        this.setState({editing : false})

    }

    renderForm(){
        return (
            <div className='note' style={this.style}>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
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