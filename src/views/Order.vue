
<template>
    <Layout>
        <div class="container">
            <h1 class="font-semibold text-xl">Orders</h1>
            <div class="my-5">
              <div class="flex">
                    <input
                    type="text"
                    class="w-96 rounded-md p-2 focus:outline-none border-color-none"
                    placeholder="Search order"
                    @input="onSearch"
                />
                <div class="inline-flex ml-80">
                    <div class="flex mr-5">
                        <img
                            class="w-7 h-7 fill-blue-900 mt-2 rotate-180"
                            src="../assets/export.svg"
                            alt
                        />
                        <button class="text-indigo-600">Import</button>
                    </div>
                    <div class="flex mr-5">
                        <img
                            class="fill-blue-900 w-7 h-7 mt-2 text-blue-900"
                            src="../assets/export.svg"
                            alt
                        />
                        <button class="text-indigo-600">Export</button>
                    </div>
                    <div>
                      <router-link to="/orderitem">
                          <button
                            class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                        Add Orders
                        </button>
                      </router-link>
                    </div>
                </div>
              </div>
                <div class="h-full w-full">
                    <h1 class="text-xl my-6">Recent Orders</h1>
                    <div class="overflow-auto p-5 bg-white rounded-lg shadow hidden md:block">
                        <table class="w-full">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th
                                        v-for="(column, index) in columns"
                                        v-bind:key="index"
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                        @click="sortRecords(index)"
                                    >{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr
                                    v-for="(row, index) in rows"
                                    v-bind:key="index"
                                    class="bg-white"
                                >
                                    <td
                                        v-for="(rowItem, itemIndex) in row"
                                        v-bind:key="itemIndex"
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >
                                        {{ rowItem }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template> 

  <script>

import Layout from '../components/Layout.vue';

const performSearch = (rows, term) => {
    const results = rows.filter(
        row => row.join(" ").toLowerCase().includes(term.toLowerCase())
    )

    return results;
}

export default {
    components: {
        Layout
    },
    ref: 'Table,small-modal',
    data() {
        return {
            showModal: false,
            customer: {
                store_name: '',
                ordered_date: '',
                expected_date: '',
                state: ''
            },
            rawRows: [
                [
                    "Ekaterina Tankova", "20", "#7234242342", "Pending"
                ],
                [
                    "Ilhom", "20", "#7234242342", "Approved"
                ],
                [
                    "Ilhom", "20", "#7234242342", "Approved"
                ],

            ],
            rows: [],
            columns: [
                'Store_name',
                'Ordered_date',
                'Expected_date',
                'State'
            ],
            sortIndex: null,
            sortDirection: null
        }
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        },
        sortRecords(index) {
            if (this.sortIndex === index) {
                switch (this.sortDirection) {
                    case null:
                        this.sortDirection = 'asc';
                        break;
                    case 'asc':
                        this.sortDirection = 'desc';
                        break;
                    case 'desc':
                        this.sortDirection = null;
                        break;
                }
            } else {
                this.sortDirection = 'asc'
            }

            this.sortIndex = index;

            console.log(this.sortDirection)

            if (!this.sortDirection) {
                this.rows = this.rawRows;
                return;
            }

            this.rows = this.rows.sort(
                (rowA, rowB) => {
                    if (this.sortDirection === 'desc') {
                        return rowB[index].localeCompare(rowA[index]);
                    }

                    return rowA[index].localeCompare(rowB[index]);
                }
            )
        },
        onSearch(e) {
            const term = e.target.value;
            this.rows = performSearch(this.rawRows, term);
        },
        onAdd() {
            this.rawRows.push(this.customer)
            this.showModal = false
            this.customer = {
                store_name: '',
                ordered_date: '',
                expected_date: '',
                state: ''
            }
        }
    },
    mounted() {
        this.rows = this.rawRows;
    }
}
</script> 