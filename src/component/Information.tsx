import React from 'react'
import { useSelector } from 'react-redux'
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    //getting redux data
    const nasaDatas = useSelector((store:any) => store?.takeAction?.astroidData[0])
  return (
    <div>
        <h5>Name:{
        nasaDatas?.name}</h5>
        <h5>nasa_jpl_url:{
        nasaDatas?.nasa_jpl_url}</h5>
        <h5>is_potentially_hazardous_asteroid:{
        nasaDatas?.is_potentially_hazardous_asteroid}</h5>
    </div>
  )
}
