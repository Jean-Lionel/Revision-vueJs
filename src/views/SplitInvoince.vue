<template>
    <div>
        <h1>Hello split Invoice</h1>
        <div>
            <table>
                <tr>
                    <th>Article</th>
                    <th>Qté Total</th>
                    <th v-for="i in number"> Client {{ i }}</th>
                    <th>Reste Non Attribuer</th>
                </tr>
                <tr v-for="art in products" :key="art">
                    <td>{{ art.name }}</td>
                    <td>{{ art.qte }}</td>
                    <td v-for="client_number in number">
                        <input type="text" @input="event => setValue(client_number, art.id, event.target.value)"
                            style="width: 100px !important;">
                    </td>
                    <td>

                        <span v-if="resteNonAttribuer(art.id) > 0">{{ resteNonAttribuer(art.id) }}</span>
                        <span v-else class="text-danger">{{ resteNonAttribuer(art.id) }}</span>
                    </td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputs: {},
            arrayData: [],
            number: 3,
            products: [
                {
                    id: "1",
                    name: "Computer",
                    price: 500,
                    qte: 10,
                },
                {
                    id: "2",
                    name: "Car",
                    price: 2000,
                    qte: 4,
                },
            ]

        }
    },
    methods: {
        resteNonAttribuer(article_id) {
            const x = this.products.find(product => product.id == article_id);
            // Le produits peut n'est pas être disponible
            const artiles = this.arrayData.filter(e => e.articleId == x?.id);
            let sum = this.arrayData.reduce((c, object) => object.value * 1 + c, 0)
            return x.qte - sum;
        },
        setValue(clientId, article, v) {
            const index = this.arrayData.findIndex(e => e.clientId == clientId && e.articleId == article);

            if (index != -1) {
                this.arrayData[index] = {
                    "clientId": clientId,
                    "articleId": article,
                    "value": v,
                };
            } else {
                this.arrayData.push({
                    "clientId": clientId,
                    "articleId": article,
                    "value": v,
                });
            }
        }
    }

}
</script>

<style  scoped>
.text-danger {
    color: rgb(248, 108, 108);
    font-size: smaller;
}

table {
    width: 100%;
    border-collapse: collapse;


}

th,
tr,
td {
    border: 1px solid pink;
    padding: 0 30px;
}
</style>