const login = {
    template: `
<div> 
    <h1>Login page</h1>
    <div class="" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 v-if="!logged" class="modal-title" id="exampleModalLabel">Bejelentkezés</h5>
                    <h5 v-if="logged" class="modal-title" id="exampleModalLabel">Kijelentkezés</h5>
                    <button type="button" class="btn-close" aria-label="Close"
                    @click="closeClick()"
                    >
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="!logged" class="input-group mb-3">
                        <span class="input-group-text">
                            &nbsp&nbsp&nbspNév:
                        </span>
                        <input type="text" class="form-control" v-model="BNev">
                    </div>
                    <div v-if="!logged" class="input-group mb-3">
                        <span class="input-group-text">
                            Jelszó: 
                        </span>
                        <input type="password" class="form-control" v-model="Jelszo">
                    </div>
                    <button v-if="!logged" type="button" data-bs-toggle="modal" data-bs-target="#regModal" class="btn btn-success m-2 float-end">Regisztráció</button>
                    <button type="button" @click="loginClick(BNev, Jelszo)" v-if="!logged" class="btn btn-primary m-2 float-end">Bejelentkezés</button>
                    <button type="button" @click="logoutClick()" v-if="logged" class="btn btn-primary m-2 float-home">Kijelentkezés</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="regModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" >
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title" id="exampleModalLabel">Regisztráció</h5>
                    <button type="button" class="btn-close" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            &nbsp&nbsp&nbspNév:
                        </span>
                        <input type="text" class="form-control" v-model="BNev">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            Jelszó: 
                        </span>
                        <input type="password" class="form-control" v-model="Jelszo">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            &nbsp&nbsp&nbspFelh. név:
                        </span>
                        <input type="text" class="form-control" v-model="FNev">
                    </div>
                    <button type="button" @click="regClick(BNev, Jelszo, FNev)" class="btn btn-success m-2 float-end" data-bs-dismiss="modal">Regisztráció</button>
                </div>
            </div>
        </div>
    </div>

</div>`,

    data() {
        return {
            BNev: "",
            Jelszo: "",
            FNev: "",
            Jog: "",
            Aktiv: "",
            logged: app.$logged
        }
    },

    methods: {
        closeClick() {
            location.replace("index.html#/home");
        },

        refreshData() {
            if (app.$logged) {
                document.getElementById("loginButton").innerHTML = "Logout";
            } else {
                document.getElementById("loginButton").innerHTML = "Login";
            }
        },

        loginClick(bNev, jelszo) { // ez a formális paraméter, a meghíváskor a tényleges
            axios.post(variables.API_URL + "Login?bNev=" + bNev + "&jelszo=" + CryptoJS.MD5(jelszo).toString(), {})
                .then(response => {
                    this.Uid = response.data;
                    app.$Uid = this.Uid;
                    console.log(app.$Uid);
                    // akkor sikeres, ha az uid-t splittelve 5 részes tömböt kapunk
                    const mezok = app.$Uid.split("-");
                    if (mezok.length == 5) {
                        app.$logged = true;
                        alert("Sikeres bejelentkezés");
                    } else {
                        app.$logged = false;
                        alert(app.$Uid); // ez lehet hibaüzenet is lehet
                    }
                    this.refreshData(); // frissíti a képernyőt (pl. login gombból logout)
                });
            location.replace("index.html#/home");
        },
        regClick(bNev, jelszo, fNev) {
            axios.post(variables.API_URL + "felhasznalo", {
                    BNev: bNev,
                    Jelszo: CryptoJS.MD5(jelszo).toString(),
                    FNev: fNev,
                    Jog: 0,
                    Aktiv: 0
                })
                .then(response => {
                    this.refreshData();
                    alert(response.data);
                });
            location.replace("index.html#/home");
        },


        logoutClick(uid) {
            axios.post(variables.API_URL + "Logout/" + app.$Uid, {}) // itt akár lehet a visszatérési értéket vizsgálni, hogy true-e
                .then(response => {
                    app.$logged = false;
                    this.refreshData();
                    alert(response.data);
                });
            location.replace("index.html#/home");
        }
    },


    mounted: function() {

    }

}