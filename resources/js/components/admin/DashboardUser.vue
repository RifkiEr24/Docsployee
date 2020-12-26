<template>
<div>
    <div class="bg-white border-rounded p-2 py-3 m-1 row mt-4">
        <div class="col-md-4 ">
          
                <span  class="fa-stack fa-size fa-lg float-left">
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
                <div v-if="missingdata != null">
                      <h4 class="text-center font-weight-bold">Ayo Lengkapi Akunmu</h4>
                      <sweetalert-icon icon="warning" color="#db2a3b"/>
                    <p class="font-weight-bold text-center">Data Akun Anda masih belum lengkap, Ayo lengkapi sekarang</p>
                    <p class="font-weight-bold text-center">Data yang kurang:</p>
                    <span class="badge badge-danger p-2 ml-auto mr-auto d-block w-50 mt-2" v-for="(data) in missingdata" :key="data.id_category">{{data.category_name}}</span>
                       <button  class="btn btn-primary  rounded-pill text-white py-1 ml-auto mr-auto d-block w-75 mt-3 font-weight-bold"> Pergi ke ruang penyimpanan</button>
                </div>
                <div v-else>
                   <h4 class="text-center font-weight-bold">Data Akunmu sudah lengkap</h4>
                      <sweetalert-icon icon="success" color="#db2a3b"/>
                </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-12">
                <div class="bg-white p-3 border-rounded">
                  <h4 class="text-center font-weight-bold">Activities</h4>
                  <ul class="list-group">
                      <li class="list-group-item font-weight-bold">  <img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1 mr-2"
                        alt=""> Jone Doe Just Created An Account </li>
                          <li class="list-group-item font-weight-bold">  <img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1 mr-2"
                        alt=""> Jone Doe Just Created An Account </li>
                            <li class="list-group-item font-weight-bold">  <img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1 mr-2"
                        alt=""> Jone Doe Just Created An Account </li>
                    </ul>
                      <h5 class="text-center text-primary font-weight-bold">See More</h5>
               </div>
               
              </div>
            </div>
        </div>
          <div class="col-md-4 ">
            <div class="bg-white p-4 border-rounded">
                <h4 class="text-center font-weight-bold">Employee by gender</h4>
                 <pie-chart :chart-data="dataPie"></pie-chart>
            </div>
            <div class="row mt-4">
              <div class="col-md-12 ">
            <div class="bg-white p-1 border-rounded">
              <h4 class="text-center font-weight-bold mt-2">Users</h4>
                     <ul class="list-group">
            <li v-for="(account) in accounts.slice(0, 4)" :key="account.id" class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex">
                    <img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1"
                        alt="">
                    <div class="identity ml-3">
                        <p class="name mt-1 mb-0">{{account.nama}}</p>
                      <p class="otority">Employee</p>
                    </div>
                </div>
            </li>
        </ul>
        <h5 class="text-center text-primary font-weight-bold">See More</h5>
            </div>
        </div>
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
import  BarChart  from './../../chart/BarChart.js'
import  LineChart  from './../../chart/LineChart.js'
import  PieChart  from './../../chart/PieChart.js'
export default {
   components: {
      LineChart,
      BarChart,
      PieChart,
    },
   data () {
      return {
         accounts: [],
          results:[],
          user:null,
          datacheck:null,
          missingdata:[],
        datacollection: { labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
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
            }
          ]
        },
          dataPie: { labels: ['Man','Woman'],
          datasets: [
            {
              label: 'Task finished',
              
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: 'white',
              backgroundColor: ["#fcc026", "#2295c9"],
              data: [13,7]
            }
          ]
        },
        options:{
          responsive: true,
          maintainAspectRatio: false
        }
  
  
      }
    },
      created() {
        let uri = '/api/account';
        this.axios.get(uri).then(response => {
            this.accounts = response.data;

        });
        },
  mounted () {
    let i=0;
       axios.get('/api/user').then((res)=>{
            this.user = res.data
        }).then(()=>{
           axios.get('/api/datacheck',{params:{iduser:this.user.id_akun}}).then((res)=>{
            this.datacheck=res.data;
            }).then(()=>{
               this.datacheck.forEach((category,index) => {
                 i++;
                 console.log(i);
                    if(category.length==0){
                     axios.get('/api/category/search',{params:{idcategory:i}}).then((res)=>{
                         this.missingdata = this.missingdata.concat(res.data);
                          console.log(this.missingdata)
                      })
                    }
                    
                });
                console.log(i);
                
            })
        })
  },
  methods: {
    fetch(){
              axios.get('/api/account/search', { params: { keywords: this.keywords } })
                .then(response => this.results = response.data)
                .catch(error => {});
                console.log(this.keywords);
          }
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