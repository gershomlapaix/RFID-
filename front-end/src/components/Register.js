import React, { useState } from 'react';
import { post } from 'axios';

export default function AddTransaction(props) {
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
            } catch (err) {
                return err
            }
        }
        postNewCard()
    }

    return (
        <div>
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
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Record Card" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}