
export default function Home() {
  return (
    <main>
      <section className="px-32 py-16">
        <p className="text-2xl text-violet-500 font-bold capitalize">Programming logic course</p>
        
        <h2 className="text-6xl text-zinc-800 font-bold my-4">
          O próximo passo na sua carreira
          com lógica de programaçao
        </h2>
        <p className="w-7/12 text-zinc-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          In consequuntur molestiae et sequi assumenda. Modi quo
          eligendi quodvoluptate repellendus ex! Illo quas
          placeat recusandae in et natus sapiente atque?
        </p>

        <button
          className="bg-violet-600 text-white font-medium px-6 py-2 rounded-full my-6"
        >
          Veja as próximas turmas
        </button>

        <div className="w-full h-96 bg-orange-100 rounded-lg"></div>
      </section>

      <section className="bg-zinc-200 p-16">
        <h2 className="text-4xl text-zinc-800 font-bold mb-6">Sobre o curso</h2>

        <div className="grid grid-cols-3">
          <div className="">
            
          </div>

          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </div>
      </section>
    </main>
  )
}
