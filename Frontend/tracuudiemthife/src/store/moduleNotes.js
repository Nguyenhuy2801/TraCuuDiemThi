// import { createStore } from 'vuex'
// import {db} from '@/js/firebase.js'
// import { collection, getDocs } from "firebase/firestore";

// export default createStore({
//   state: () =>{
//     return {
//       notes: ""
//     }
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//     async getNotes(){
//       const querySnapshot = await getDocs(collection(db, "notes"));
//       debugger
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
//     }
//   },
//   modules: {
//   }
// })

import { defineStore } from "pinia";
import { db } from "@/js/firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const useNotesStore = defineStore("notes", {
  state: () => {
    return {
      notes: [],
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.docs.forEach((doc) => {
        this.$state.notes.push(doc.data());
      });
    },
  },
});
