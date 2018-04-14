<template>
    <div class="about">
        <v-list two-line>
            <v-list-tile-content
                v-for="u in users"
            > name: {{ u.name }} || email: {{ u.email }}
            </v-list-tile-content>
        </v-list>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                users: ''
            }
        },
        computed: {},
        created() {
            axios.get('/users.json')
                .then(res => {
                    let data = res.data;
                    let users = [];
                    for (let d in data) {
                        users.push(data[d])
                    }
                    ;
                    this.users = users;
                })
                .catch(err => console.log(err))
        }
    }
</script>