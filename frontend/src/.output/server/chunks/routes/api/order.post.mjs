import { d as defineEventHandler, r as readBody, c as createError, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';

const order_post = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig();
  const body = await readBody(event);
  if (!body.name || !body.email || !body.phone || !body.telegram) {
    throw createError({
      statusCode: 400,
      message: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F"
    });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email \u0430\u0434\u0440\u0435\u0441"
    });
  }
  const messageText = ((_a = body.message) == null ? void 0 : _a.trim()) ? `

\u{1F4AC} \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:
${body.message}` : "";
  const message = `
\u{1F514} \u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 \u0441 \u0441\u0430\u0439\u0442\u0430!

\u{1F464} \u0418\u043C\u044F: ${body.name}
\u{1F4E7} Email: ${body.email}
\u{1F4DE} \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ${body.phone}
\u{1F4F1} Telegram: ${body.telegram}${messageText}

\u23F0 \u0412\u0440\u0435\u043C\u044F: ${(/* @__PURE__ */ new Date()).toLocaleString("ru-RU")}
	`.trim();
  try {
    const telegramUrl = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
    await $fetch(telegramUrl, {
      method: "POST",
      body: {
        chat_id: config.telegramChatId,
        text: message,
        parse_mode: "HTML"
      }
    });
    return {
      success: true,
      message: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.",
      data: void 0
      // Детали только в dev
    });
  }
});

export { order_post as default };
//# sourceMappingURL=order.post.mjs.map
