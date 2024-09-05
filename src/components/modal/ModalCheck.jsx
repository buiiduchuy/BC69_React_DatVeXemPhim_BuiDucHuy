import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction } from '../../store/datVe/slice'
import { CheckOutlined } from '@ant-design/icons'

export const ModalCheck = () => {
  const {showModal , listSeat,isComplete} = useSelector((state)=>state.datVeReducer)
  const dispatch = useDispatch()
  const handleClose = ()=> {
    dispatch(datVeAction.setShowModal(false))
  }
  
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleConfirm = ()=> {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false)
      dispatch(datVeAction.setShowModal(false))
      dispatch(datVeAction.setIsComplete(true))
    }, 1500);

  }
  const handleOk = ()=> {
    dispatch(datVeAction.setIsComplete(false))
    dispatch(datVeAction.reSetListSeat([]))
  }

  let tong = 0
  listSeat.map((item)=>(
    tong+= (item.gia)*1
  ))

  return (
    showModal ? (
      <Modal title={<h3 className='text-center text-[20px] mb-7'>Xác nhận đặt vé</h3>} 
        open={showModal}
        onOk={handleConfirm}
        onCancel={handleClose}
        confirmLoading={confirmLoading} 
      >
       <table className='w-full'>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá tiền</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>
              {
                listSeat.map((item)=>(
                  <tr className='text-center' key={item.soGhe}>
                    <td className='py-2 font-medium'>{item.soGhe}</td>
                    <td className='py-2 font-medium'>{item.gia}</td>
                    <td className='py-2'>
                      <Button
                       className='hover:!text-red-400 hover:!border-red-400'
                       onClick={()=>dispatch(datVeAction.deleteSeat(item))}
                      >x</Button>
                    </td>
                </tr>
                ))
              }
            </tbody>
            <tfoot>
              <tr>
                <td className='text-center'><span className='font-bold py-5 inline-block'>Tổng : </span></td>
                <td>
                  <span className='font-bold'>{tong}</span>
                </td>
              </tr>
            </tfoot>
          </table>
    </Modal>
    ):(
      <Modal title={<h3 className='text-center text-[20px]'>Xác nhận đặt vé</h3>} 
      open={isComplete}
      cancelButtonProps={{ style: { display: 'none' } }}
      onOk={handleOk}
    >
      <div className='flex items-center justify-center'>
        <h3 className='text-center py-5 text-[25px] font-medium'>Đặt vé thành công <CheckOutlined className='text-green-400 ms-3'/></h3>
      </div>
    </Modal>
    )
  )
}
