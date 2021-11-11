import React, { useState } from "react";
import AddFood from "../AddFood/AddFood";
import BottomPart from "../BottomPart/BottomPart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ManageFood from "../ManageFood/ManageFood";
import ManageOrder from "../ManageOrder/ManageOrder";
import './Admin.css'

const Admin = () => {

    const [control, setControl] = useState("addServices");
  return (
    <div>
      <Header></Header>
      
      <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 ">
                <div className="admin-area p-1">
                  <h6>Dashboard</h6>
                  <div className="all-menu mt-5">
                    <li
                      onClick={() => setControl("addFood")}
                      className="admin-menu p-2"
                    >
                      Add Foods
                    </li>

                    <li
                      onClick={() => setControl("manageFood")}
                      className="admin-menu p-2"
                    >
                      Manage Food
                    </li>
                    <li
                      onClick={() => setControl("mangeOrder")}
                      className="admin-menu p-2"
                    >
                      Manage Orders
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center  text-center">

              <h2 className="text center">Welcome!</h2>

                {control === "mangeOrder" && <ManageOrder></ManageOrder>}
                {control === "addFood" && <AddFood></AddFood>}
                {control === "manageFood" && <ManageFood></ManageFood>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <BottomPart></BottomPart>
    </div>
  );
};

export default Admin;
