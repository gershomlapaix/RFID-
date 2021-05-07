import React, { useState } from 'react';
import { post } from 'axios';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop:'5em'    
    },
    media: {
        height: 140,
    },
    input:{
        border:"1px solid grey",
        padding:'5px',
        marginBottom:'3px',
        borderRadius:'5px',
    },
    btn:{
        border:'1px solid red',
        backgroundColor:'red'
    }
});


export default function AddTransaction() {
    const classes = useStyles();
    const baseURL = `http://localhost:5000/api/rfid`
    const initialState = { UUID: '', customer: '', initial_balance: 0 }
    const [newCard, setNewCard] = useState(initialState)

    const handleChange = (event) => {
        setNewCard({ ...newCard, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newCard.UUID || !newCard.customer || !newCard.initial_balance) return
        async function postNewCard() {
            try {
                const response = await post(baseURL, newCard)
                console.log(response.data)
                setNewCard(initialState)
            } catch (err) {
                return err
            }
        }
        postNewCard()
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h3>Transaction</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>UUID: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="UUID"
                                    value={newCard.UUID}
                                    onChange={handleChange}
                                    className = {classes.input}
                                />
                            </div>

                            <div className="form-group">
                                <label>Names: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="customer"
                                    value={newCard.customer}
                                    onChange={handleChange}
                                    className = {classes.input}
                                />
                            </div>

                            <div className="form-group">
                                <label>Initial Balance: </label>
                                <input type="number"
                                    required
                                    className="form-control"
                                    name="initial_balance"
                                    value={newCard.initial_balance}
                                    onChange={handleChange}
                                    className = {classes.input}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Record Card" className={classes.btn} />
                            </div>
                        </form>
                    </CardContent>
                </CardActionArea>                
            </Card>


        </div>
    )
}