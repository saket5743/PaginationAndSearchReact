import React, { useMemo, useState } from "react";

const Bank = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [amountAdd, setAmountAdd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleTransaction = (type) => {
    const amount = Number(amountAdd);
    if (isNaN(amount) || amount <= 0) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }
    setErrorMessage("");

    switch (type) {
      case "add":
        setCurrentBalance((prev) => prev + amount);
        setAmountAdd("");
        break;
      case "withdraw":
        if (amount > currentBalance) {
          setErrorMessage("There is insufficient amount.");
          return;
        }
        setCurrentBalance((prev) => prev - amount);
        setAmountAdd("");
        break;
      default:
        console.error("Unknown transaction type.");
        break;
    }
  };

  const formatedBalance = useMemo(() => {
    return `₹${currentBalance.toFixed(2)}`;
  }, [currentBalance]);

  return (
    <div>
      <div>
        <div>
          <h1>My Bank Wallet</h1>
          <h3>Current Balance: {formatedBalance}</h3>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter amount"
            value={amountAdd}
            onChange={(e) => setAmountAdd(e.target.value)}
            style={{ padding: "6px" }}
          />
          <br /> <br />
          <div>
            <button onClick={() => handleTransaction("add")}>Add Money</button>
            <button onClick={() => handleTransaction("withdraw")}>
              Withdraw
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Bank;
