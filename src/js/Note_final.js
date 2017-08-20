import React from 'react'

export default class Note extends React.Component{

            constructor(){
                super();
                this.state = {editing:false};
            }

            componentWillMount(){
                this.style = {
                    right : this.randomBetween(0, window.innerWidth - 150, 'px'),
                    top : this.randomBetween(0, window.innerHeight - 150, 'px')
                }
                // console.log(this.style);
            }

            componentDidUpdate(){
                if(this.state.editing){
                    this.refs.newText.focus();
                    this.refs.newText.select();
                }
            }

            shouldComponentUpdate(nextProps, nextState){
                return this.props.children !== nextProps.children || this.state !== nextState;
            }

            randomBetween(x, y, unit){
                return (x + Math.ceil(Math.random() * (y-x))) + unit
            }

            edit(){
                this.setState({editing : true});
            }

            save(){

                var props = this.props;
                console.log(props);
                console.log(this.refs.newText.value);
                props.onChange(this.refs.newText.value, props.index);
                this.setState({editing : false});
            }

            remove(){
                this.props.onRemove(this.props.index);
            }

            renderForm(){
                return (
                    <div className="note" style={this.style}>
                        <textarea ref="newText"
                        defaultValue={this.props.children}></textarea>
                        <button onClick={this.save.bind(this)}>SAVE</button>
                    </div>

                    )
            }

            renderDisplay(){
                return (
                    <div className="note" style={this.style}>
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