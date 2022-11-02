<template>
    <div>
        <h1>Liste des utilisateurs</h1>

        <div>
 
        <div v-if="utilisateurs.length < 2">
            is loading ...............
        </div>
        <table>
            <thead>
                <tr>
                <th>Profil</th>
                <th>login</th>
                </tr>
            </thead>
           <tbody>

            <tr v-for="utilisateur in utilisateurs " :key="utilisateur.id">
            <td>
                <img :src="utilisateur.avatar_url" alt="" id="img-card">
            </td>
            <td>{{ utilisateur.login }}</td>
            <td>
            <a :href="utilisateur.followers_url">🎗️ Followers</a>
            </td>
            
            </tr>
           </tbody> 
        </table>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    data() {
        return {
            utilisateurs : []
        }
    },
    created() {
        this.getUser()
    },
    methods: {

        getUser() {
            axios.get("https://api.github.com/users", {

            }).then( (response) => {
                    console.log(response)
                   this.utilisateurs = response.data
                })
                .catch( (error) =>{
                    console.log(error)
                })
        }
    }

}


</script>

<style>
table{
    width: 100%;
    border-collapse: collapse;
}
tr, td,th{
    border: 2px solid hsl(210, 23%, 95%);
}

#img-card{
    width: 50px;
    border-radius: 50%;
}
</style>