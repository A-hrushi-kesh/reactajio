import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
         <div>
            <div style={{ height:"100%", width:"100%"}}>
    <div class="card text-bg-dark">
      {/* <img src="" class="card-img" style={{ height:"100%", width:"100%", filter:"grayscale(70%)"}}/> */}
      <div class="card-img-overlay">
      <div style={{position:"absolute" , top: "100px" , left: "35%"}}>
            <form class="shadow p-3 mb-5 bg-dark text-light" style={{width: "500px", borderRadius:"30px"}} id="mybutton">
                <h2 style={{fontFamily:"sans-serif"}}>LOGIN</h2><br/>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label ">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label class="form-check-label" for="exampleCheck1">Don't have an account? </label>
                </div>
                <Link type="submit" style={{marginRight:"10px"}} class="btn btn-success" to="/">Submit</Link>
                
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  register
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-black" id="staticBackdropLabel">Register</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="text-black border border-1">
          <div class="card card-body m-4 border border-0">
            <form>
                <div class="input-group mb-4">
                  <input type="text" placeholder="firstname" class="form-control"/><input type="text" placeholder="lastname" class="form-control"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1  border border-2" class="form-label">Email address</label>
                  <input type="email  border border-2" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1  border border-2" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input  border border-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label class="form-check-label" for="inlineRadio1">male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input  border border-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label class="form-check-label" for="inlineRadio2">female</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input  border border-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                  <label class="form-check-label" for="inlineRadio3">others</label>
                </div>
                <div class="mb-3 form-check mt-4">
                  <input type="checkbox" class="form-check-input  border border-2" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">conform password</label>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </form>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
    </div>
  )
}

export default Signin