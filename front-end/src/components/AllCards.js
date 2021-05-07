import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'
import Grid from '@material-ui/core/Grid';


export default function AllCards() {
    const baseURL = `http://localhost:5000/api/rfid`
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function getCards() {
            try {
                const response = await axios.get(baseURL);
                setCards(response.data.ALL_REGISTRATIONS)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        getCards()
    }, [])


    return (
        <div>
            <h4>All registered Cards</h4>

            <Grid item sm = {12} xs ={12}>
                <table>
                    <thead>
                        <tr>
                            <th>UUID</th>
                            <th>Names</th>
                            <th>Balance</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cards.map((card) => {
                            return (
                                <tr key={card._id}>
                                    <td>{card.UUID}</td>
                                    <td>{card.customer}</td>
                                    <td>{card.initial_balance}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Grid>
        </div>
    )
}