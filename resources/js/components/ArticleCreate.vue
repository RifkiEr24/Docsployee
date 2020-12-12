<template>
    <div class='container py-4'>
        <div class='row justify-content-center'>
            <div class='col-md-6'>
                <div class='card'>
                    <div class='card-header'>Create Article</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>
 
                        <form @submit.prevent="createArticle">
                            <div class='form-group'>
                                <label htmlFor='title'>Email</label>
                                <input type="email" class="form-control" id="title" v-model="account.email">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='content'>Name</label>
                                <input type="name" class="form-control" id="content" v-model="account.name">
                            </div>
                             <div class='form-group'>
                                <label htmlFor='content'>Password</label>
                                <input type="password" class="form-control" id="content" v-model="account.password">
                            </div>
                            <div class='form-group'>
                                <router-link :to="{ name: 'employeelist' }" class="btn btn-secondary">Back</router-link>
                                &nbsp;
                                &nbsp;
                                <button class='btn btn-primary'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                account:{},
                errors: [],
                title: null,
                content: null,
            }
        },
        methods: {
            createArticle(e){
                 
                if (this.$data.account.name != null && this.$data.account.email != null  && this.$data.account.password != null) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "Article created successfully",
                        icon: 'success',
                        timer: 1000
                    })
                    let uri = '/api/account/store';
                    this.axios.post(uri, this.account).then((response) => {
                        this.$router.push({name: 'employeelist'});
                    });
                    return true;
                }
 
                this.errors = [];
 
                if (!this.title) {
                    this.errors.push('Title wajib diisi !');
                }
                if (!this.content) {
                    this.errors.push('Content wajib diisi !');
                }
 
                e.preventDefault();
            }
        }
    }
</script>