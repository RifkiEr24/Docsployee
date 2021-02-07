<script>
import FullCalendar, {Calendar, CalendarApi} from '@fullcalendar/vue'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default {
    props: ["accountuser", "session"],

    components: {

        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            usersession: this.$props.session,
            calendarOptions: {
                plugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                themeSystem: 'bootstrap',
                headerToolbar: {
                    left: '',
                    center: 'title',
                    right: ''
                },
                select: this.addEventClick,
                eventClick: this.handleEventClick,
                events: {},
                selectable: true
            },
            eventlist: [],
            eventedit:[]
        }
    },
    created() {
        this.getevent();
    },
    methods: {
        getevent() {
            console.log('aaaaaaa')
            let uri = '/api/event';
            this.axios.get(uri).then(response => {
                this.calendarOptions.events = response.data;
                console.log(this.calendarOptions.events);


            });
        },
        handleEventClick(clickInfo) {
             axios.get('/api/event/show',{params:{iduser:clickInfo.event.id}}).then((res)=>{
            this.event = res.data;
            if(this.usersession.role == 'admin'){
                    this.$swal.fire({
                icon: 'info',
                title: res.data.title,
                text: res.data.deskripsi,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Edit Acara`,
                denyButtonText: `Hapus Acara`,
                cancelButtonText: `Kembali`
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  this.$swal.close();
                  const formvalues =  this.$swal.fire({
                        title: 'Edit Acara',
                        html:
                            '<p class="mb-0">Nama Acara</p>'+
                            '<input value="'+ res.data.title+'" id="swal-input1" class="swal2-input">' +
                            '<p class="mb-0">Deskripsi Acara</p>'+
                            '<textarea rows="6" id="swal-input2" class="swal2-input textarea">'+res.data.deskripsi+'</textarea>',
                        focusConfirm: false,
                        preConfirm: () => {
                            return [
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                            ]
                        }
                        }).then((form)=>{
                           console.log(form);
                            if (form.value[0] != "" && form.value[1] != "") {
                        console.log(res.data.id);
                         const formdata = new FormData();
                         this.eventedit.id=res.data.id;
                         this.eventedit.title=form.value[0];
                         this.eventedit.deskripsi=form.value[1];
                         console.log(res.data.id + form.value[0] + form.value[1])
                         let a= form.value[0];
                         let b=form.value[1]
                        formdata.append('title', a);
                        formdata.append('deskripsi',b);
                          formdata.append('id',res.data.id);
                        console.log(this.eventedit);
                      this.axios.put(`/api/event/update`,{params: {
                        id: 1,
                        title: 'a',
                        deskripsi: 'bbb',
                    }},).then((response) => {
                            response.data;
                        this.getevent();
                            });
                        }else{
                            console.log('gagal');
                        }
                        })
                     console.log(formvalues);
                } else if (result.isDenied) {
                   this.axios.delete(`/api/event/delete/${res.data.id}`).then((response) => {
                            response.data;
                        this.getevent();
                            });
                }
                })
            }else{
                   this.$swal.fire({
                icon: 'info',
                title: res.data.title,
                text: res.data.deskripsi,
            
                confirmButtonText: `Kembali`,
                })
            }
        
        })
        },
        addEventClick: function (info) {
            if(this.usersession.role == 'admin'){
                    const {
                value: text
            } = this.$swal.fire({
                title: 'Enter Event Title',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },

                showCancelButton: true,
                confirmButtonText: 'Create Event',
                allowOutsideClick: () => this.$swal.isLoading(),
            }).then((text) => {
                console.log(text);
                if (text.isDismissed != true && text.value != "") {
                    const {
                        value: description
                    } = this.$swal.fire({
                        title: 'Enter Event Description',
                        input: 'textarea',
                        inputAttributes: {
                            autocapitalize: 'off'
                        },

                        showCancelButton: true,
                        confirmButtonText: 'Create Event',
                        allowOutsideClick: () => !Swal.isLoading(),
                    }).then((description) => {
                        if (description.isDismissed != true && description.value != "") {
                            const formdata = new FormData();

                            formdata.append('id_akun', this.usersession.id_akun);
                            formdata.append('title', text.value);
                            formdata.append('deskripsi', description.value);
                            formdata.append('start', info.startStr);
                            formdata.append('end', info.endStr);
                            axios.post('/api/event/addevent', formdata).then((response) => {
                                this.$swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'Acara Berhasil Dibuat',
                                }).then(() => {
                                    this.getevent();
                                })
                            }).catch((error) => {
                                this.$swal.fire({
                                    icon: 'error',
                                    title: 'Login Failed',
                                    text: error,
                                })
                            })
                        }  else if(description.value == "" && description.isConfirmed == true){
                    this.$swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text:'Anda harus memasukan input deskripsi acara',
                        allowOutsideClick: () => !Swal.isLoading(),
                    })
                }
                    })
                }
                else if(text.value == "" && text.isConfirmed == true){
                    this.$swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text:'Anda harus memasukan input nama acara',
                        allowOutsideClick: () => !Swal.isLoading(),
                    })
                }

            })

            let calendarApi = info.view.calendar
            calendarApi.unselect() // clear date selection
            }
        },
    }
}
</script>
<template>
  <FullCalendar ref="fullcalendar" id="calendar" :options="calendarOptions"  class="mt-2"/>
</template>
<style>
.fc-col-header-cell{
background-color: #3490dc ;
color: white;
}
.fc-h-event{
    transition: 1s;
    cursor: pointer;
}
.fc-h-event:hover{
    transition: 1s;
background-color: #19588b
}
</style>