import useCounter from "@/hooks/useCounter"

export default function Home() {

  const {arttir, azalt, count, sifirla} = useCounter(0);

 return (
    <>
      <div className="flex flex-col items-center gap-10 p-5 bg-gray-100 border m-10">

        <div className="flex justify-center items-center gap-10">
        <button className="bg-green-200 p-5 rounded text-xl fw-bold" onClick={arttir}>+</button>
        <span className="bg-gray-900 text-white text-2xl p-10 rounded">{count}</span>
        <button className="bg-red-200 p-5 rounded text-xl fw-bold" onClick={azalt}>-</button>
        </div>

        <button className="bg-blue-200 p-5 rounded text-xl fw-bold" onClick={sifirla}>Sıfırla</button>
      </div>

    </>
  )
}