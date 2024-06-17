import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col">

        <div className="navbar bg-base-300 rounded flex justify-center">
          <div className="w-full max-w-[1000px]">
            <Image src="/images/logo.png" alt="Album" width={120} height={120}/>
          </div>
        </div>

        <div className="flex flex-wrap w-full max-w-[1000px] pt-8">
          
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Image src="/images/logo.png" alt="Album" width={400} height={400}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
