import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './NewNote.css';

export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.file = null;
    this.state = {
      isLoading: null,
      content: ''
    };
  }
  validateForm(){
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]:event.target.value}
    );
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleFileChange = event =>{
    this.file = event.target.files[0];
  }
  handleSubmit = event =>{
    event.preventDefault();
  }

  render(){
    return(
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlID="content">
            <FormControl
            onChange={this.handleChange}
            value={this.state.content}
            componentClass = "textarea"
            />
          </FormGroup>
          <FormGroup controlID="file">
            <ControlLabel>Attachment</ControlLabel>
              <FormControl
                onChange={this.handleFileChange} type="file"
                />
          </FormGroup>
        </form>
      </div>
    );
  }
}
