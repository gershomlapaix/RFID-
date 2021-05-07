import React, { useState } from 'react';
import { post } from 'axios';

export default function AddTransaction(props) {
    const baseURL = `http://localhost:5000/api/transactions`
    const initialState = { UUID: '', transport_fare: 0 }
    const [newTransaction, setNewTransaction] = useState(initialState)

    const handleChange = (event) => {
        setNewTransaction({ ...newTransaction, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTransaction.UUID || !newTransaction.transport_fare) return
        async function postTransaction() {
            try {
                const response = await post(baseURL, newTransaction)
                console.log(response.data)
            }catch(err){
                return err
            }
        }
        postTransaction()
    }   

    return(
        <div>
                <h3>Transaction</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>UUID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            name = "UUID"
                            value={newTransaction.UUID}
                            onChange={handleChange}
                        />
                    </div>                    

                    <div className="form-group">
                        <label>Transport fare: </label>
                        <input type="number"
                            required
                            className="form-control"
                            name = "transport_fare"
                            value={newTransaction.transport_fare}
                            onChange={handleChange}
                        />
                    </div>                    
                    <div className="form-group">
                        <input type="submit" value="PAY BILL" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
}