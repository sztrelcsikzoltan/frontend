const autok = {template:`
<div>

    <table class="table table-striped">
        <thead>
            <tr>
                <th>Auto Id</th>
                <th>Szöveg</th>
                <th>Linkkkép</th>
                <th>Ár</th>
                <th>Műveletek</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="auto in autok">
                    <td>{{auto.id}}</td>
                    <td>{{auto.szoveg}}</td>
                    <td>{{auto.linkkep}}</td>
                    <td>{{auto.ar}}</td>
            </tr>
        </tbody>
    </table>

</div>
`,

data(){
    return{
        autok:[]
    }
},

methods:{
    refreshData(){
        axios.get(variables.API_URL + "auto").then((response) => {
            this.autok = response.data;
        });
    }
},

mounted:function() {
    this.refreshData();
}


}

