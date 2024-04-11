import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc, getDocs , query} from "firebase/firestore"

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBuY7Bg4fY71R9DXZfndlcIWM4qhuaQAfw",
    authDomain: "dgms-e3fd3.firebaseapp.com",
    projectId: "dgms-e3fd3",
    storageBucket: "dgms-e3fd3.appspot.com",
    messagingSenderId: "439815097396",
    appId: "1:439815097396:web:991791155123286925ce61"
  };

export const useFirebase =()=> useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebaseApp);
// fireStore.settings({
//     experimentalForceLongPolling: true,
// })
// const fireStore = initializeFirestore(firebaseApp,{
//     experimentalAutoDetectLongPolling:true,
//     experimentalLongPollingOptions:{
//         timeoutSeconds:25
//     }
// });

export const FirebaseProvider = (props) =>{

    const handleCreateNewReq=async(nameT,nameV,nameD,plantCode,plantName,fromDate,toDate,currentOfficer)=>{
        const path = 'dgms/'; //+ nameT + '/' + nameV + '/'
        return await addDoc(collection(fireStore,path),{
            nameT,
            nameV,
            nameD,
            plantCode,
            plantName,
            fromDate,
            toDate,
            currentOfficer,
        });
    }

    const listAllDriver=async()=>{

        const q = query(collection(fireStore, "dgms")); //,"AADI INDANE GAS SERVICE","UP94T5310"
        const querySnapshot = await getDocs(q);

        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });

        return querySnapshot;
    }

    return (
        <FirebaseContext.Provider value={{handleCreateNewReq,listAllDriver,}}>
            {props.children}
        </FirebaseContext.Provider>
    )
};