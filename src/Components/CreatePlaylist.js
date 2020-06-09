import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import "./CreatePlaylist.css";

export class CreatePlaylist extends Component{
    constructor(props){
        super(props)
        this.state = { playlists:[]}
    }
    addPlaylist(){
        const playlist = document.getElementById('PlaylistName').value
        if (playlist){
            this.setState({playlists: [...this.state.playlists, playlist]},
                 ()=>console.log(this.state.playlists))
        }
    }

    handleSubmit(event){
        event.preventDefault();

        alert(event.target.PlaylistName.value);
    } 
    render(){
        return(
        <div>
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className = "special_modal"
    
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Playlist
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div className = "container">
                <Row>
                    <Col sm={50}>
                        <Form autoComplete = "off" onSubmit = {this.handleSubmit}>
                            <Form.Group controlId = "PlaylistName">
                                <Form.Label>
                                    PlaylistName
                                </Form.Label>
                                <Form.Control
                                    size = "lg" 
                                    type = "text"
                                    name =  "PlaylistName"
                                    required
                                    placeholder = "New Playlist Name"
                                />
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Button onClick={() => this.addPlaylist()} variant = "success" type = "submit">
                                    Create
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "success" onClick={this.props.onHide}>Cancel</Button>
       
      </Modal.Footer>
    </Modal>
        </div>
        );
    }
}