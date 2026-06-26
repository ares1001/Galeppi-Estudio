let lastSent = 0;

function process(text) {

  userMessage(text);

  botMessage("En instantes nos comunicaremos con usted.");

  const now = Date.now();
  if (now - lastSent < 3000) return;
  lastSent = now;

  const phone = "5491132192112";

  const message = `
🚨 Nuevo lead web

Consulta:
${text}

Origen: Chat web
Fecha: ${new Date().toLocaleString()}
`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  setTimeout(() => {
    window.open(url, "_blank");
  }, 700);
}