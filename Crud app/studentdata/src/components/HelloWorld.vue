<template>
<div class="container">
 <div class="col col-lg-4">
  <!-- Default form contact -->
  <form method="post">
    <p class="h4 text-center mb-4">Data </p>

    <!-- Default input name -->
    <label for="defaultFormContactNameEx" class="grey-text">Your name</label>
    <input type="text" id="defaultFormContactNameEx" class="form-control" v-model="User.uname">

    <br>

    <!-- Default input email -->
    <label for="defaultFormContactEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormContactEmailEx" class="form-control" v-model="User.uemail">

    <br>

    <!-- Default input subject -->
    <label for="defaultFormContactSubjectEx" class="grey-text">Phone No</label>
    <input type="text" id="defaultFormContactSubjectEx" class="form-control" v-model="User.uphone">

    <br>
        

    <div>
      <button @click="addtoapi" type="button" class="btn btn-primary">Add</button>
      
    </div>
  </form>
  
</div>
<!-- Default form contact 
<div class="table-responsive">
      <table class="table table-sm table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }} 
            <td>{{ name }}</td>
            <td>{{ email  }}</td>
            <td>{{ phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container">
      
      <button type="button" class="btn btn-success" style="margin:5px">Show Record</button>
      
      <button type="button" class="btn btn-secondary" style="margin:5px">Updata Record</button>

      <button type="button" class="btn btn-danger" style="margin:5px">Delete Record</button>
      


    </div>
    -->
</div>

</template>
<script>
import axios from 'axios';
export default{
  data() {
    return {
      User : {uname:'',uemail:'',uphone:''},
    }
  },



methods:{
//code for post request
  addtoapi(){

    let newUser = {

      name : this.User.uname,
      email : this.User.uemail,
      phone : this.User.uphone
    }

    console.log(newUser);
   axios.post('https:localhost:8000/students')
    .then((response)=>{
      console.log(response);



    }).catch((error)=>{
      console.log(error);
    })
  }

},
//get request
async mounted() {
      this.student = (await axios.get('localhost:8000/students')).data;
       console.log('results', this.student)}

}
//
</script>