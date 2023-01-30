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
                                    <div class="card-body bg-danger rounded text-light" @click="open_modal">
                                        <h4>Rejected</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body bg-primary rounded text-light">
                                        <h4>Approved</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body bg-secondary rounded text-light">
                                        <h4>Pending</h4>
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
                    <div class="col-4">
                        <h4 class="fw-bold">Request</h4>
                        <hr stlye="background-color: black">
                    </div>
                    <div class="col-4">
                        <button @click="close_modal" class="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="text-start">
                    <div class="card">
                        <div class="card-body bg-danger rounded text-light" @click="open_modal">
                            <h4 class="fw-bold">Rejected | Event date: January 1, 2023</h4>
                            <div class="pt-3 text-start">
                                <div class="row">
                                    <div class="col">
                                        <h5 class="fw-bold">Venue</h5>
                                    </div>
                                    <div class="col">   
                                        <h5 class="fw-bold">Time</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="pt-1 text-start">
                                <div class="row">
                                    <div class="col">
                                        <h6>Richie Fernando</h6>
                                    </div>
                                    <div class="col">   
                                        <h6>11:00AM - 1:30PM</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="pt-3">
                                <h5 class="fw-bold">Description</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex.
                                </p>
                            </div>

                            <div class="pt-3 text-start">
                                <h5 class="fw-bold">Equipments</h5>
                                <ul style="list-style: none">
                                    <li>
                                        Microphone - 4pcs
                                    </li>
                                    <li>
                                        Speakers - 3pcs
                                    </li>
                                    <li>
                                        Mic stand - 10pcs
                                    </li>
                                </ul>
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
        }
    },
    methods: {
        reservationPage(){
            this.$router.push({name: 'reservation'})
        },

        open_modal(){
            this.pop = true;
        },

        close_modal(){
            this.pop = false;
        },
    }
}

</script>
