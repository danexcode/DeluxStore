export default function ProductCard() {
  return (
    <div className="rounded-lg shadow-md bg-white p-4 pb-6">
      <figure className="overflow-hidden cursor-pointer">
        <img
          className="h-[207px] w-full object-cover rounded-lg hover:scale-110 duration-200 ease-in-out"
          src="/public/images/Hero-Image.png"
          alt="Product"
        />
      </figure>

      <section className="mt-4 flex flex-col gap-2">
        <h3 className="font-bold">ASUS VivoBook K15</h3>
        <p className="text-neutral-600 font-light text-sm">
          Processor: Intel Core i3-1115G4, 3.0 GHz Base Speed, Up to 4.1 GHz Max
          Turbo Speed, 2 cores, 4 Threads{' '}
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className=" text-lg text-neutral-800 font-bold rounded-2xl">$55</p>
          <button className="bg-primary cursor-pointer text-white px-2 py-1 rounded-md shadow-md border-none">
            Ver más
          </button>
        </div>
      </section>
    </div>
  );
}
