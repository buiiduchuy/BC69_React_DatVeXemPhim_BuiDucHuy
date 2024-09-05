import React, { Fragment, useEffect, useState } from 'react'
import { Seat } from '../seat/Seat'
import { Button } from 'antd'
import { ModalCheck } from '../modal/ModalCheck'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction } from '../../store/datVe/slice'
import listdataSeat from "../../danhSachGhe.json"


export const ListSeat = () => {

  useEffect(()=>{
    localStorage.setItem("dataSeat" , JSON.stringify(listdataSeat))
  },[])

  const dispatch = useDispatch()

  const {dataSeat:data} = useSelector((state)=>state.datVeReducer)

  return (
    <div className="bg-[url('./src/assets/bgmovie.jpg')] relative bg-cover min-h-screen after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-60 z-0">
      <div className="container mx-auto py-10 relative z-50">
        <h1 className="text-center font-semibold text-[40px] text-white mb-10">Đặt vé xem phim</h1>

        <div>
          <p className='text-center text-white font-bold text-[25px] mb-4'>Màn hình</p>
          <p className='max-w-[800px] mx-auto bg-orange-400 h-7 mb-10 shadow-lg shadow-gray-50'></p>
          <div className='flex flex-wrap gap-[10px] max-w-[650px] mx-auto'>
          {
            data.map((dataGhe,index)=>(
              <Fragment key={index}>
               <div className='inline-flex items-center justify-center h-[40px] w-[40px] text-orange-400'>
                {dataGhe.hang}
               </div>
              {
                dataGhe.danhSachGhe.map((seat,index)=>(
                 <Fragment key={index}>
                  <Seat dataGhe={seat}/>
                 </Fragment>
                ))
              }
             </Fragment>
            ))
          }
          </div>
          <div className='mt-10'>
            <div className='flex flex-wrap gap-[30px] justify-center'>
              <p className='flex items-center text-white'><span className='inline-block w-5 h-5 me-2 rounded-sm bg-green-600'></span>Ghế đã đặt</p>
              <p className='flex items-center text-white'><span className='inline-block w-5 h-5 me-2 rounded-sm bg-[#fb923c]'></span>Ghế đang chọn</p>
              <p className='flex items-center text-white'><span className='inline-block w-5 h-5 me-2 rounded-sm bg-white'></span>Ghế trống</p>
            </div>
          </div>
        </div>

        <div className='text-center mt-10'>
          <Button 
            className='w-full max-w-[150px] py-7 text-[20px] border-0 hover:!bg-orange-400 hover:!text-white'
            onClick={()=>{
              dispatch(datVeAction.setShowModal(true))
            }}
          >
            Mua vé
          </Button>
        </div>
        <ModalCheck />
      </div>
   </div>
  )
}
