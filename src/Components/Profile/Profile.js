import React from 'react';
import useAuth from '../../Hooks/useAuth';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Profile = () => {

    const {user} = useAuth();
    return (
        <div>
            <Header></Header>
            <div style={{
                backgroundColor: 'cadetblue',
                padding: '6px'
            }} className=" w-50 mx-auto">
                <h5 className="text-center text-dark">Hi!!!!</h5>
                
                <h5 className="text-center text-dark">{user?.email}</h5>

                <h5 className="text-center text-dark">Update Your Profile</h5>
                <div className="mb-3">
                <label  htmlFor="formGroupExampleInput" className="form-label">First Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" size="30"/>
                </div>
                <div className="mb-3">
                <label  htmlFor="formGroupExampleInput2" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
                </div>
                <div className="mb-3">
                <label  htmlFor="formGroupExampleInput2" className="form-label">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Address"/>
                </div>
                <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Phone No</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Number"/>
                </div>
                <button className="btn btn-success">Update</button>
            </div>
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Profile;