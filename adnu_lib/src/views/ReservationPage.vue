<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="background-color: #414141;">
                <div class="d-flex flex-column align-items-center align-items-sm-center px-3 pt-2 text-white min-vh-100">
                    <div class="pt-3 pb-5">
                        <img src="../assets/Ateneo_de_Naga_University_logo.png" width="120" height="120" class="d-inline-block align-top" alt="">
                    </div>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="pb-3" @click="homePage">
                            <a href="#" class="nav-link align-middle px-0 text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                                </svg> 
                                <span class="ms-1 d-none d-sm-inline">
                                    Home
                                </span>
                            </a>
                        </li>
                        <li class="pb-3" @click="reservationPage">
                            <a href="" data-bs-toggle="collapse" class="nav-link px-0 align-middle  text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                </svg> 
                                <span class="ms-1 d-none d-sm-inline">
                                    Reserve
                                </span>
                            </a>
                        </li>
                        <li class="pb-3">
                            <a href="#" class="nav-link px-0 align-middle text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                                <span class="ms-1 d-none d-sm-inline">About</span>
                            </a>
                        </li>
                    </ul>
                    <hr>
                    <!-- <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                            <span class="d-none d-sm-inline mx-1">loser</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="col text-start">
                <h1 class="font-weight-light pt-4 ms-3">
                    Reservation
                </h1>
                    
                <hr style="background-color: black; height: 2px;">
                <div @click="check">
                    <ejs-schedule height="575px" currentView="Month" v-model:selectedDate="schedulerSelectedDate" id="calendar">
                    </ejs-schedule>
                </div>
            </div>
                
        </div>
    </div>
    <footer class="page-footer fluid-bottom border-top border-secondary" style="background-color: #414141;">
        <div class="footer-copyright text-start py-3 text-light ms-2">
            © 2023 Copyright:
            <a href="/" class="text-light"> Ateneo de Naga University</a>
        </div>
    </footer>

    <div v-if="open_modal === true">
        <PopUpModal>
            <div class="container">
                <div class="row">
                    <div class="col-sm" v-if="next_page === true">
                        <button @click="back_btn" class="btn btn-outline-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-sm" v-if="next_page === false">
                        <button @click="back_btn" class="btn btn-outline-dark" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-sm pt-2">
                        <h4 class="fw-bold">{{picked_date}}</h4>
                        <hr stlye="background-color: black">
                    </div>
                    <div class="col-sm">
                        <button @click="close_modal" class="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="container pb-5" v-if="next_page === false">
                <div class="row pb-2">
                    <h5 class="fw-bolder d-flex justify-content-start pb-3">Personal Details</h5>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Full Name</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Email</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Mobile Number</label>
                    </div>
                </div>
                <div class="row pb-3">
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your full name here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your email here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your mobile number here">
                    </div>
                </div>

                <div class="row pb-2 pt-4">
                    <h5 class="fw-bolder d-flex justify-content-start pb-3">Reservation Details</h5>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Date</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Time</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Organization/Department</label>
                    </div>
                </div>
                <div class="row pb-3">
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the time here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your organization/department here">
                    </div>
                </div>

                <div class="row pb-2">
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Venue</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Description</label>
                    </div>
                </div>

                <div class="row pb-5">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter the venue here">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter the description of the event here">
                    </div>
                </div>
                <button class="btn btn-primary float-start" type="submit" @click="nextPage">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
            <div v-else class="pb-5">
                <div class="col d-flex justify-content-start fw-bold pb-2">
                    <label for="formGroupExampleInput">Equipments</label>
                </div>
                <div class="pb-3 col d-flex justify-content-start">
                    <ul style="list-style: none;">
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Microphone
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Microphone stand
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Speakers
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Sound system
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="col d-flex justify-content-start fw-bold pb-2">
                    <label for="formGroupExampleInput">Related Documents</label>
                </div>
                <input class="form-control" type="file" id="formFileDisabled">

                <div class="pt-5">
                    <button class="btn btn-primary float-start" type="submit" @click="nextPage">
                        Set Appointment
                    </button>
                </div>
            </div>

        </PopUpModal>
    </div>
</template>

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import PopUpModal from "@/components/PopUpModal.vue";

export default{
    components: {
        'ejs-schedule': ScheduleComponent,
        PopUpModal,
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    },
    data(){
        return{
            schedulerSelectedDate: new Date(),
            open_modal: false,
            sliced_holder: '',
            picked_date: '',
            next_page: false,
        }
    },
    methods: {
        check(){
            // console.log("Selected date:",this.schedulerSelectedDate);
            // let date_holder = this.schedulerSelectedDate;
            // console.log(date_holder);
            if(this.schedulerSelectedDate != null){
                this.open_modal = true;
                this.sliced_holder = String(this.schedulerSelectedDate).slice(0, 15);
                console.log(this.sliced_holder);
                this.picked_date = this.sliced_holder;
            }
        },

        nextPage(){
            this.next_page = true;
        },

        back_btn(){
            this.next_page = false;
        },

        trigger_modal(){
            this.open_modal = true;
        },

        close_modal(){
            this.open_modal = false;
            this.next_page = false;
        },

        reservationPage(){
            this.$router.push({name: 'reservation'})
        },

        homePage(){
            this.$router.push({name: 'home'})
        }
    },

    mounted: async function(){
        console.log(ScheduleComponent);
    }
}
</script>

<style>    
</style>
