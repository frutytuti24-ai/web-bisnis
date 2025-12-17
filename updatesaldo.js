exports.handler = async (event, context) => {
  // Cek login
  const user = context.clientContext.user;
  if (!user) {
    return { statusCode: 401, body: "Belum login" };
  }

  // Cek role admin
  const roles = user.app_metadata?.roles || [];
  if (!roles.includes("admin")) {
    return { statusCode: 403, body: "Bukan admin" };
  }

  // Ambil data dari frontend
  const { targetEmail, amount } = JSON.parse(event.body);

  // ⚠️ SEMENTARA (belum pakai database)
  console.log("ADMIN:", user.email);
  console.log("TARGET:", targetEmail);
  console.log("AMOUNT:", amount);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Saldo ${targetEmail} ditambah ${amount}`
    })
  };
};
