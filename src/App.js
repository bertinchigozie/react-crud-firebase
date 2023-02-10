import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Navigation from "./components/pages/Navigation";
import ViewStudents from "./components/pages/ViewStudents";
import Form from "./components/ui/Form";
import ManageStudents from "./components/ui/ManageStudents";
import { db } from "./firebase.config";

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [secondAddress, setSecondAddress] = useState("");
  const [classentered, setClassEntered] = useState(undefined);
  const [rollNumber, setRollNumber] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [division, setDivision] = useState(undefined);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [showError, setShowError] = useState(false);

  const dataCollection = collection(db, "crud");

  useEffect(() => {
    const getStudents = async () => {
      const dataStud = await getDocs(dataCollection);
      setStudents(dataStud.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudents();
  });

  const viewHandler = (id) => {
    const docCollection = doc(db, "crud", id);

    const getOneStudent = async () => {
      const dataStud = await getDoc(docCollection);
      if (dataStud.exists()) {
        const view = !show;
        setShow(view);
        setStudent(dataStud.data());
      }
    };
    getOneStudent();
  };
  const closeView = () => {
    setShow(false);
  };

  const deleHandler = (id) => {
    const docCollection = doc(db, "crud", id);

    const deleteOneStudent = async () => {
      await deleteDoc(docCollection);
    };
    deleteOneStudent();
  };
  const updateHandler = (id) => {
    const docCollection = doc(db, "crud", id);

    // const updatedStudent = async () => {
    //   const dataStud = await updateDoc(docCollection, { capital: true });
    //   console.log(dataStud);
    // };
    // updatedStudent();
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app-grid">
          <Navigation />
          <div>
            <Switch>
              <Route exact path="/">
                <Form />
              </Route>
              <Route path="/manage-student">
                <ManageStudents
                  students={students}
                  clicked={viewHandler}
                  delete={deleHandler}
                  updated={updateHandler}
                />
              </Route>
            </Switch>
          </div>
          <ViewStudents data={student} show={show} close={closeView} />
        </div>
      </div>
    </Router>
  );
}

export default App;
