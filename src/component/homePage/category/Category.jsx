import React, { useState } from 'react'
import ProductCommonLayouts from '../../common/commonComponet/ProductCommonLayouts'
import CategoryCart from '../../common/commonComponet/CategoryCart'
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiCamera, CiHeadphones, CiMobile4 } from 'react-icons/ci';
import { BsSmartwatch } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
import { increment } from '../../../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const categoryBrowse = [
  {
    id: 1,
    name: "mobile",
    img: <CiMobile4 />,
  },
  {
    id: 2,
    name: "computers",
    img: <RiComputerLine />,
  },
  {
    id: 3,
    name: "smartWatch",
    img: <BsSmartwatch />,
  },
  {
    id: 4,
    name: "camera",
    img: <CiCamera />,
  },
  {
    id: 5,
    name: "headphone",
    img: <CiHeadphones />,
  },
  {
    id: 6,
    name: "gaming",
    img: <IoGameControllerOutline />,
  },
];
const Category = () => {
  const reduxCount = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let [count,setCount] = useState(reduxCount)
  let handleIncrement = () =>{
    count++
    setCount(count)
    dispatch(increment(count))
  }
  return (
    <div className='mt-20'>
        <ProductCommonLayouts 
            ProductCart={CategoryCart}
            isArrow = {true}
            partialItemShow={7}
            heading={"Categories"}
            description={"Browse By Category"}
            componentData={categoryBrowse}
        />
    </div>
  )
}

export default Category