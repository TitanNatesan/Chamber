import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MembershipForm from "./page/MembershipForm";
import MyComponent from "./page/Home";
import MembershipForm2 from "./page/Lifemembership";
import Letter from "./page/Letter";
import Login from "./page/Login";
import Signup from "./page/Signup";
import MembersPage from "./page/Members";
import UserProfile from "./page/User";
import NotFound from "./page/NotFound";
import PaymentPage from "./page/Paymentpage"; 
import EventPage from "./page/Event";
import EventDetails from "./page/Eventdetails";
import MembersDetailsTable from "./page/Membersdetailadmin";
import ServiceDetails from "./page/ServiceDetails";
import ContactPage from "./page/Contact";
import Adminconf from "./page/AdminConf";
import AdminDetailsPage from "./page/Admindetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseUrlProvider } from "./context";

function App() {
  return (
    <BaseUrlProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/membership" element={<MembershipForm />} />
        <Route path="/membership2" element={<MembershipForm2 />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Members" element={<MembersPage />} />
        <Route path="/User" element={<UserProfile />} />
        <Route path="/Notfound" element={<NotFound />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/admintable" element={<MembersDetailsTable />} />
        <Route path="/Servicedetails" element={<ServiceDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Adminconf" element={<Adminconf />} />
        <Route path="/admindetails/:id" element={<AdminDetailsPage />} />
      </Routes>
    </Router>
    </BaseUrlProvider>
  );
}

export default App;
