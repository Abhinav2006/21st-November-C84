import React from 'react';
import { Text, View, StyleSheet } from 'react-navigation';
import db from '../config';
import firebase from 'firebase';

export default class MyDonations extends React.Component{
    constructor(){
        super();
        this.state = {
            donorID: firebase.auth().currentUser.email,
            donorName: "",
            AllDonations: []
        }
        this.requestref = null
    }

    componentDidMount(){
        this.getDonorDetails(this.state.donorID)
        this.getAllDonations()
    }

    getDonorDetails =(donorID)=>{
        db.collection('user').where("emailID", "==", this.state.donorID )
    }

    render(){
        return(

        )
    }
}