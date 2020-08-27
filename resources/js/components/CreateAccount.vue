<template>
    <div>
        <h2 class="text-center">Daftar Kepegawaian</h2>
          <form class="px-5" validate>
              <div class="form-group">
                            <label for="exampleInputEmail1">NIP</label>
                        <input type="number" class="form-control rounded-pill" placeholder="Masukkan NIP Anda disini"
                            id="NIP" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control rounded-pill" placeholder="Masukkan NPWP Anda disini"
                            id="Email" aria-describedby="emailHelp">
                    </div>
                    <ValidationObserver>
                    <div class="form-group">
                         <label for="exampleInputEmail1">Password</label>
                          <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Password anda Disini" v-model="password">
                             <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                    </div>
                        <div class="form-group">
                         <label for="exampleInputEmail1">Re-Password</label>
                             <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Ulang Password anda Disini" v-model="confirmation">
                             <span>{{ errors[0] }}</span>
                             </ValidationProvider>
                    </div>
                    </ValidationObserver>
                     <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block" type="submit">Register Akun</button>
                </form>
    </div>
</template>
<script>
import { required, email, integer, between } from 'vee-validate/dist/rules';
extend('required', required);
extend('email', email);
extend('integer', integer);
extend('between', between);

import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});
export default {
    data: () => ({
    password: '',
    confirmation: ''
  }),
    components: {
    ValidationProvider,
    ValidationObserver
  }
}
</script>