import React, { Component } from 'react';
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class JoinRoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: "",
            error: ""
        };
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._roomButtonPressed = this._roomButtonPressed.bind(this)
    }

    render() {
        return (
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} align="center">
                    <Typography varient="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        error={this.state.error}
                        label="code"
                        placeholder="Enter a Room Code"
                        value={ this.state.roomCode }
                        helpertext={this.state.error}
                        variant="outlined"
                        onChange={ this._handleTextFieldChange }
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button varient="contained" color="primary" onClick={this._roomButtonPressed}>
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button varient="contained" color="secondary" to="/" component={ Link }>
                        Back
                    </Button>
                </Grid>
            </Grid>
        )
    }

    _handleTextFieldChange(e) {
        this.setState({
            roomCode: e.target.value
        })
    }

    _roomButtonPressed() {
        // starting with _ 
        console.log(this.state.roomCode);
    }
}