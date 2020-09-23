import React, { Component } from "react";
import firebase from "./Config/fbconfig"

export const addData = (data) => {
    return () => {
      const firestore = firebase.firestore();
      // const authorId = getState().firebase.auth.uid;
      
      firestore
        .collection("daily_search")
        .add({
          ...data,
          
          date: new Date(),
        })
        .then(() => {
          alert("success")
        })
        .catch((err) => {
         alert("error")
        });
    };
  };
