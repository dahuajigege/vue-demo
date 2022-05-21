<template>
    <div class="people">
        <h2>姓名：</h2>
        <input v-model="people.name"/>
        <h2>性别：</h2>
        <input v-model="people.sex"/>
        <br/>
        <button @click="addPeople">新增</button>
        <button @click="getPeople">查询</button>
        <br/>
        <h3 v-for="item in peopleList">{{ item }}</h3>
    </div>
</template>

<script>
export default {
    name: "people",
    data() {
        return {
            people: {
                name: null,
                sex: null,
                age: null,
                phone: null,
            },
            peopleList: []
        }
    },
    methods: {
        addPeople() {
            if (this.people.name != null) {
                this.$http.post("/test/addPeople", this.people).then(
                    (res) => {
                        if (res.status === 200) {
                            alert("添加成功！");
                        }
                    }
                );
            }
        },
        getPeople() {
            this.$http.post("/test/getAllPeople", {}).then(
                (res) => {
                    this.peopleList = res.data;
                }
            );
        }
    }
}
</script>

<style scoped>

</style>
