import React, { useState, useEffect } from 'react';
import DashNav from '../../components/Deshboard/DashNav';
import Innerpart1 from '../../components/Deshboard/innerpart1';
import { getProviders, getCsrfToken, useSession, getSession } from "next-auth/react"
const Dashboard = () => {
  const { data: session } = useSession()
  const [cvData, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect( () => {
     fetchData();
  }, []);


  const fetchData = async () => {
    await fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  };





  return (
    <div>
      <DashNav></DashNav>
      <Innerpart1></Innerpart1>


    </div>
  );
};
export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { providers, csrfToken },
  }
}

export default Dashboard;