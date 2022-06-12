import { useState } from "react";

const CustomerGreeting = () => {
  const [agent, setAgent] = useState("");
  const [loyalty, setLoyalty] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;

    if (parseInt(value) >= 30) {
      setLoyalty("Agen Gold");
    }

    if (parseInt(value) < 10) {
      setLoyalty("Agen Spesial");
    }

    if (parseInt(value) < 1) {
      setLoyalty("");
    }
  };

  return (
    <>
      <section className="greet">
        <div className="wrapper">
          <form>
            <div className="visitors-type">
              <p>Tipe: </p>
              <div className="visitors-type-box">
                <input
                  type="radio"
                  id="customer"
                  name="visitors"
                  className="visitors"
                  value="Customer"
                  onChange={(e) => setAgent(e.currentTarget.value)}
                />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="visitors-type-box">
                <input
                  type="radio"
                  className="visitors"
                  id="agent"
                  name="visitors"
                  value="Agent"
                  onChange={(e) => setAgent(e.currentTarget.value)}
                />
                <label htmlFor="agent">Agen</label>
              </div>
            </div>

            {agent === "Agent" && (
              <div className="reseller-amount">
                <label htmlFor="reseller">Jumlah Reseller :</label>
                <input
                  type="number"
                  id="reseller"
                  className="reseller"
                  min={0}
                  onChange={handleInput}
                />
              </div>
            )}
          </form>
          <p className="greeting">
            Selamat Datang{" "}
            <span className="customer">
              {agent === "Agent" ? loyalty : agent}
            </span>
            !
          </p>
        </div>
      </section>
    </>
  );
};

export default CustomerGreeting;
