const autok = {template:`
<div>
    <button type="button" class="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">Autó hozzáadása</button>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Auto Id</th>
                <th>Szöveg</th>
                <th>Linkkkép</th>
                <th class="jobb">Ár</th>
                <th>Műveletek</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="auto in autok">
                    <td>{{auto.id}}</td>
                    <td>{{auto.szoveg}}</td>
                    <td>{{auto.linkkep}}</td>
                    <td class="jobb" >{{auto.ar}} Ft</td>
                    <td>
                        <button type="button" title="Módosítás" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(auto)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                            <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                            </svg>
                        </button>

                        <button type="button" title="Törlés" class="btn btn-light mr-1" @click="deleteClick(auto.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </td>
            </tr>
        </tbody>
    </table>

    <div class ="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            Szöveg
                        </span>
                        <input type="text" class="form-control" v-model="AutoSzoveg" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            Linkkép
                        </span>
                    <input type="text" class="form-control" v-model="AutoLinkkep" />
                    </div>
                    <div class="input-group mb-3">
                    <span class="input-group-text">
                        Ár
                    </span>
                    <input type="text" class="form-control" v-model="AutoAr" />
                    </div>
                    <div class="p2 w50 bd-highlight">
                        <img class="foto" width="460px" height="290px" :src="PhotoPath +AutoLinkkep" />
                        <input class ="m2" type="file" @change="imageUpload" />
                    </div>
                    <button type="button" @click="createClick()" v-if="AutoId==0" class="btn btn-primary">Létrehoz</button>
                    <button type="button" @click="updateClick()" v-if="AutoId!=0" class="btn btn-primary">Módosítás</button>

                </div>
            </div>
        </div>
    </div>

</div>
`,

data(){
    return{
        autok:[],
        AutoId:0,
        AutoSzoveg:"",
        AutoLinkkep:"kocsika.jpg",
        AutoAr:0,
        PhotoPath:variables.PHOTO_URL,
        modalTitle:""
    }
},

methods:{
    refreshData(){
        axios.get(variables.API_URL + "auto").then((response) => {
            this.autok = response.data;
        });
    },

    createClick(){
        axios.post(variables.API_URL+"auto",{
            Szoveg: this.AutoSzoveg,
            Linkkep: this.AutoLinkkep,
            Ar: this.AutoAr
        })
        then(response =>{
            this.refreshData();
            alert(response.data);
        });
    },

    addClick(){
        this.modalTitle="Autó hozzáadása";
        this.AutoId=0;
        this.AutoSzoveg = "";
        this.AutoLinkkep = "kocsika.jpg";
        this.AutoAr = 0;
    },
    
    editClick(auto){
        this.modalTitle="Autó módosítása";
        this.AutoId=auto.id;
        this.AutoSzoveg = auto.szoveg;
        this.AutoLinkkep = auto.linkkep;
        this.AutoAr = auto.ar;
    },
    imageUpload(event){
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        axios.post(
            variables.API_URL+"auto/ImageUpload",
            formData)
            .then(response =>{
                this.AutoLinkkep = response.data;
            });
    },
    updateClick(){
        axios.put(variables.API_URL+"auto",{
            Id: this.AutoId,
            Szoveg: this.AutoSzoveg,
            Linkkep: this.AutoLinkkep,
            Ar: this.AutoAr
        })
        then(response =>{
            this.refreshData();
            alert(response.data);
        });
    }
},

mounted:function() {
    this.refreshData();
}


}

