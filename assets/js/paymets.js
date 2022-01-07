const connectWalletBtn = $("#connect-wallet-btn");

$("document").ready(() => {
  connectWalletBtn.on("click", () => {
    loginWithMetaMask();
  });
});

// Setting up paypal payment
paypal
  .Buttons({
    style: {
      layout: "vertical",
      color: "blue",
      shape: "rect",
      label: "paypal",
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "1.00",
            },
          },
        ],
      });
    },
  })
  .render("#paypal-online");

// Setting Mpesa payment button click
$("#mpesa-payment-btn").on("click", (e) => {
  alert("Dont get too exited, no real money is involved here!");
});

// Setting up the payment

async function loginWithMetaMask() {
  if (!window.ethereum) {
    return alert("You have to install metamask or a similar type of program");
  }
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((e) => {
      console.error(e.message);
      return;
    });
  if (!accounts) {
    return;
  }

  window.userWalletAddress = accounts[0];
  userWallet.innerText = window.userWalletAddress;
  loginButton.innerText = "Sign out of MetaMask";

  loginButton.removeEventListener("click", loginWithMetaMask);
  setTimeout(() => {
    loginButton.addEventListener("click", signOutOfMetaMask);
  }, 200);
}

// When the payment with metamask option is selected
$("#fund-with-metamask").on("click", () => {
  loginWithMetaMask();
});

// When the connect wallet button is clicked on the landing page

// $("#connect-wallet-btn").on("click", () => {
//   alert("We ball");
//   // loginWithMetaMask();
// });
