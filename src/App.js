import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
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

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app-grid">
          <Navigation />
          <div>
            <Switch>
              <Route path="/add-student">
                <Form />
              </Route>
              <Route path="/manage-student">
                <ManageStudents
                  students={students}
                  clicked={viewHandler}
                  delete={deleHandler}
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
