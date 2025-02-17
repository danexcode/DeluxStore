import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='grid place-content-center h-screen gap-16 justify-items-center'>
      <h1 className='text-4xl font-bold'>Vaya.. parece que esta página no existe</h1>
      <Link to="/" className='bg-primary px-6 py-3 text-white text-center rounded-md shadow-md w-fit font-medium'>Volver al home</Link>
    </section>
  );
}
