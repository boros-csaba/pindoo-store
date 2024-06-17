import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col bg-base-100">

        <div className="navbar bg-base-300 rounded flex justify-center">
          <div className="w-full max-w-[1000px]">
            <Image src="/images/logo.png" alt="Album" width={120} height={120}/>
          </div>
        </div>

        <div className="flex flex-wrap w-full max-w-[1000px] pt-8 justify-around gap-10">

          <div className="card bg-base-300 shadow-xl">
            <figure className="bg-base-300">
              <Image src="/images/rutin-tabla.png" alt="Album" width={480} height={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Napi rutin tábla</h2>
              
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="flex card-actions justify-end items-center gap-5">
                <h2 className="card-title">8,900Ft</h2>
                <button className="btn btn-secondary">Kosárba</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <figure className="bg-base-300">
              <Image src="/images/hozzataplalas.png" alt="Album" width={480} height={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Napi rutin tábla</h2>
              
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="flex card-actions justify-end items-center gap-5">
                <h2 className="card-title">8,900Ft</h2>
                <button className="btn btn-secondary">Kosárba</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <figure className="bg-base-300">
              <Image src="/images/rutin-tabla.png" alt="Album" width={480} height={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Napi rutin tábla</h2>
              
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="flex card-actions justify-end items-center gap-5">
                <h2 className="card-title">8,900Ft</h2>
                <button className="btn btn-secondary">Kosárba</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <figure className="bg-base-300">
              <Image src="/images/rutin-tabla.png" alt="Album" width={480} height={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Napi rutin tábla</h2>
              
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="flex card-actions justify-end items-center gap-5">
                <h2 className="card-title">8,900Ft</h2>
                <button className="btn btn-secondary">Kosárba</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <figure className="bg-base-300">
              <Image src="/images/rutin-tabla.png" alt="Album" width={480} height={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Napi rutin tábla</h2>
              
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="flex card-actions justify-end items-center gap-5">
                <h2 className="card-title">8,900Ft</h2>
                <button className="btn btn-secondary">Kosárba</button>
              </div>
            </div>
          </div>

        </div>

        <footer className="footer text-center bg-primary-content mt-10 text-neutral-content justify-center flex">
          <div className="flex flex-wrap w-full max-w-[1000px] py-8 gap-10 justify-between items-center">
            <aside>
              <Image src="/images/logo.png" alt="Album" width={120} height={120}/>
            </aside>
            <nav className="flex flex-col items-start gap-1">
              <a className="link link-hover" href="#">Adatnyilatkozat</a>
              <a className="link link-hover" href="#">Általános szerződési feltételek</a>
            </nav>
          </div>
        </footer>

      </div>
    </>
  );
}
