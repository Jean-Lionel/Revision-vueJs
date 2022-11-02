<template>
    <div :class="['popup', 'nonprintable', {'active':active}]">
        <div class="popup-body">
            <button class="close" @click="$emit('close')">&times</button>
            <center>
                <h3>Paiement</h3>
            </center>
            <form method="post">
                <div>
                    La somme à payer <b>{{money(cart.getTotal()) }}</b>Fbu
                </div>
                <div class="field">
                    <label for="id_somme">La somme payée:</label>
                    <input type="number" id="id_somme" v-model="payee" step="100">
                </div>
                <div>
                    La somme
                    <span v-if="payee >= cart.getTotal()">à lui retourner</span>
                    <b v-else>restante</b>
                    est de: <b>{{ money(Math.abs(payee - cart.getTotal())) }}</b> Fbu
                </div>
                <hr>
                <div>
                    <input type="checkbox" id="is_client_new" v-model="is_client_new">
                    <label for="is_client_new"> C'est un nouveau client:</label>
                </div>
                <div class="field" v-if="!is_client_new">
                    <label for="keyword">Nom du client:</label>
                    <div class="searchable">
                        <input type="search" id="keyword" name="keyword" placeholder="keyword" v-model="keyword">
                        <button @click.prevent="search">search</button>
                    </div>
                    <div class="logs">
                        {{ logs }}
                    </div>
                </div>
                <div v-show="is_client_new">
                    <div class="field">
                        <label for="id_nom">Nom du client</label>
                        <input type="text" name="fullname" v-model="client.nom">
                    </div>
                    <div class="field">
                        <label for="id_tel">Téléphone</label>
                        <input type="number" v-model="client.tel">
                    </div>
                    <div class="field">
                        <label position="floating">Invoice Type: {{ client.invoice_type }}</label>
                        <select v-model="client.invoice_type">
                            <option value="">...</option>
                            <option value="FN">
                                Facture normale
                            </option>
                            <option value="RC">
                                Remboursement caution
                            </option>
                            <option value="RHF">
                                Réduction Hors Facture
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <label position="floating">VAT Taxpayer</label>
                        <select v-model="client.vat_taxpayer">
                            <option value="">...</option>
                            <option value="0">
                                Non assujetti à la TVA
                            </option>
                            <option value="1">
                                Assujetti à la TVA
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <label position="floating">CT Taxpayer</label>
                        <select v-model="client.ct_taxpayer">
                            <option value="">...</option>
                            <option value="0">
                                Non Assujetti à la taxe de consommation
                            </option>
                            <option value="1">
                                Assujetti à la taxe de consommation
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <label position="floating">TL Taxpayer</label>
                        <select v-model="client.tl_taxpayer">
                            <option value="">...</option>
                            <option value="0">
                                Non Assujetti au prélèvement forfaitaire libératoire
                            </option>
                            <option value="1">
                                Assujetti au prélèvement forfaitaire libératoire
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <label position="floating">Payment Type</label>
                        <select v-model="client.payment_type">
                            <option value="">...</option>
                            <option value="1">
                                en espèce
                            </option>
                            <option value="2">
                                banque
                            </option>
                            <option value="3">
                                à crédit
                            </option>
                            <option value="4">
                                autres
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <label position="floating">Invoice Currency</label>
                        <select v-model="client.invoice_currency">
                            <option value="">...</option>
                            <option value="BIF">
                                Franc Burundais
                            </option>
                            <option value="USD">
                                United State Dollar
                            </option>
                            <option value="EUR">
                                EURO
                            </option>
                        </select>
                    </div>
                    <div class="field">
                        <label position="floating">Customer Name</label>
                        <input type="text" placeholder="Customer Name" name="customer_name"
                            v-model="client.customer_name" />
                    </div>
                    <div class="field">
                        <label position="floating">Customer TIN</label>
                        <input type="text" placeholder="Customer TIN" name="customer_TIN"
                            v-model="client.customer_TIN" />
                    </div>
                    <div class="field">
                        <label position="floating">Customer Address</label>
                        <input type="text" placeholder="Customer Address" name="customer_address"
                            v-model="client.customer_address" />
                    </div>
                    <div class="field">
                        <label position="floating">VAT Customer Payer</label>
                        <select v-model="client.vat_customer_payer">
                            <option value="">...</option>
                            <option value="0">
                                Non assujetti à la TVA
                            </option>
                            <option value="1">
                                assujetti à la TVA
                            </option>
                        </select>
                    </div>
                </div>
                <div class="buttons">
                    <button type="submit" value="Vendre" @click.prevent="postVente">Soumettre</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props: {
        active: { type: Boolean, default: false },
    },
    data() {
        return {
            client: {
                nom: "",
                tel: "",
                invoice_type: "",
                vat_taxpayer: "",
                ct_taxpayer: "",
                tl_taxpayer: "",
                vat_taxpayer: "",
                ct_taxpayer: "",
                tl_taxpayer: "",
                payment_type: "",
                invoice_currency: "",
                customer_name: "",
                customer_TIN: "",
                customer_address: "",
                vat_customer_payer: ""
            },
            cart: this.$store.state.cart,
            dette_p: null,
            logs: "",
            is_client_new: false,
            keyword: "",
        }
    },
    watch: {
        active(new_val) {
            if (new_val) {
                this.$store.state.commande = null;
            }
        },
        'client.nom'(new_val) {
            this.client.customer_name = new_val
        },
    },
    computed: {
        payee: {
            get() {
                return this.dette_p == null ? this.cart.getTotal() : this.dette_p
            },
            set(val) {
                this.dette_p = val
            }
        },
    },
    methods: {
        close() {
            this.client = {
                nom: "",
                tel: "",
                invoice_type: "",
                vat_taxpayer: "",
                ct_taxpayer: "",
                tl_taxpayer: "",
                vat_taxpayer: "",
                ct_taxpayer: "",
                tl_taxpayer: "",
                payment_type: "",
                invoice_currency: "",
                customer_name: "",
                customer_TIN: "",
                customer_address: "",
                vat_customer_payer: ""
            }
            this.dette_p = null
            this.logs = ""
            this.is_client_new = false
            this.keyword = ""
            this.$emit("close")
        },
        search() {
            if (!this.keyword) {
                this.logs = "* le champ est obligatoire"
                return
            }
            this.logs = "recherche en cours ..."
            axios.get(this.url + `/client/?search=${ this.keyword }`, this.headers)
                .then((response) => {
                    let results = response.data.results
                    if (results.length == 0) {
                        this.logs = "aucun client trouvé"
                    } else if (results.length > 1) {
                        this.logs = "le resultat est flou"
                    } else {
                        console.log('OK')
                        this.client = results[0]
                        this.logs = `${ this.client.nom } : ${ this.client.tel } NIF: ${ this.client.customer_TIN }`
                    }
                }).catch((error) => {
                    this.displayErrorOrRefreshToken(error, this.search)
                });
        },
        postVente() {
            if (this.payee < this.cart.getTotal()) {
                if (this.client.tel.length < 7) {
                    this.$store.state.alert = {
                        type: "danger", message: "le numero de telephone est obligatoire pour les dettes"
                    }
                    return;
                }
            }
            let data = {};
            let items = [];
            let tva = 0
            let client = {
                "nom": this.client.nom,
                "tel": this.client.tel,
                "invoice_type": this.client.invoice_type,
                "vat_taxpayer": this.client.vat_taxpayer,
                "ct_taxpayer": this.client.ct_taxpayer,
                "tl_taxpayer": this.client.tl_taxpayer,
                "vat_taxpayer": this.client.vat_taxpayer,
                "ct_taxpayer": this.client.ct_taxpayer,
                "tl_taxpayer": this.client.tl_taxpayer,
                "payment_type": this.client.payment_type,
                "invoice_currency": this.client.invoice_currency,
                "customer_name": this.client.customer_name,
                "customer_TIN": this.client.customer_TIN,
                "customer_address": this.client.customer_address,
                "vat_customer_payer": this.client.vat_customer_payer,
                "kiosk": this.active_kiosk.id
            }
            for (let item of this.cart.content) {
                tva = item.product.prix * item.product.tva / 100
                items.unshift({
                    "produit": item.product.id,
                    "quantite": item.quantite,
                    "item_designation": item.product.nom,
                    "item_quantity": item.quantite,
                    "item_price": item.product.prix,
                    "item_ct": item.product.item_ct,
                    "item_tl": item.product.item_tl,
                    "item_price_nvat": item.product.prix - tva,
                    "vat": tva,
                    "item_price_wvat": item.product.prix + tva,
                    "item_total_amount": item.product.prix * item.quantite
                })
            }
            let payee = this.payee <= this.cart.getTotal() ? this.payee : this.cart.getTotal()
            data = {
                "invoice_type": client.invoice_type,
                "invoice_type": client.invoice_type,
                "tp_type": this.active_kiosk.tp_type,
                "tp_name": this.active_kiosk.tp_name,
                "tp_TIN": this.active_kiosk.tp_TIN,
                "tp_trade_number": this.active_kiosk.tp_trade_number,
                "tp_postal_number": this.active_kiosk.tp_postal_number,
                "tp_phone_number": this.active_kiosk.tp_phone_number,
                "tp_address_province": this.active_kiosk.tp_address_province,
                "tp_address_commune": this.active_kiosk.tp_address_commune,
                "tp_address_quartier": this.active_kiosk.tp_address_quartier,
                "tp_address_avenue": this.active_kiosk.tp_address_avenue,
                "tp_address_number": this.active_kiosk.tp_address_number,
                "tp_fiscal_center": this.active_kiosk.tp_fiscal_center,
                "tp_activity_sector": this.active_kiosk.tp_activity_sector,
                "tp_legal_form": this.active_kiosk.tp_legal_form,
                "ventes": items,
                "payee": payee,
                "client": client,
                "kiosk": this.active_kiosk.id
            };
            if (data.ventes.length == 0) {
                this.$store.state.alert = {
                    type: "danger", message: "le panier est vide"
                }
                return;
            }
            this.postUmuhora(data)
        },
        postUmuhora(data) {
            axios.post(this.url + "/commande/", data, this.headers)
                .then((response) => {
                    let data = response.data
                    this.$store.state.commande = data;
                    this.$store.state.commandes.unshift(data);
                    this.performOBRPost(data)
                }).catch((error) => {
                    this.displayErrorOrRefreshToken(error, () => this.postUmuhora(data))
                });
        },
        endDialog() {
            for (let item of this.cart.content) {
                item.product.quantite -= item.quantite
            }
            this.cart.content = []
            setTimeout(print, 100)
            this.close()
        },
        performOBRPost(data) {
            let invoice = this.commandToInvoice(data)
            axios.post(this.obr_url + "/addInvoice/", invoice, this.obr_headers)
                .then((response) => {
                    if (!response.data.success) {
                        if (response.data.msg.includes("API est manquante.")) {
                            this.refreshOBR(() => this.performOBRPost(data))
                        } else {
                            this.$store.state.alert = {
                                type: "danger", message: this.cleanString(response.data.msg)
                            }
                            this.endDialog()
                        }
                    } else {
                        data["synced"] = true
                        this.endDialog()
                    }
                }).catch((error) => {
                    this.displayErrorOrRefreshOBR(error, () => this.performOBRPost(data), null)
                })
        }
    }
};
</script>
<style scoped>

</style>