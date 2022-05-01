import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyCM2pByh7rW8pud_BMp6FWvCcpJK2B9Xo4",
		authDomain: "app-chat-ce269.firebaseapp.com",
		projectId: "app-chat-ce269",
		storageBucket: "app-chat-ce269.appspot.com",
		messagingSenderId: "289472755826",
		appId: "1:289472755826:web:33dde492fbe38f274a2aeb",
	})
	.auth();

    