import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'
import Grid from '@material-ui/core/Grid';


export default function AllCards() {
    const baseURL = `http://localhost:5000/api/transactions`
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function getTransactions() {
            try {
                const response = await axios.get(baseURL);
                setTransactions(response.data.ALL_TRANSACTIONS)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getTransactions()
    }, [])


    return (
        <div>
            <h4>Transactions with their respective cards</h4>
            <Grid item sm = {12} xs ={12}>
                <table>
                    <thead>
                        <tr>
                            <th>UUID</th>
                            <th>Transport fare</th>
                            <th>New balance</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => {
                            return (
                                <tr key={transaction._id}>
                                    <td>{transaction.UUID}</td>
                                    <td>{transaction.transport_fare}</td>
                                    <td>{transaction.new_balance}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Grid>
        </div>
    )
}