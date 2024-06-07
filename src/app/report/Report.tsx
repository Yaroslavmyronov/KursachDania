'use client'

import { BASE_URL } from "@/api/interceptors";
import axios from "axios";
import Link from "next/link";

export default function Report () {
  const handleClick = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${BASE_URL}/Report/get-report`, {
        responseType: 'blob', 
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf');
      document.body.appendChild(link);
      link.click();
  
      window.URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.error('Error downloading PDF', error);
    }
  };
  return (
  <div className='' style={{background: 'rgb(243, 244, 246)'}}>
    <div className='h-full min-h-screen w-full'style={{maxWidth: '80rem', paddingLeft: '2rem', paddingRight: '2rem', marginLeft: 'auto', marginRight: 'auto', paddingTop: '8rem'}} >
      <div className="rounded-xl bg-white p-6 text-center shadow-xl" style={{padding: '5.5rem'}}>
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14" style={{fontSize: '48px'}}>Звіт</h1>
        <p className='text-left' style={{fontSize: '32px', marginBottom: '48px'}}> За звітний період було внесено понад 20 змін до бази даних.Отримати звіт за внесеними даними на основі проведених публікації, занять/конференцій та роботи проведеної університетом </p>
        <div className="flex justify-center">
            <button onClick={handleClick} className='p-6' style={{backgroundColor: 'black', color: 'white', borderRadius: '6px', padding: '24px 48px', display: 'block'}}>
               Отримати звіт 
            </button>
          </div>
      </div>
    </div>
  </div>
  );
}

