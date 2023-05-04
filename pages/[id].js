import { useEffect, useState } from "react";
import style from "../styles/index.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const [amount, setAmount] = useState(0);
  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(window.location);
  }, []);

  return (
    <>
      <Head>
        <title>Promptpay Generator</title>
      </Head>
      <div className="container">

        <div className={style.container}>
          <div className={style.qrPayment}>
            <img src="/thai-qr-payment.png" height={80} />
          </div>
          <div className={style.card}>
            <img src={`/api/?id=${id}&amount=${amount}`} />
          </div>
          <div className={style.desCon}>
            <div className={style.desAmount}>
              Amount
            </div>
            <input
              value={amount}
              type="number"
              min={0}
              className={style.input}
              placeholder="Your amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className={style.desAmount}>
              Baht
            </div>
          </div>   
          <div className={style.desCon} style={{marginBottom: '20px'}}>
            <div className={style.desAmount}>
              Promptpay ID: {id}
            </div>
          </div> 
        </div>
        <CopyToClipboard text={`${href}/${amount}`}
                         onCopy={() => alert("Copied!")}>
          <div className={style.link}>Copy link</div>
        </CopyToClipboard>
      </div>
    </>
  );
}
