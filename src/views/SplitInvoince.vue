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
                        
                                            <span class="orange" v-if="resteNonAttribuer(art.id) > 0">{{ resteNonAttribuer(art.id) }}</span>
                                            <span class="vert" v-else-if="resteNonAttribuer(art.id) == 0">{{ resteNonAttribuer(art.id) }}</span>
                                            <span c v-else class="text-danger">{{ resteNonAttribuer(art.id) }}</span>
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
                {
                    id: "3",
                    name: "Samusung Galaxy",
                    price: 200000,
                    qte: 12,
                },
                {
                    id: "4",
                    name: "MAC BOOK PRO",
                    price: 1500,
                    qte: 7,
                },
            ]

        }
    },
    methods: {
        resteNonAttribuer(article_id) {

            const x = this.products.find(product => product.id == article_id);
            // Le produits peut n'est pas être disponible
            const artiles = this.arrayData.filter(e => e.articleId == x.id);
            let sum = 0;
            if (artiles.length > 0) {
                sum = artiles.reduce((c, object) => object.value * 1 + c, 0)
            }

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

td span{
    display: block;
}
.text-danger {
    background: rgb(248, 108, 108);
    font-size: smaller;
}
.vert{
    background : green;
}

.orange{
    background: orange;
}

table {
    width: 100%;
    border-collapse: collapse;
    
    
}

th,
tr,
td {
    border: 1px solid pink;
    padding: 0 6px;
}
</style>