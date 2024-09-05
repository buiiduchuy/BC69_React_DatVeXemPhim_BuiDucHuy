import { createSlice } from "@reduxjs/toolkit"
import listdataSeat from "../../danhSachGhe.json"

localStorage.setItem("dataSeat" , JSON.stringify(listdataSeat))
let data = []

let getData = ()=> {
  let dataLocal =  JSON.parse(localStorage.getItem('dataSeat'))
  data = dataLocal
}
getData()

const initialState = {
  dataSeat: JSON.parse(localStorage.getItem('dataSeat')),
  stateChoose: false,
  showModal: false,
  isComplete: false,
  listSeat: []
}

export const datVeSlice = createSlice({
  name: 'datVe',
  initialState,
  reducers: {
    setShowModal: (state,action)=> {
      state.showModal = action.payload
    },
    addSeat: (state,action)=> {
      const index = state.listSeat.findIndex((item)=> item.soGhe === action.payload.soGhe)
      console.log("index: ", action.payload);
      if(index === -1) {
        state.listSeat.push(action.payload)
        data.map((item)=>{
          item.danhSachGhe.map((it)=>{
            if(it.soGhe === action.payload.soGhe) {
              it.daDat = true
            }
          })
        })
        console.log("data: ", data);
        localStorage.setItem("dataSeat" , JSON.stringify(data))
      }else {
        state.listSeat.splice(index,1)        
      }
    },
    deleteSeat: (state,action)=> {
      const index = state.listSeat.findIndex((item)=> item.soGhe === action.payload.soGhe)
      state.listSeat.splice(index,1)
    },
    setIsComplete:(state,action)=> {
      state.isComplete = action.payload
      state.dataSeat = data
    },
    reSetListSeat:(state,action)=> {
      state.listSeat = action.payload
    }
  }
})

export const {reducer: datVeReducer , actions: datVeAction} = datVeSlice