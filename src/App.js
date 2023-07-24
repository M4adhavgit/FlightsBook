
import React from "react"
import {Component} from "react"
import "./App.css"






class App extends Component{
  
    state={ data: [],fromValue:"",toValue:"",dateValue:"", persons:1,Clicked:false,
  returnValue:"",oneway:"",multi:"",nearby:"",Delay:"",Direct:""

  }

    componentDidMount(){
       this.getFlightDetails()
    }

    getFlightDetails =async ()=>{
        
        console.log("Hi")
        const response= await fetch("db.json")
        const FetchedData= await response.json()
       

        this.setState({data:FetchedData})
       
    }

    fromChange=(event)=>{
        this.setState({fromValue:event.target.value})
    }
   
    toChange=(event)=>{
        this.setState({toValue:event.target.value})
    }

    departDate=(event)=>{
        this.setState({dateValue:event.target.value})
    }

    totalPersons=(event)=>{
        this.setState({persons:event.target.value})
    }
    changeRender=(event)=>{
      this.setState(preState=>({Clicked:!preState.Clicked}))
    }

    returnFlight=(event)=>{
      this.setState({returnValue:event.target.value})
    }
    oneWayFlight=(event)=>{
      this.setState({oneway:event.target.value})
    }
    multiCity=(event)=>{
      this.setState({multi:event.target.value})
    }

    addNearBy=(event)=>{
      this.setState({nearby:event.target.value})

    }

    delayFlights=(event)=>{
      this.setState({Delay:event.target.value})
    }
   
    directFlights=(event)=>{
      this.setState({Direct:event.target.value})
    }

  


    render(){
        const {data,fromValue,dateValue,toValue,persons,Clicked, returnValue,oneway,multi,nearby,Delay,Direct}=this.state
      const flightData=data.find((each)=>each.From===fromValue && each.To===toValue)
     const {Flight1}={...flightData}
        return(<>
            <div className="container ">
          <div className="d-flex align-items-center justify-content-between">
            <img src="https://i.postimg.cc/Jz07Kvwd/flights-logo.png" width="150" height={120} alt="logo"/>
            <div className="d-none d-xl-flex align-items-center mt">
            <p className="fw-bold text-primary m-0">Login</p>
            <input type="text" placeholder="ENGLIH(UK)" className="form-controls mx-2"/>
            <div className="btn btn-outline-primary fw-bold">Login</div>
            </div>
          </div>
          <div className="btn btn-primary fw-bold ml">Flights</div>
          <div className="btn btn-dark fw-bold ml">Hotels</div>
          <div className="btn btn-dark fw-bold ml">Car Hire</div>
        </div>
        <div className="position-relative  ">

            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matterhorn_sunset_2016_%28Unsplash%29.jpg" alt="backGroundImg" className="img-fluid mr-20px  d-none d-xl-block ml-20px w-100 height-100"/>
            <div className="position-absolute  mainhead start-0   top-0 ">
            <p className="fw-bold text-white"> Travel Enjoy Life....</p>
            </div>
            
            <div className="d-none d-xl-block position-absolute start-50 top-50 translate-middle">
                <div className="rounded p-3 bg-cp upper-card">
                    <div className="d-flex align-items-start">

                    <div>
                  <input type="radio" name="flexRadioDefault" value={returnValue} onChange={this.returnFlight} id="Default1" />
                   <label className="fw-bold fs-7" htmlFor="Default1">
                   Return
                   </label>
                   </div>

                   <div className="mx-2">
                  <input  type="radio" name="flexRadioDefault"  value={oneway} onChange={this.oneWayFlight} id="Default2" checked/>
                   <label className="fw-bold fs-7" htmlFor="Default2">
                   One Way
                   </label>
                   </div>

           <div className="mx-2">
            <input type="radio" name="flexRadioDefault"  value={multi} onChange={this.multiCity}   id="Default3"  />
            <label className="fw-bold fs-7" htmlFor="Default3">
             Multi-City
             </label>
               </div>



                    </div>

                
                    <div className="d-flex align-items-center mr-3">
       <div>
     <label htmlFor="From" className="fw-bold fs-8">From</label>
     <br/>
     <select id="From" value={fromValue} className=" inp-height inp-width" onChange={this.fromChange}>
        <option value="Chennai" >Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Vishakhapatnam">Vishakhapatnam</option>
     </select>

</div>
<div>

<label htmlFor="To" className="fw-bold fs-8">To</label>
<br/>
     
     <select id="To" value={toValue} className=" inp-height inp-width" onChange={this.toChange }>
        <option value="Mumbai" >Mumbai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
     </select>


</div>
     
    <div>
    <label htmlFor="Depart" className="fw-bold fs-8">Depart</label>
    <br/>
        <input id="Depart" type="date"  onChange={this.departDate} className="form-controls inp-height inp-width"/>
    </div>  
   
    <div>
<label htmlFor="Cabin" className="fw-bold fs-8">Cabin Class & Travellers</label>
<br/>
<select id="Cabin" value={persons}   className="inp-height inp-width" onChange={this.totalPersons} >
    
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

    </div>
   

                   </div>

              <div className="d-flex align-items-center justify-content-center">
            <div>
            <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" value={nearby} onChange={this.addNearBy} id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Add nearby airports
  </label>
</div>
<div className="form-check  form-check-inline ms-5">
  <input className="form-check-input" type="checkbox" value={Delay} onChange={this.delayFlights} id="flexCheckChecked1" />
  <label className="form-check-label" htmlFor="flexCheckChecked1">
    Delay Flights
  </label>
</div>

<div className="form-check  form-check-inline ms-5">
  <input className="form-check-input" type="checkbox" value={Direct} onChange={this.directFlights} id="flexCheckChecked2" checked/>
  <label className="form-check-label" htmlFor="flexCheckChecked2">
   Direct Flights only
  </label>
</div>


            </div>
            <button className="btn btn-dark fw-bold btn-lg inp-width mt" onClick={this.changeRender}>Search</button>
              </div>

              

                </div>


              
            {Clicked &&  <div className="card">
                <h1 className="head">Available</h1>
                <p><strong>From :</strong> {fromValue}</p>
                <p><strong>To :</strong> {toValue}</p>
                <p><strong>Flight Name : </strong>{Flight1} </p>
                <p><strong>Date :</strong> {dateValue}</p>
                <p><strong>Number of Passengers :</strong> {persons}</p>

                <button className="btn btn-primary">Book</button>
              </div>}

            </div>
          
           
        
        
        </div>

        <div className="d-block d-xl-none rounded-2 bg-cp py-3 px-3">
        

        <div className="d-flex align-items-center">

<div>
<input type="radio" name="flexRadioDefault" value={returnValue} onChange={this.returnFlight} id="flexRadioDefault1" />
<label className="fw-bold fs-7" htmlFor="flexRadioDefault1">
Return
</label>
</div>

<div className="mx-2">
<input  type="radio" name="flexRadioDefault"  value={oneway} onChange={this.oneWayFlight} id="flexRadioDefault1" />
<label className="fw-bold fs-7" htmlFor="flexRadioDefault1">
One Way
</label>
</div>

<div className="mx-2">
<input type="radio" name="flexRadioDefault"  value={multi} onChange={this.multiCity}   id="flexRadioDefault2" checked />
<label className="fw-bold fs-7" htmlFor="flexRadioDefault2">
Multi-City
</label>
</div>



</div>
       
   
<div>
     <label htmlFor="From" className="fw-bold fs-8 mt-2">From</label>
     <br/>
     <select id="From" value={fromValue} className=" inp-height inp-width w-100" onChange={this.fromChange}>
        <option value="Chennai" >Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Vishakhapatnam">Vishakhapatnam</option>
     </select>

</div>
        
     
<div className="form-check form-check-inline mt-2">
  <input className="form-check-input " type="checkbox" value={nearby} onChange={this.addNearBy} id="flexCheckDefault" checked/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Add nearby airports
  </label>
</div>


<div>

<label htmlFor="To" className="fw-bold fs-8 mt-2">To</label>
<br/>
     
     <select id="To" value={toValue} className=" inp-height inp-width w-100" onChange={this.toChange }>
        <option value="Mumbai" >Mumbai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
     </select>


</div>


<div className="form-check  form-check-inline mt-2">
  <input className="form-check-input" type="checkbox" value={Delay} onChange={this.delayFlights} id="flexCheckChecked1" />
  <label className="form-check-label" htmlFor="flexCheckChecked1">
    Delay Flights
  </label>
</div>


<div>
    <label htmlFor="Depart" className="fw-bold fs-8 mt-2">Depart</label>
    <br/>
        <input id="Depart" type="date"  onChange={this.departDate} className="form-controls inp-height inp-width w-100"/>
    </div> 


    <div className="form-check  form-check-inline mt-2">
  <input className="form-check-input" type="checkbox" value={Direct} onChange={this.directFlights} id="flexCheckChecked2" checked/>
  <label className="form-check-label" htmlFor="flexCheckChecked2">
   Direct Flights only
  </label>
</div>


<div>
<label htmlFor="Cabin" className="fw-bold fs-8">Cabin Class & Travellers</label>
<br/>
<select id="Cabin" value={persons}   className="inp-height inp-width w-100 mt-2" onChange={this.totalPersons} >
    
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

    </div>


    <button className="btn btn-dark fw-bold btn-lg inp-width  mt ml-3" onClick={this.changeRender}>Search</button>

        </div>
        
        {Clicked &&  <div className="card d-lg-none">
                <h1 className="head">Available</h1>
                <p><strong>From :</strong> {fromValue}</p>
                <p><strong>To :</strong> {toValue}</p>
                <p><strong>Flight Name : </strong>{Flight1} </p>
                <p><strong>Date :</strong> {dateValue}</p>
                <p><strong>Number of Passengers :</strong> {persons}</p>
                <button className="btn btn-outline-primary">Book</button>
              </div>}  
        
        </>  )
    }
}

    





 export default App