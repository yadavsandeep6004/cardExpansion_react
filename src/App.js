import "./styles.css";
import React,{useState} from 'react';

export default function App() {
  const [openImg, setOpenImg] = useState(0);


  function counter(i){
    setOpenImg(i)
  }

  const data = [
    {
      title: 'Explore The World',
      imageUrl:
        'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Sunny Beach',
      imageUrl:
        'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'City on Winter',
      imageUrl:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Mountains - Clouds',
      imageUrl:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'City on Winter - New',
      imageUrl:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Mountains - Clouds - New',
      imageUrl:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'City on Winter - New 2',
      imageUrl:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Mountains - Clouds - New 2',
      imageUrl:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
   
  ];

  return (
    <div className='container'>
   {
     data.map((item,index)=>(
       <div key={index}
       className={openImg === index ? 'panel active' : 'panel'}
       style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
       onClick={()=>counter(index)}
       >
     <h3> {item.title}</h3>
       </div>
     ))
   }
    </div>
  );
}
