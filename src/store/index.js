import { createStore } from 'vuex'
import donatur from "../store/modules/donatur"
import clients from "../store/modules/clients"
import transaksi from "../store/modules/transaksi"

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
    },
});

export default store;