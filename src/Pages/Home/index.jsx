import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { apiUrl } from '../../api/';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(`Error 404 Not Found ${error}`)
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      Home
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
      {
        items && items.map(item => <Card key={item.id} data={item} />)
      }
      </div>
    </Layout>
  )
}

export default Home;