import React, {Component} from 'react';
import axios from "axios";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import "./CreatePlaylist.css";

let id = 504;

export class CreatePlaylist extends Component{
    constructor(props){
        super(props)
        this.state = { playlists:[]}
        //console.log("pp>> ", props)
    }
    addPlaylist(){
        const playlist = document.getElementById('PlaylistName').value
        if (playlist){
            this.setState({playlists: [...this.state.playlists, playlist]},
                 ()=>console.log(this.state.playlists))
        }
    }

    handleSubmit(event){
        let postURL = "http://localhost:4000/NewPlaylists";
        event.preventDefault();
        alert(event.target.PlaylistName.value);
        //console.log(this.props);
        fetch(`http://localhost:4000/NewPlaylists`,
        {
            method:"POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img : "https://i.picsum.photos/id/1037/5760/3840.jpg",
                header: event.target.PlaylistName.value,
                description: " ",
                link: 10,
                linkId: 101,
                id: id

            })
        }).then(()=>{
            console.log("ana henaaaa");
            id++;
             window.location.reload(false);
    })
            .catch(exception=>console.log(exception))
            
        




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