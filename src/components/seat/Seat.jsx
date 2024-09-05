import React, { useState } from 'react'
import cn from "classnames"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { datVeAction } from '../../store/datVe/slice'


export const Seat = ({dataGhe}) => {

  const [isChoose , setIsChoose] = useState(false)
  const dispatch = useDispatch()

  return (
    dataGhe.daDat === undefined ? (
      <div className='inline-flex items-center justify-center h-[40px] w-[40px] text-orange-400'>
        {dataGhe.soGhe}
      </div>
    ) : (
    <SeatComp className={cn('hover:bg-gray-200',{
        'active': isChoose,
        'daDat': dataGhe.daDat
      })}
      onClick={()=> {
        setIsChoose(!isChoose)
        dispatch(datVeAction.addSeat({
          ...dataGhe,
          daDat: true
        }))
      }}
    >
      {dataGhe.soGhe}
    </SeatComp>
    )
    
  )
}

const SeatComp = styled.div`
    height: 40px;
    width: 40px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
    &.active {
      background-color: #fb923c;
      color: #fff;
    }
    &.daDat {
      background: #16a34a;
      color: #fff;
      pointer-events: none;
    }
`;