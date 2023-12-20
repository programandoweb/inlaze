// components/MessageList.js
import React from 'react';
import { Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MessageList = ({ messages,handleDelete }) => {

    

    return (
        <List>
        {messages.map((message,key) => (
            <Paper key={key} sx={{mb:2}}>
                <ListItem  alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={message&&message.autor&&message.autor.name} src={(message&&message.autor&&message.autor.avatar_fullurl)||message.senderAvatar} />
                </ListItemAvatar>
                <ListItemText
                    
                    secondary=  
                                { 
                                    <Grid container>
                                        <Grid item xs={10}>
                                        <React.Fragment>
                                            <Typography variant="subtitle1">
                                                {message&&message.autor&&message.autor.name}        
                                            </Typography>                    
                                        </React.Fragment>
                                            {message.mensaje}
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            { message.created_at }
                                            <Grid>
                                                <IconButton onClick={()=>handleDelete(message)}>
                                                    <DeleteForeverIcon sx={{fontSize:30}}/>
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                }
                />
                </ListItem>
            </Paper>
        ))}
        </List>
    );
};

export default MessageList;
