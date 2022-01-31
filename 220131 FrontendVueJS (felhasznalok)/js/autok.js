const autok = {
    template: `
<div>
<h5 class="d-flex justify-content-center">
    Autók adatainak karbantartása
</h5>    
<button v-if="logged" type="button" class="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">Autó hozzáadása</button>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Autó Id</th>
                <th>Szöveg</th>
                <th>Linkkép</th>
                <th class="jobb">Ár</th>
                <th class="kozep">Fénykép</th>
                <th>Műveletek</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="auto in autok">
                <td>{{auto.id}}</td>
                <td>{{auto.szoveg}}</td>
                <td>{{auto.linkkep}}</td>
                <td class="jobb">{{auto.ar}} Ft</td>
                <td class="kozep"><img width="64px" height="40px" :src="PhotoPath+auto.linkkep"/></td>
                <td v-if="logged">
                    <button type="button" title="Módosítás" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(auto)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                    </svg>
                    </button>
                    <button type="button" title="Törlés" class="btn btn-light mr-1" @click="deleteClick(auto.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"      fill="currentColor" class="bi bi-emoji-dizzy-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                        </svg>
                    </button>
                </td>
                <td v-if="!logged">
                    <button type="button" title="További információk" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="infoClick(auto)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </button>
                </svg>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            Szöveg
                        </span>
                        <input type="text" class="form-control" v-model="AutoSzoveg">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            Linkkép
                        </span>
                        <input type="text" class="form-control" v-model="AutoLinkkep">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            Ár
                        </span>
                        <input type="number" class="form-control" v-model="AutoAr">
                    </div>
                    <div class="p2 w50 bd-highlight">
                        <img class="foto" width="460px" height="290px" :src="PhotoPath+AutoLinkkep"/>
                        <input v-if="logged" class="m2" type="file" @change="imageUpload">
                    </div>
                    <div v-if="logged">
                        <button type="button" @click="createClick()" v-if="AutoId==0" class="btn btn-primary">Létrehoz</button>
                        <button type="button" @click="updateClick()" v-if="AutoId!=0" class="btn btn-primary">Módosítás</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>`,

    data() {
        return {
            logged: app.$logged,
            autok: [],
            AutoId: 0,
            AutoSzoveg: "",
            AutoLinkkep: "/img/kocsika.jpg",
            AutoAr: 0,
            PhotoPath: variables.PHOTO_URL,
            modalTitle: "",
            // $pageTitle = "Autók adatainak karbantartása."

        }
    },

    methods: {
        refreshData() {
            axios.get(variables.API_URL + "auto")
                .then((response) => {
                    this.autok = response.data;
                });
        },
        infoClick(auto) {
            this.modalTitle = "Autó információs adatai";
            this.AutoId = auto.id;
            this.AutoSzoveg = auto.szoveg;
            this.AutoLinkkep = auto.linkkep;
            this.AutoAr = auto.ar;
        },
        addClick() {
            this.modalTitle = "Autó hozzáadása";
            this.AutoId = 0;
            this.AutoSzoveg = "";
            this.AutoLinkkep = "/img/kocsika.jpg";
            this.AutoAr = 0;
        },
        editClick(auto) {
            this.modalTitle = "Autó módosítása";
            this.AutoId = auto.id;
            this.AutoSzoveg = auto.szoveg;
            this.AutoLinkkep = auto.linkkep;
            this.AutoAr = auto.ar;
        },
        imageUpload(event) {
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            axios.post(
                    variables.API_URL + "auto/ImgUpload",
                    formData)
                .then(response => {
                    this.AutoLinkkep = "/img/" + response.data;
                });
        },
        createClick() {
            axios.post(variables.API_URL + "auto", {
                    Szoveg: this.AutoSzoveg,
                    Linkkep: this.AutoLinkkep,
                    Ar: this.AutoAr
                })
                .then(response => {
                    this.refreshData();
                    alert(response.data);
                });
        },
        updateClick() {
            axios.put(variables.API_URL + "auto", {
                    Id: this.AutoId,
                    Szoveg: this.AutoSzoveg,
                    Linkkep: this.AutoLinkkep,
                    Ar: this.AutoAr
                })
                .then(response => {
                    this.refreshData();
                    alert(response.data);
                });
        },
        deleteClick(id) {
            if (!confirm("Biztosan töröljem?")) {
                return;
            }
            axios.delete(variables.API_URL + "auto/" + id)
                .then(response => {
                    this.refreshData();
                    alert(response.data);
                });
        }
    },

    mounted: function() {
        // app.$pageTitle = "Felhasználók adatainak karbantartása.";
        this.refreshData();
    }

}