<script>
import FullCalendar, {Calendar, CalendarApi} from '@fullcalendar/vue'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default {
     components: {
             FullCalendar // make the <FullCalendar> tag available
         },
         data() {
             return {
                 calendarOptions: {
                     plugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin],
                     initialView: 'dayGridMonth',
                     themeSystem: 'bootstrap',
                     headerToolbar: {
                         left: 'prev,next today',
                         center: 'title',
                         right: 'dayGridMonth,timeGridWeek,timeGridDay'
                     },
                     select: this.addEventClick,
                     events: [],
                     selectable: true
                 },
                 eventlist:[]
             }
         },
         created() {
        let uri = '/api/event';
        this.axios.get(uri).then(response => {
            console.log(response);
            this.calendarOptions.events = response.data;

        });
         },
         methods: {
             addEventClick: function (info) {
                 (async () => {
                     const {
                         value: text
                     } = await this.$swal.fire({
                         title: 'Enter Event Title',
                         input: 'text',
                         inputAttributes: {
                             autocapitalize: 'off'
                         },

                         showCancelButton: true,
                         confirmButtonText: 'Create Event',
                         allowOutsideClick: () => !Swal.isLoading(),
                     })
                     let calendarApi = await info.view.calendar
                     calendarApi.unselect() // clear date selection
                     if (text) {
                         calendarApi.addEvent({
                             id: createEventId(),
                             title: text,
                             start: info.startStr,
                             end: info.endStr,
                             allDay: info.allDay
                         })
                     }
                 })()
             },
         }
     }
</script>
<template>
  <FullCalendar id="calendar" :options="calendarOptions"  class="mt-2"/>
</template>
<style>
.fc-col-header-cell{
background-color: #3490dc ;
color: white;
}
</style>