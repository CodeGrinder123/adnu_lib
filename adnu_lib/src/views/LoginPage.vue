<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>

    <div class="container">
        <div class="row">
            <div class="col pt-5 pb-5">
                <!-- <div class="card" style="height: 350px; width: 700px">
                    <div class="card-header text-start">
                        Today | January 18, 2023
                    </div>
                    <div class="card-body text-start">
                        <blockquote class="blockquote mb-0">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Integer posuere erat a ante.
                        </p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> -->
                        <!-- </blockquote>
                    </div>
                </div> -->
                <div class="pe-5">
                    <ejs-schedule height="375px" width="700px" currentView="Day" class="rounded">
                    </ejs-schedule>
                </div>
            </div>
            <div class="col pt-5">
                <!-- <HelloWorld/> -->
                <div class="float-end">
                    <div class="">
                        <img src="../assets/Ateneo_de_Naga_University_logo.png" width="80" height="80" class="d-inline-block align-top" alt="">
                    </div>
                    <h6 class="text-weight-normal mt-4">
                        Welcome to James O'Brien S.J. Library
                    </h6>
                    <div class="pt-5">
                        <button type="button" class="btn btn-outline-primary rounded-pill" @click="handleSignIn()">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" class="pb-1">
                            Continue with Google Gbox
                        </button>
                    </div>
                    <h6 class="text-weight-normal mt-5">
                        Contact ADNU Library for more information
                    </h6>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="page-footer fluid-bottom border-top border-warning" style="background-color: #003A6C">
        <div class="container text-left">
        <!-- Grid row -->
            <div class="row text-start">
                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="font-weight-bold mt-3 mb-4 text-light">James O'Brien Library</h5>
                    <p class="font-weight-light text-light">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </small>
                    </p>
                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">
                    <!-- Grid column -->
                    <div class="col-md-3 mx-auto">
                        <!-- Links -->
                        <h5 class="font-weight-bold mt-3 mb-4 text-light">Links</h5>

                        <ul class="list-unstyled">
                            <li class="text-light">
                                <a href="#!">ADNU Website</a>
                            </li>
                            <li class="text-light">
                                <a href="#!">KAIZEN</a>
                            </li>
                            <li class="text-light">
                                <a href="#!">ADNU Library</a>
                            </li>
                        </ul>
                    </div>
                    <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">

                <!-- Grid column -->
                <div class="col-md-3 mx-auto">
                    <h5 class="font-weight-bold text-light mt-3 mb-4">Contact Us</h5>
                    <p class="font-weight-light text-light">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </small>
                    </p>
                </div>
                <!-- Grid column -->
            </div>
        <!-- Grid row -->
        </div>
        <!-- Footer Links -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3 text-light">© 2023 Copyright:
                <a href="/"> Ateneo de Naga University</a>
            </div>
            <!-- Copyright -->
    </footer>
    <!-- Footer -->
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import { ScheduleComponent, Day, Agenda } from "@syncfusion/ej2-vue-schedule";

const gapi = window.gapi;
export default{
    name: 'LoginPage',
    // components: {HelloWorld},
    components: {
        'ejs-schedule': ScheduleComponent
    },
    provide: {
        schedule: [Day, Agenda]
    },
    data(){
        return{
            profileFirstname: '',
            profileLastname: '',
            profileFullname: '',
            profileImage: '',
            profileEmail: '',
            profileId: '',
            currentUser: '',
            gapiLoaded: false,
        }
    },
    methods: {
        async handleSignIn(){
            try {
                let googleUser = await gapi.auth2.getAuthInstance().signIn();

                this.profileFirstname = googleUser.getBasicProfile().getGivenName(); //tw.lv.rZ;
                this.profileLastname = googleUser.getBasicProfile().getFamilyName(); //tw.lv.EX; 
                this.profileFullName = googleUser.getBasicProfile().getName(); //tw.lv.Af;  
                this.profileImage = googleUser.getBasicProfile().getImageUrl(); //tw.lv.nO; 
                this.profileEmail = googleUser.getBasicProfile().getEmail();  //tw.lv.Xv;  
                this.profileId = googleUser.getBasicProfile().getId();   //tw.lv.ZX;  
            } catch(error) {
                console.log(error);
            }
        }
    },

    mounted: async function(){
        try{
            gapi.load("client:auth2", function () {
                gapi.auth2.getAuthInstance();
            });

            const googleUser = await gapi.auth2.getAuthInstance();
            // await this.loadClient();
            console.log("This is the googleUser:", googleUser);
            this.currentUser = googleUser.currentUser.get().getBasicProfile().getName();
            this.gapiLoaded = true;
        } catch(error){
            console.log(error);
        }
    }

}
</script>
