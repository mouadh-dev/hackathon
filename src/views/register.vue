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
        <form class="space-y-6" action="#" method="POST">

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
                
                <select v-model="selected"  class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      
        <option value="" disabled>-- Please select an option --</option>
        <option v-for="option in options" :value="option.text">{{option.text}}</option>
    </select>
            </div>
          </div>
<!-- <div>{{selected}}</div> -->

    <div>
            <label for="phonenumber" class="block text-sm font-medium text-gray-700"> File organisation </label>
            <div class="mt-1">
              <input id="file" name="file" type="file" class="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
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
export default {
  data() {
    return {
      selected: '',
      options: [
          { value: '1', text: 'Citizen' },
          { value: '2', text: 'Organization' }
        ]
    }
  }
}
</script>
