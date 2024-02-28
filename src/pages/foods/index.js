import Navbar from '@/components/Navbar/navbar'
import React, { useEffect } from 'react'

const index = ({data}) => {
  // console.log(data)

  const fetchData = async()=>{
    const result = await fetch("/api/hello",{
      method:"GET"
    })
  }
  useEffect(()=>{
   fetchData()
    
  })
  return (
    <div>
      'This is food page'
    </div>
  )
}

export default index


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`/api/hello`)
//   const data = await res.json()
//   console.log(data)
//   // Pass data to the page via props
//   return { props: { data } }
// }