import React,{useState} from 'react'
import '../CSS/serviceform.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const startNum = 1000;
var NextNum = startNum;

 const BookAppoint=()=> {
    const navigate= useNavigate();
    const[fullName,setFullName] = useState({
        username : "",
        service : "",
    });
    const inputEvent=(event)=>{
        const{name, value} = event.target;
        setFullName((preValue) =>{
            return{
                ...preValue,
                [name] : value,
            };
        });
        };
    const notify = (event) =>{
        event.preventDefault();
        
        const userData = {
            username : fullName.username,
            service : fullName.service
        };
       if(!userData.carmodel && !userData.service)
       {
         return alert("Invalid Input");
       }
       else
       { axios.post('http://localhost:5000/service',userData).then((res)=>{
            alert(res.data.message);
            navigate("/")
        }).catch((err)=>{
            var data = "";
            NextNum = NextNum + 1;
            data = userData.username+ NextNum + userData.service;
            alert("Your appointment is booked. Your appointment number is " + data);
            console.log(err);
        }
        );}
    };

  return (
    
    <>
    <hr></hr>
            <div class="Wr">
                            <marquee behavior="" direction=""><h2>Book Appointment for Showroom visit!!</h2></marquee>
                        </div>
            <div class="MAIN">
                <div id="form">
                    <form onSubmit={notify}>
                        <div class="form-group">
                            <label id="writetext" for="Car Model">Customer Name</label>
                            <input type="text" className="form-control" id="Car Model" placeholder="Enter Name" name='username' onChange={inputEvent} value={fullName.username}/>
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="service">Car Model</label>
                            <select name="service" id="service" className="form-control" onChange={inputEvent} value={fullName.service} defaultValue={fullName.service}>
                                <option value="">Select Model</option>
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
                            <label id="writetext" for="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" className="form-control" />
                        </div>
                        <div class="form-group-button">
                            <button type="submit" className="btn btn-primary">Book Appointment</button>
                        </div>
                    </form>




                </div>

            </div>
            <hr></hr>
    </>
  );
}
export default BookAppoint;