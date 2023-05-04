import { useEffect, useState } from "react";
import style from "../../styles/index.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Index() {
  const router = useRouter();
  const { id, amount } = router.query;
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
          {amount > 0 && (
            <div className={style.desCon}>
              <div className={style.desAmount}>Amount</div>
              <input
                value={amount}
                type="number"
                min={0}
                className={style.input}
                placeholder="Your amount"
                disabled
              />
              <div className={style.desAmount}>Baht</div>
            </div>
          )}
          <div className={style.desCon} style={{ marginBottom: "20px" }}>
            <div className={style.desAmount}>Promptpay ID: {id}</div>
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
