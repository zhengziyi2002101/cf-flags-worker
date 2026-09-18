export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ==========作业要求：受保护路径 /secure ==========
    if (url.pathname === "/secure") {
      const email = request.headers.get("cf-access-authenticated-user-email") || "Unknown";
      const country = request.cf?.country || "XX";
      const timestamp = new Date().toLocaleString();

      const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Authenticated Info</title>
</head>
<body>
<p>${email} authenticated at ${timestamp} from <a href="/flags/${country}">${country}</a></p>
</body>
</html>
      `;
      return new Response(html, {
        headers: { "content-type": "text/html;charset=utf-8" },
      });
    }

    // 访问国旗占位路由 /flags/${COUNTRY} （Part3.2才接入R2，现在占位）
    if (url.pathname.startsWith("/flags/")) {
      const country = url.pathname.split("/")[2];
      return new Response(`Flag endpoint for ${country} (R2 not yet configured)`, { status: 404 });
    }

    // D1国旗接口占位 Part3.3
    if (url.pathname.startsWith("/flags-d1/")) {
      const country = url.pathname.split("/")[2];
      return new Response(`D1 flag for ${country} (D1 not yet configured)`, { status: 404 });
    }

    return new Response("Not Found", { status: 404 });
  },
};
