<template>
    <div>
        <div class="bg-white border-rounded p-2 py-3 m-1 row mt-4">
            <div class="col-md-4 ">

                <span class="fa-stack fa-size fa-lg float-left">
                    <i class="fa fa-square text-danger fa-stack-2x"></i>
                    <i class="far fa-envelope-open fa-stack-1x text-white"></i>
                </span>
                <p class="mt-1"> <span class="font-weight-bold">125</span> <br> Notification</p>


            </div>
            <div class="col-md-4 ">

                <span class="fa-stack  fa-size fa-lg float-left">
                    <i class="fa fa-square text-info fa-stack-2x"></i>
                    <i class="fas fa-users fa-stack-1x text-white"></i>
                </span>
                <p class="mt-1"><span class="font-weight-bold">20</span> <br> Employee</p>

            </div>
            <div class="col-md-4 ">

                <span class="fa-stack  fa-size fa-lg float-left">
                    <i class="fa fa-square text-primary fa-stack-2x"></i>
                    <i class="fas fa-tasks fa-stack-1x text-white"></i>
                </span>
                <p class="mt-1"><span class="font-weight-bold">12</span> <br> Task</p>

            </div>
        </div>
        <div class="row mt-5 mb-5">
            <div class="col-md-8">
                <div class="bg-white p-4 border-rounded">
                    <div v-if="missingdata.length != 0">
                        <h4 class="text-center font-weight-bold">Ayo Lengkapi Akunmu</h4>
                        <sweetalert-icon icon="warning" color="#db2a3b" />
                        <p class="font-weight-bold text-center">Data Akun Anda masih belum lengkap, Ayo lengkapi
                            sekarang</p>
                        <p class="font-weight-bold text-center">Data yang kurang:</p>
                        <span class="badge badge-danger p-2 ml-auto mr-auto d-block w-50 mt-2"
                            v-for="(data) in missingdata" :key="data.id_category">{{data.category_name}}</span>
                              <router-link :to="{name: 'usercloud'}">
                        <button 
                            class="btn btn-primary  rounded-pill text-white py-1 ml-auto mr-auto d-block w-75 mt-3 font-weight-bold">
                            Pergi ke ruang penyimpanan</button>
                              </router-link>
                    </div>
                    <div v-else>
                        <h4 class="text-center font-weight-bold">Data Akunmu sudah lengkap</h4>
                        <sweetalert-icon icon="success" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <div class="bg-white p-3 border-rounded">
                            <h4 class="text-center font-weight-bold">Acara Bulan Ini</h4>
                             <div v-if="monthlyevent.length != 0">
                                    <div class="row">
                                <div class="col-md-6 mt-3" v-for="(event) in monthlyevent.slice(0,4)" :key="event.id">
                                    <div class="card text-center border-rounded">
                                        <div class="card-header  bg-success border-rounded text-white font-weight-bold">
                                            {{event.start}}
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title font-weight-bold">{{event.title}}</h5>
                                            <p class="card-text">{{event.deskripsi}}</p>
                                        </div>
                                        <div class="card-footer text-muted">
                                            {{event.start }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <router-link :to="{name: 'usercalendar'}">
                                <h5 class="text-center text-primary font-weight-bold mt-2">See More</h5>   
                             </router-link>  

                             </div>
                             <div v-else>

                               <div class="row">
                                 <div class="col-md-12">
                                   <h4 class="text-center font-weight-bold"> Tidak ada acara di bulan ini</h4>
                                 </div>
                               </div>
                             </div>

                       
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="bg-white p-4 border-rounded">
                    <h4 class="text-center font-weight-bold">Tentang Anda</h4>


                    <div v-if="profilepicture.length != 0">
                        <div v-for="(doc) in profilepicture.slice(0,1)" :key="doc.id_document">
                            <img :src="'/userdata/'+usersession.id_akun+'/'+doc.file_name"
                                class="avatar-profile-big d-block ml-auto mr-auto rounded-circle mt-1" alt="">
                        </div>
                    </div>
                    <div v-else>
                        <img :src="'https://thispersondoesnotexist.com/image'"
                            class="avatar-profile-big d-block ml-auto mr-auto rounded-circle mt-1" alt="">
                    </div>



                    <h5 class="text-center font-weight-bold mt-3">{{usersession.name}}</h5>
                   
                       <router-link :to="{name: 'useraccountedit'}">
                    <button
                        class="btn btn-primary  rounded-pill text-white py-1 ml-auto mr-auto d-block w-75 mt-3 font-weight-bold">
                        Edit Akun</button>
                       </router-link>

                </div>
                <div class="row mt-4">
                    <div class="col-md-12 ">
                        <div class="bg-white p-1 border-rounded">
                            <h4 class="text-center font-weight-bold mt-2">Users</h4>
                            <ul class="list-group">
                                <li v-for="(account) in accounts.slice(0, 4)" :key="account.id"
                                    class="list-group-item d-flex justify-content-between align-items-center">
                                    <div class="d-flex">
                                        <div v-if="account.document.length != 0">
                                            <div v-for="(doc) in account.document.slice(0,1)" :key="doc.id_document">
                                                <img :src="'/userdata/'+account.id_akun+'/'+doc.file_name"
                                                    class="avatar-profile rounded-circle mt-1" alt="">
                                            </div>
                                        </div>
                                        <div v-else>
                                            <img :src="'https://thispersondoesnotexist.com/image'"
                                                class="avatar-profile rounded-circle mt-1" alt="">
                                        </div>
                                        <div class="identity ml-3">
                                            <p class="name mt-1 mb-0">{{account.name}}</p>
                                            <p class="otority"></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import BarChart from './../../chart/BarChart.js'
import LineChart from './../../chart/LineChart.js'
import PieChart from './../../chart/PieChart.js'
export default {
  props: ["accountuser","session"],
    components: {
        LineChart,
        BarChart,
        PieChart,
    },
    data() {
        return {
            accounts: this.$props.accountuser,
            usersession: this.$props.session,
            results: [],
            user: null,
            gendercount: [],
            datacheck: null,
            missingdata: [],
            usercount:0,
           logincount:0,
           profilepicture:[],
           monthlyevent:[],

            datacollection: {
                labels: ['January', 'February', 'March', 'April',],
                datasets: [{
                    label: 'Task finished',
                    borderColor: '#FC2525',
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    pointBorderColor: 'white',
                    backgroundColor: this.gradient,
                    data: [40, 39, 10, 40, 45, 80, 40]
                }, {
                    label: 'Task Unfinished',
                    borderColor: '#05CBE1',
                    pointBackgroundColor: 'white',
                    pointBorderColor: 'white',
                    borderWidth: 1,
                    backgroundColor: this.gradient2,
                    data: [60, 55, 32, 10, 2, 12, 53]
                }]
            },
            dataPie: {
                labels: ['Man', 'Woman'],
                datasets: [{
                    label: 'Task finished',
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    pointBorderColor: 'white',
                    backgroundColor: ["#fcc026", "#2295c9"],
                    data: null
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }


        }
    },

    mounted() {
      console.log(this.profilepicture);
      axios.get('/api/event/monthly').then((res) => {
          this.monthlyevent = res.data;
  })
      console.log(this.usersession);
        // DOCUMENT DATA CHECK
        let i = 0;
            axios.get('/api/datacheck', {
                params: {
                    iduser: this.usersession.id_akun
                }
            }).then((res) => {
                this.datacheck = res.data;
            }).then(() => {
                this.datacheck.forEach((category, index) => {
                    i++;
                    if (category.length == 0) {
                        axios.get('/api/category/search', {
                            params: {
                                idcategory: i
                            }
                        }).then((res) => {
                            this.missingdata = this.missingdata.concat(res.data);
                        })
                    }
                });
            })
        
        //GENDER COUNT
        let urigendercount = '/api/account/gendercount';
        this.axios.get(urigendercount).then(response => {
            this.gendercount = response.data;
            if (this.gendercount[0].count == null  && this.gendercount[1].count != null) {
                 this.dataPie.datasets[0].data = [0, this.gendercount[1].count]
            }
            else if(this.gendercount[1] == null && this.gendercount[0].count != null ){
                 this.dataPie.datasets[0].data = [this.gendercount[0].count, 0]
            }
            else if(this.gendercount[0] == null && this.gendercount[1].count == null ){
                  this.dataPie.datasets[0].data = [0, 0]
            }else{
               this.dataPie.datasets[0].data = [this.gendercount[0].count, this.gendercount[1].count]
            }
        });

        //LOGIN COUNT
          let urilogincount = '/api/account/logincount';
        this.axios.get(urilogincount).then(response => {
            this.logincount= response.data;
             });

        //USER COUNT
         let uriusercount = '/api/account/usercount';
        this.axios.get(uriusercount).then(response => {
            this.usercount= response.data;
             });

        //GETPROFILE
         let uriuserprofile = `/api/account/profilepicture/${this.usersession.id_akun}`;
        this.axios.get(uriuserprofile).then(response => {
          this.profilepicture=response.data;
             });

    },
    methods: {

    }
}
</script>
<style scoped>
.fa-size{
  font-size: 25px;
}
 .list-group-item {
        transition: 0.5s;
        border: 0px;
    }
    .otority{
      margin: 0% !important;
    }
    .avatar-profile {
        width: 44px;
        height: 44px;
        object-fit: cover;
    }
  .avatar-profile-big{
    width: 200px;
        height: 200px;
        object-fit: cover;
  }
    .identity {
        display: block;
    }

    .name {
        font-size: 18px;
        font-weight: bold;
    }

    .icon {
        font-size: 17px;
    }
</style>