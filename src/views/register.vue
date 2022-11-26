<template>
<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="../assets/logo.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-black">Create a new account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
       
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" enctype="multipart/form-data" v-on:submit="register">

            <div>
            <label for="fullname" class="block text-sm font-medium text-gray-700"> Full name </label>
            <div class="mt-1">
              <input id="fullname" name="fullname" type="name" autocomplete="name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black" />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="cin" class="block text-sm font-medium text-gray-700"> CIN </label>
            <div class="mt-1">
              <input id="cin" name="cin" type="text" pattern="[0-9]*" autocomplete="email" required="" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input id="repassword" name="repassword" type="password" autocomplete="current-password" required="" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="phonenumber" class="block text-sm font-medium text-gray-700"> Phone number </label>
            <div class="mt-1">
              <input id="phonenumber" name="phonenumber" type="number" autocomplete="number" required="" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="role" class="block text-sm font-medium text-gray-700"> Role </label>
            <div class="mt-1">
                
                <select v-model="selected" required name="role" id="role" @change="onChange($event)" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      
        <option value="" disabled>-- Please select an option --</option>
        <option v-for="option in options" :value="option.text">{{option.text}}</option>
    </select>
            </div>
          </div>
<!-- <div>{{selected}}</div> -->

    <div style="display:none;" id="fileDiv">
            <label for="file" class="block text-sm font-medium text-gray-700"> File organisation </label>
            <div class="mt-1">
              <input @change="uploadFile" id="file" ref="file" name="file" type="file"  class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>


          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
          </div>
        </form>
    </div>
    </div>
  </div>
</template>
<script>
import router from "../router"
import axios from "axios"
export default {
  data() {
    return {
      file: null,
      selected: '',
      options: [
          { value: '1', text: 'Citizen' },
          { value: '2', text: 'Organization' }
        ]
    }
  },
    name: "Register",
    methods:{  
    uploadFile() {
    console.log(this.$refs.file.files[0]);
        this.file = this.$refs.file.files[0];
      },
        register(e) {
            e.preventDefault()
            let email = document.getElementById("email").value
            let password = document.getElementById("password").value
            let repassword = document.getElementById("repassword").value
            let fullname = document.getElementById("fullname").value
            let cin = document.getElementById("cin").value;
            let phonenumber = document.getElementById("phonenumber").value
            let role = document.getElementById("role").value
            let register = () => {
            if (password === repassword) {
                const formData = new FormData();
                console.log(this.file + "file");
                if(this.file != null){
                    formData.append('file', this.file);
                }
                formData.append('fullname', fullname);
                formData.append('email', email);
                formData.append('password', password);
                formData.append('phone', phonenumber);
                formData.append('type', role);
                formData.append('cin', cin);
                const headers = { 'Content-Type': 'multipart/form-data' };
                axios.post('http://localhost:42069/register', formData, { headers }).then((res) => {
                console.log(res);
                if (res.data.error == "file is required") {
                    alert("Please upload a file")
                }else if (res.data.error == "Email already exists") {
                    alert("Email already exists")
                    }else if (res.data.error == "CIN already exists") {
                    alert("CIN already exists")
                }else if (res.data.success == "user created") {
                     localStorage.setItem('userToken',res.data.token)
                      router.push("/home")
                }
                }).then((err) => {
                    console.log(err)
                });
            }
            else {
                alert("Password not match")
                }
            }
            register()
        },
        onChange: (event) => {
        console.log(event.target.value)
        let e = document.getElementById("role").value;
          if (e == "Citizen") {
            document.getElementById("fileDiv").style.display = "none";
          } else {
            document.getElementById("fileDiv").style.display = "block";
          }
          
        }
    }
}
</script>
