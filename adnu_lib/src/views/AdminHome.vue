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
                        <li class="pb-3">
                            <a href="" class="nav-link align-middle px-0 text-light">
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
                            <a href="" class="nav-link px-0 align-middle text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                <span class="ms-1 d-none d-sm-inline">
                                    History
                                </span>
                            </a>
                        </li>
                        <li class="pb-3">
                            <a href="" class="nav-link px-0 align-middle text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                                <span class="ms-1 d-none d-sm-inline">
                                    About
                                </span>
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
                    Home
                </h1>
                <hr style="background-color: black; height: 2px;">
                <div class="row">
                    <div class="col">
                        <div class="card" style="height: 370px;">
                            <div class="card-header text-start">
                                Request Dashboard
                            </div>
                            <div class="card-body text-start">
                                <div class="card">
                                    <div class="card-body bg-success rounded text-light" @click="open_modal">
                                        <h4>Request</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body bg-success rounded text-light">
                                        <h4>Request</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body bg-success rounded text-light">
                                        <h4>Request</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

    <div v-if="pop === true">
        <PopUpModal>
    
            <div class="col-sm pt-2">
                <!-- <h4 class="fw-bold">Request</h4>
                <hr stlye="background-color: black"> -->
                <div class="row justify-content-end">
                    <div class="col-sm" v-if="next_page === true">
                        <button @click="back_btn" class="btn btn-outline-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-4">
                        <h4 class="fw-bold"> Reservation Request</h4>
                        <hr stlye="background-color: black">
                    </div>
                    <div class="col-4">
                        <button @click="close_modal" class="btn btn-outline-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="text-start">
                    <div class="card">
                        <div class="card-body bg-white rounded text-dark" @click="open_modal">
                            <div class="container pb-5" v-if="next_page === false">
                                <div class="row pb-3">
                                    <h5 class="fw-bolder d-flex justify-content-start pb-1">Personal Details</h5>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="fw-bold">Full Name</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Email</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Mobile Number</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"  v-model="fullName" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="email" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="mobileNumber" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                <div class="row pb-3">
                                    <h5 class="fw-bolder d-flex justify-content-left pb-1">Reservation Details</h5>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="fw-bold">Date</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Time</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Organization/Department</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"  v-model="date" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="time" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="org" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="fw-bold">Equipments</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Venue</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Description</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"  v-model="equipments" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="venue" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="description" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                            </div>
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
                                    <h6 class="fw-bold">Related Documents</h6>
                                </div>
                                <div class="card text-center bg-light">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet.pdf
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>       
                                    </div>
                                </div>
                                <div class="pt-5">
                                    <button class="btn btn-primary me-3" type="submit" @click="close_modal">
                                        Approve
                                    </button>   
                                    <button class="btn btn-outline-danger" type="submit" @click="close_modal">
                                        Reject
                                    </button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </PopUpModal>
    </div>

</template>

<script>
import PopUpModal from "@/components/PopUpModal.vue";

export default{
    components: {
        PopUpModal,
    },

    data(){
        return{
            pop: false,
            fullName:"John Doe",
            email:"jdoe@gbox.adnu.edu.ph",
            mobileNumber:"09123456789",
            date: "January 18, 2023",
            time: "11:00AM-1:30PM",
            org: "TACTICS",
            equipments: "Microphone- 2pcs, Speaker- 3pcs...",
            venue: "Richie Fernando Hall",
            description: "Lorem ipsum dolor sit amet, consectetur...",
            relatedDoc: "Lorem ipsum dolor sit amet.pdf", 
            next_page: false,

        }
    },
    methods: {
        reservationPage(){
            this.$router.push({name: 'reservation'})
        },
        
        nextPage(){
            this.next_page = true;
        },

        back_btn(){
            this.next_page = false;
        },

        open_modal(){
            this.pop = true;
        },

        close_modal(){
            this.pop = false;
            this.open_modal = false;
            this.next_page = false;
        },
    }
}

</script>
