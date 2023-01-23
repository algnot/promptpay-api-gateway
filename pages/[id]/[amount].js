import style from '../../styles/index.module.css'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()
  const { id, amount } = router.query

  return (
    <div className="container">
      <div className={style.container}>
        <h1>Promptpay generator</h1>
        <input value={amount}
               type="number"
               min={0}
               placeholder="Your amount"
               onChange={(e) => setAmount(e.target.value)}
               disabled/>
        <div className={style.card}>
          <img src={`/api/?id=${id}&amount=${amount}`}/>
        </div>
        <div className={style.bold}>Promptpay id : {id}</div>
      </div>
    </div>
  )
}
