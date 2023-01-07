<template>
  <Layout>
    <div class="container">
      <h1 class="font-bold text-2xl">Add Order</h1>
      <div class="my-5">
        <div class="flex justify-center">
          <div
            class="my-8 mx-40 justify-center rounded-xl drop-shadow-md pt-10 pb-20 px-20 bg-white flex space-x-4"
          >
            <div class="space-y-6">
              <label
                class="sm:text-sm bg-white top-9 left-2 relative p-1 text-sky-600"
                for="input"
                >Shop</label
              >
              <input
                type="text"
                placeholder="Penny"
                class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              />

              <label
                class="sm:text-sm text-sky-600 relative p-1 top-9 left-2 bg-white"
                for="date"
                >Delivery date *</label
              >
              <input
                type="date"
                v-model="departureDate"
                class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              />
            </div>

            <div class="space-y-6">
              <label
                class="text-sky-600 sm:text-sm p-1 bg-white top-9 left-2 relative"
                for="date"
                >Ordered date</label
              >
              <input
                type="date"
                v-model="returnDate"
                class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              />
              <label
                class="sm:text-sm bg-white left-2 top-9 p-1 text-sky-600 relative"
                for="input"
                >Status</label
              >
              <input
                type="text"
                placeholder="Active"
                class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <label class="relative block my-5 border-stone-400">
          <!-- <span class="sr-only">Search</span> -->
          <span class="absolute left-1 top-2 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-slate-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </label>
        <input
          class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 border border-stone-200 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Customer"
          type="text"
          name="search"
          @input="onSearch"
        />
      </div>
      <div class="h-full w-full">
        <div
          class="overflow-auto p-5 bg-white rounded-lg shadow hidden md:block"
        >
          <table class="w-full">
            <thead class="bg-gray-100">
              <tr>
                <th
                  v-for="(column, index) in columns"
                  v-bind:key="index"
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                  @click="sortRecords(index)"
                >
                  {{ column }}
                </th>
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
    <router-link to="/products">
      <button
        type="submit"
        class="absolute mt-40 bottom-2 right-5 bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
        v-on:click="onAdd()"
      >
        Save
      </button>
    </router-link>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import InputComponent from "../components/InputComponent.vue";
import axios from "axios";

const performSearch = (rows, term) => {
  const results = rows.filter((row) =>
    row.join(" ").toLowerCase().includes(term.toLowerCase())
  );

  return results;
};

function stringToDate(str) {
  const [y, m, d] = str.split("-");
  return new Date(+y, m - 1, +d);
}

function dateToString(date) {
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate())
  );
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s;
}

export default {
  components: {
    Layout,
    InputComponent,
  },
  name: "Table,small-modal",
  data() {
    return {
      flightType: "one-way flight",
      departureDate: dateToString(new Date()),
      returnDate: dateToString(new Date()),
      rawRows: [],
      rows: [],
      columns: ["Number_id", "Name", "Number", "Delete"],
      sortIndex: null,
      sortDirection: null,
    };
  },
  methods: {
    book() {
      alert(
        this.isReturn
          ? `You have booked a return flight leaving on ${this.departureDate} and returning on ${this.returnDate}.`
          : `You have booked a one-way flight leaving on ${this.departureDate}.`
      );
    },
    getUser() {
      const URL = "https://reqres.in/api/users?page=2";
      axios.get(URL).then((res) => {
        this.rows = res.data.data;
      });
    },
    sortRecords(index) {
      if (this.sortIndex === index) {
        switch (this.sortDirection) {
          case null:
            this.sortDirection = "asc";
            break;
          case "asc":
            this.sortDirection = "desc";
            break;
          case "desc":
            this.sortDirection = null;
            break;
        }
      } else {
        this.sortDirection = "asc";
      }

      this.sortIndex = index;

      console.log(this.sortDirection);

      if (!this.sortDirection) {
        this.rows = this.rawRows;
        return;
      }

      this.rows = this.rows.sort((rowA, rowB) => {
        if (this.sortDirection === "desc") {
          return rowB[index].localeCompare(rowA[index]);
        }

        return rowA[index].localeCompare(rowB[index]);
      });
    },
    onSearch(e) {
      const term = e.target.value;
      this.rows = performSearch(this.rawRows, term);
    },
  },
  mounted() {
    this.getUser();
    this.rows = this.rawRows;
  },
};
</script>
