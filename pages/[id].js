import { useEffect, useState } from "react";
import style from "../styles/index.module.css";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const [amount, setAmount] = useState(0);
  const [href, setHref] = useState("")

  useEffect(() => {
    setHref(window.location)
  }, [])

  return (
    <div className="container">
      <div className={style.container}>
        <h1>Promptpay generator</h1>
        <input
          value={amount}
          type="number"
          min={0}
          placeholder="Your amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className={style.card}>
          <img src={`/api/?id=${id}&amount=${amount}`} />
        </div>
        <div className={style.bold}>Promptpay id : {id}</div>
        <input className={style.copy} value={`${href}/${amount}`} 
               ref={textAreaRef}
               disabled/>
      </div>
    </div>
  );
}
