import React from 'react'
import '../CSS/serviceform.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>{
    try{
        alert("sucees");
    }catch{
        alert("unsucess");
    }
}

export default function serviceform() {

    return (
        <>
        <hr></hr>
            <div class="Wr">
                            <marquee behavior="" direction=""><h2>Online appointment for Car Service</h2></marquee>
                        </div>
            <div class="MAIN">
                <div id="form">
                    <form action="">
                        <div class="form-group">
                            <label id="writetext" for="Car Model">Car Model</label>
                            <input type="text" className="form-control" id="Car Model" placeholder="Enter Car Model" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="service">Service</label>
                            <select name="service" id="service" className="form-control">
                                <option value="">Select Service</option>
                                <option value="oil-change">Oil Change</option>
                                <option value="tire-replacement">Tire Replacement</option>
                                <option value="battery-replacement">Battery Replacement</option>
                                <option value="brake-repair">Brake Repair</option>
                                <option value="engine-repair">Engine Repair</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label id="writetext" for="date">Date</label>
                            <input type="date" name="date" id="date" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="time">Time</label>
                            <input type="time" name="time" id="time" className="form-control" />
                        </div>

                        <div class="form-group">
                            <label id="writetext" for="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" className="form-control" />
                        </div>
                        <div class="form-group-button">
                            <button type="submit" onclick={notify} className="btn btn-primary">Book Appointment</button>
                        </div>
                    </form>




                </div>

            </div>
            <hr></hr>
            

        </>
    );
    
    
}


