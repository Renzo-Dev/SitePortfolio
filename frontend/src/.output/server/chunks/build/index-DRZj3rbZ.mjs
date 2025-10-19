import { defineComponent, mergeProps, ref, inject, unref, withCtx, createVNode, createTextVNode, toDisplayString, computed, watch, reactive, useId, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import __nuxt_component_0 from './index-BX0WJbDy.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import { B as Button } from './Button-BQ0utCTJ.mjs';
import { u as useHead } from './composables-qJeKCimw.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/images/photo-1571171637578-41bc2dd41cd2.jpg");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["badge", `badge--${__props.variant}`]
      }, _attrs))} data-v-4e73cf8c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Badge.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["__scopeId", "data-v-4e73cf8c"]]), { __name: "UiBadge" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const strengths = [
      { icon: "ph:strategy-duotone", text: "Системный подход к проектам" },
      { icon: "ph:magnifying-glass-duotone", text: "Внимание к деталям" },
      { icon: "ph:gauge-duotone", text: "Оптимизация производительности" },
      {
        icon: "ph:stack-duotone",
        text: "Умение работать как с фронтендом, так и с бэкендом"
      }
    ];
    const technologies = [
      "Vue 3",
      "Nuxt 4",
      "Laravel",
      "TypeScript",
      "Docker",
      "Redis",
      "MySQL",
      "Nginx",
      "TailwindCSS",
      "Pinia"
    ];
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "about section"
      }, _attrs))} data-v-873430bd><div class="container" data-v-873430bd><div class="about__grid" data-v-873430bd><div class="about__image-wrapper" data-v-873430bd><div class="about__image-container" data-v-873430bd><img${ssrRenderAttr("src", _imports_0)} alt="Dan Koshevoy" class="about__image" width="600" height="800" loading="lazy" data-v-873430bd></div></div><div class="about__content" data-v-873430bd><h2 class="about__title" data-v-873430bd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:user-circle-duotone",
        size: "32"
      }, null, _parent));
      _push(` Обо мне </h2><p class="about__text" data-v-873430bd> Я — разработчик полного стека с опытом более <strong data-v-873430bd>3 лет коммерческой разработки</strong>. Люблю продумывать архитектуру и создавать чистый, поддерживаемый код. </p><div class="about__strengths" data-v-873430bd><h3 class="about__subtitle" data-v-873430bd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:star-duotone",
        size: "24"
      }, null, _parent));
      _push(` Мои сильные стороны </h3><ul class="about__list" data-v-873430bd><!--[-->`);
      ssrRenderList(strengths, (strength, index2) => {
        _push(`<li class="about__list-item" style="${ssrRenderStyle({ "--item-index": index2 })}" data-v-873430bd>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: strength.icon,
          size: "20"
        }, null, _parent));
        _push(`<span data-v-873430bd>${ssrInterpolate(strength.text)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="about__tech" data-v-873430bd><h3 class="about__subtitle" data-v-873430bd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:code-duotone",
        size: "24"
      }, null, _parent));
      _push(` Технологии </h3><div class="about__tech-grid" data-v-873430bd><!--[-->`);
      ssrRenderList(technologies, (tech, index2) => {
        _push(ssrRenderComponent(Badge, { key: index2 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tech)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tech), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AboutSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["__scopeId", "data-v-873430bd"]]), { __name: "HomeAboutSection" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CaseStudiesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const cases = [
      {
        title: "HouseSeeker: Ускорил поиск недвижимости в 4 раза",
        problem: "Пользователи ждали до 3 секунд при фильтрации объектов из-за сложных запросов к PostgreSQL с множеством JOIN",
        solution: "Внедрил Redis для кеширования популярных фильтров, оптимизировал SQL-запросы и добавил составные индексы",
        result: "Время загрузки результатов поиска сократилось с 3200 мс до 780 мс. Конверсия в просмотры выросла на 34%",
        takeaway: "Производительность напрямую влияет на поведение пользователей — каждая секунда ожидания критична",
        metrics: [
          { start: 3200, end: 780, label: "Время поиска (мс)", suffix: "ms" },
          { start: 0, end: 34, label: "Рост конверсии (%)", suffix: "%" }
        ]
      },
      {
        title: "Асинхронная обработка с Redis + RabbitMQ",
        problem: "API зависал при генерации отчётов и отправке email-уведомлений, пользователи получали таймауты",
        solution: "Вынес тяжёлые задачи в RabbitMQ очереди, использовал Redis для кеша и отслеживания статусов задач",
        result: "API стал отвечать мгновенно, задачи обрабатываются в фоне. Количество таймаутов сократилось с 23% до 0.4%",
        takeaway: "Асинхронность — ключ к масштабируемости. Пользователю важен быстрый отклик, а не мгновенный результат",
        metrics: [
          { start: 23, end: 0.4, label: "Таймауты API (%)", suffix: "%" },
          { start: 2400, end: 85, label: "Время отклика (мс)", suffix: "ms" }
        ]
      },
      {
        title: "Kremlin Neurology: Адаптивная медицинская библиотека",
        problem: "Старый сайт не открывался на мобильных, врачи не могли быстро найти нужные публикации на конференциях",
        solution: "Полная адаптация под все устройства, умный поиск по статьям, оптимизация загрузки изображений и PDF",
        result: "Мобильный трафик вырос с 12% до 47%, время на сайте увеличилось в 2.3 раза",
        takeaway: 'Респонсивность — это не просто "красиво", это доступность контента для реальной аудитории',
        metrics: [
          { start: 12, end: 47, label: "Мобильный трафик (%)", suffix: "%" },
          { start: 1, end: 2.3, label: "Рост времени на сайте (x)", suffix: "x" }
        ]
      }
    ];
    ref([]);
    ref(/* @__PURE__ */ new Set());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "cases",
        class: "cases section"
      }, _attrs))} data-v-fa176bc8><div class="container" data-v-fa176bc8><h2 class="cases__title text-center" data-v-fa176bc8>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:chart-line-duotone",
        size: "32"
      }, null, _parent));
      _push(` Личные кейсы </h2><p class="cases__subtitle text-center text-secondary" data-v-fa176bc8> Реальные задачи и их решения </p><div class="cases__grid" data-v-fa176bc8><!--[-->`);
      ssrRenderList(cases, (caseItem, index2) => {
        _push(`<div class="case-card" data-v-fa176bc8><div class="case-card__number" data-v-fa176bc8>${ssrInterpolate(String(index2 + 1).padStart(2, "0"))}</div><h3 class="case-card__title" data-v-fa176bc8>${ssrInterpolate(caseItem.title)}</h3><div class="case-card__content" data-v-fa176bc8><div class="case-card__row" data-v-fa176bc8><strong data-v-fa176bc8>Проблема:</strong><p data-v-fa176bc8>${ssrInterpolate(caseItem.problem)}</p></div><div class="case-card__row" data-v-fa176bc8><strong data-v-fa176bc8>Решение:</strong><p data-v-fa176bc8>${ssrInterpolate(caseItem.solution)}</p></div><div class="case-card__row" data-v-fa176bc8><strong data-v-fa176bc8>Результат:</strong><p data-v-fa176bc8>${ssrInterpolate(caseItem.result)}</p></div><div class="case-card__row case-card__row--highlight" data-v-fa176bc8><strong data-v-fa176bc8>Вывод:</strong><p data-v-fa176bc8>${ssrInterpolate(caseItem.takeaway)}</p></div></div>`);
        if (caseItem.metrics) {
          _push(`<div class="case-card__metrics" data-v-fa176bc8><!--[-->`);
          ssrRenderList(caseItem.metrics, (metric, mIndex) => {
            _push(`<div class="metric" data-v-fa176bc8><div class="metric__value" data-v-fa176bc8>${ssrInterpolate(metric.start)}</div><div class="metric__label" data-v-fa176bc8>${ssrInterpolate(metric.label)}</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CaseStudiesSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const CaseStudiesSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-fa176bc8"]]), { __name: "HomeCaseStudiesSection" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    type: { default: "text" },
    label: {},
    placeholder: {},
    required: { type: Boolean },
    rows: { default: 5 },
    error: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const inputId = useId();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input-wrapper" }, _attrs))} data-v-6452ac56>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", unref(inputId))} class="input-label" data-v-6452ac56>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type !== "textarea") {
        _push(`<input${ssrRenderAttr("id", unref(inputId))}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="${ssrRenderClass(["input", { "input--error": __props.error }])}" data-v-6452ac56>`);
      } else {
        _push(`<textarea${ssrRenderAttr("id", unref(inputId))}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("rows", __props.rows)} class="${ssrRenderClass(["input", "input--textarea", { "input--error": __props.error }])}" data-v-6452ac56>${ssrInterpolate(__props.modelValue)}</textarea>`);
      }
      if (__props.error) {
        _push(`<span class="input-error" data-v-6452ac56>${ssrInterpolate(__props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Input.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-6452ac56"]]), { __name: "UiInput" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      telegram: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    const isCopied = ref(false);
    const validationErrors = reactive({
      name: "",
      email: "",
      phone: "",
      telegram: ""
    });
    watch(
      () => form.name,
      () => {
        if (validationErrors.name) validationErrors.name = "";
      }
    );
    watch(
      () => form.email,
      () => {
        if (validationErrors.email) validationErrors.email = "";
      }
    );
    watch(
      () => form.phone,
      () => {
        if (validationErrors.phone) validationErrors.phone = "";
      }
    );
    watch(
      () => form.telegram,
      () => {
        if (validationErrors.telegram) validationErrors.telegram = "";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "contact section"
      }, _attrs))} data-v-989c2111><div class="container" data-v-989c2111><h2 class="contact__title text-center" data-v-989c2111>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:chat-circle-duotone",
        size: "32"
      }, null, _parent));
      _push(` Свяжитесь со мной </h2><p class="contact__subtitle text-center text-secondary" data-v-989c2111> Есть идея или проект? Напишите мне </p><div class="contact__grid" data-v-989c2111><form class="contact__form" data-v-989c2111>`);
      _push(ssrRenderComponent(Input, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        label: "Ваше имя",
        placeholder: "Как к вам обращаться?",
        error: unref(validationErrors).name
      }, null, _parent));
      _push(ssrRenderComponent(Input, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        label: "Email",
        placeholder: "your@email.com",
        error: unref(validationErrors).email
      }, null, _parent));
      _push(ssrRenderComponent(Input, {
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        type: "tel",
        label: "Телефон",
        placeholder: "+7 (999) 123-45-67",
        error: unref(validationErrors).phone
      }, null, _parent));
      _push(ssrRenderComponent(Input, {
        modelValue: unref(form).telegram,
        "onUpdate:modelValue": ($event) => unref(form).telegram = $event,
        label: "Telegram",
        placeholder: "@username или ссылка",
        error: unref(validationErrors).telegram
      }, null, _parent));
      _push(ssrRenderComponent(Input, {
        modelValue: unref(form).message,
        "onUpdate:modelValue": ($event) => unref(form).message = $event,
        type: "textarea",
        label: "Сообщение (необязательно)",
        placeholder: "Расскажите о вашем проекте...",
        rows: 6
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        type: "submit",
        variant: "primary",
        disabled: unref(isSubmitting)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isSubmitting) ? "Отправка..." : "Отправить")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isSubmitting) ? "Отправка..." : "Отправить"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(successMessage)) {
        _push(`<div class="contact__message contact__message--success" data-v-989c2111>${ssrInterpolate(unref(successMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(`<div class="contact__message contact__message--error" data-v-989c2111>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><div class="contact__info" data-v-989c2111><h3 class="contact__info-title" data-v-989c2111>Контакты</h3><div class="contact__links" data-v-989c2111><div class="contact__email-wrapper" data-v-989c2111><a href="mailto:dankoshevoy@gmail.com" class="contact__link" data-v-989c2111>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:envelope-duotone",
        size: "24"
      }, null, _parent));
      _push(`<span data-v-989c2111>dankoshevoy@gmail.com</span></a><button class="${ssrRenderClass([{ "contact__copy-btn--copied": unref(isCopied) }, "contact__copy-btn"])}" data-v-989c2111>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isCopied) ? "ph:check-duotone" : "ph:copy-duotone",
        size: "20"
      }, null, _parent));
      _push(`<span data-v-989c2111>${ssrInterpolate(unref(isCopied) ? "Скопировано!" : "Копировать")}</span></button></div><a href="https://t.me/renzo_pw" target="_blank" rel="noopener" class="contact__link" data-v-989c2111>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:send",
        size: "24"
      }, null, _parent));
      _push(`<span data-v-989c2111>Telegram: @renzo_pw</span></a><a href="https://github.com/Renzo-Dev" target="_blank" rel="noopener" class="contact__link" data-v-989c2111>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:github",
        size: "24"
      }, null, _parent));
      _push(`<span data-v-989c2111>GitHub: Renzo-Dev</span></a></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ContactSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ContactSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-989c2111"]]), { __name: "HomeContactSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CredentialsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const education = {
      degree: "Software Development",
      university: "STEP Computer Academy",
      specialty: "Разработка программного обеспечения",
      years: "2020 - 2024",
      diplomaFiles: [
        "/images/credentials/Diplom1.pdf",
        // Диплом (лицевая сторона)
        "/images/credentials/Diplom2.pdf"
        // Диплом (обратная сторона)
      ]
    };
    const certificates = [
      {
        title: "IT Essentials: PC Hardware and Software",
        issuer: "Cisco Networking Academy",
        date: "Декабрь 2020",
        image: "/images/credentials/IT_Essentials_Sertificat.pdf",
        verifyLink: ""
      }
    ];
    const isModalOpen = ref(false);
    const selectedTitle = ref("");
    const currentFiles = ref([]);
    const currentFileIndex = ref(0);
    const isMobileMenuOpen = ref(false);
    const mobileMenuFiles = ref([]);
    const currentFile = computed(() => {
      return currentFiles.value[currentFileIndex.value] || "";
    });
    const isPdfFile = computed(() => {
      return currentFile.value.endsWith(".pdf");
    });
    watch(isModalOpen, (newVal) => {
      if (newVal) {
        (void 0).body.style.overflow = "hidden";
      } else {
        (void 0).body.style.overflow = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "credentials",
        class: "credentials section"
      }, _attrs))} data-v-e6182266><div class="container" data-v-e6182266><h2 class="credentials__title text-center" data-v-e6182266>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:certificate-duotone",
        size: "32"
      }, null, _parent));
      _push(` Образование и сертификаты </h2><p class="credentials__subtitle text-center text-secondary" data-v-e6182266> Подтверждённая квалификация и постоянное развитие </p><div class="credentials__education" data-v-e6182266><div class="education-card" data-v-e6182266><div class="education-card__icon" data-v-e6182266>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:graduation-cap-duotone",
        size: "64"
      }, null, _parent));
      _push(`</div><div class="education-card__content" data-v-e6182266><h3 class="education-card__degree" data-v-e6182266>${ssrInterpolate(education.degree)}</h3><div class="education-card__university" data-v-e6182266>${ssrInterpolate(education.university)}</div><div class="education-card__specialty" data-v-e6182266>${ssrInterpolate(education.specialty)}</div><div class="education-card__years" data-v-e6182266>${ssrInterpolate(education.years)}</div></div><div class="education-card__diploma" data-v-e6182266><div class="diploma-preview" data-v-e6182266>`);
      if (education.diplomaFiles?.length) {
        _push(`<div class="diploma-preview__pdf" data-v-e6182266>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:file-pdf-duotone",
          size: "64"
        }, null, _parent));
        _push(`<span class="diploma-preview__pdf-label" data-v-e6182266> Диплом (${ssrInterpolate(education.diplomaFiles.length)} стр.) </span></div>`);
      } else {
        _push(`<div class="diploma-preview__placeholder" data-v-e6182266>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:file-pdf-duotone",
          size: "48"
        }, null, _parent));
        _push(`<span data-v-e6182266>Диплом</span></div>`);
      }
      _push(`</div></div></div></div><div class="credentials__certificates" data-v-e6182266><h3 class="credentials__section-title" data-v-e6182266>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:seal-check-duotone",
        size: "24"
      }, null, _parent));
      _push(` Профессиональные сертификаты </h3><div class="certificates-grid" data-v-e6182266><!--[-->`);
      ssrRenderList(certificates, (cert, index2) => {
        _push(`<div class="certificate-card" data-v-e6182266><div class="certificate-card__preview" data-v-e6182266>`);
        if (cert.image && cert.image.endsWith(".pdf")) {
          _push(`<div class="certificate-card__pdf-preview" data-v-e6182266>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:file-pdf-duotone",
            size: "56"
          }, null, _parent));
          _push(`<span class="certificate-card__pdf-label" data-v-e6182266>PDF</span></div>`);
        } else if (cert.image) {
          _push(`<img${ssrRenderAttr("src", cert.image)}${ssrRenderAttr("alt", cert.title)} class="certificate-card__image" data-v-e6182266>`);
        } else {
          _push(`<div class="certificate-card__placeholder" data-v-e6182266>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:certificate",
            size: "48"
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`</div><div class="certificate-card__content" data-v-e6182266><h4 class="certificate-card__title" data-v-e6182266>${ssrInterpolate(cert.title)}</h4><div class="certificate-card__issuer" data-v-e6182266>${ssrInterpolate(cert.issuer)}</div><div class="certificate-card__meta" data-v-e6182266><span class="certificate-card__date" data-v-e6182266>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:calendar-blank",
          size: "16"
        }, null, _parent));
        _push(` ${ssrInterpolate(cert.date)}</span>`);
        if (cert.verifyLink) {
          _push(`<span class="certificate-card__verify" data-v-e6182266>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:link",
            size: "16"
          }, null, _parent));
          _push(` Верификация </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isMobileMenuOpen)) {
          _push2(`<div class="mobile-file-menu" data-v-e6182266><div class="mobile-file-menu__overlay" data-v-e6182266></div><div class="mobile-file-menu__content" data-v-e6182266><div class="mobile-file-menu__header" data-v-e6182266><h3 class="mobile-file-menu__title" data-v-e6182266>Выберите страницу</h3><button class="mobile-file-menu__close" data-v-e6182266>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "ph:x",
            size: "24"
          }, null, _parent));
          _push2(`</button></div><div class="mobile-file-menu__list" data-v-e6182266><!--[-->`);
          ssrRenderList(unref(mobileMenuFiles), (file, index2) => {
            _push2(`<button class="mobile-file-menu__item" data-v-e6182266>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:file-pdf-duotone",
              size: "32"
            }, null, _parent));
            _push2(`<span data-v-e6182266>${ssrInterpolate(file.name)}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:arrow-up-right",
              size: "20"
            }, null, _parent));
            _push2(`</button>`);
          });
          _push2(`<!--]--></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isModalOpen)) {
          _push2(`<div class="credentials-modal" data-v-e6182266><div class="credentials-modal__overlay" data-v-e6182266></div><div class="credentials-modal__content" data-v-e6182266><div class="credentials-modal__desktop-wrapper" data-v-e6182266><button class="credentials-modal__close" data-v-e6182266>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "ph:x",
            size: "24"
          }, null, _parent));
          _push2(`</button>`);
          if (unref(currentFiles).length > 1) {
            _push2(`<div class="credentials-modal__nav" data-v-e6182266><button class="credentials-modal__nav-btn credentials-modal__nav-btn--prev"${ssrIncludeBooleanAttr(unref(currentFileIndex) === 0) ? " disabled" : ""} data-v-e6182266>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:caret-left",
              size: "32"
            }, null, _parent));
            _push2(`</button><div class="credentials-modal__counter" data-v-e6182266>${ssrInterpolate(unref(currentFileIndex) + 1)} / ${ssrInterpolate(unref(currentFiles).length)}</div><button class="credentials-modal__nav-btn credentials-modal__nav-btn--next"${ssrIncludeBooleanAttr(unref(currentFileIndex) === unref(currentFiles).length - 1) ? " disabled" : ""} data-v-e6182266>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:caret-right",
              size: "32"
            }, null, _parent));
            _push2(`</button></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (unref(isPdfFile)) {
            _push2(`<iframe${ssrRenderAttr("src", unref(currentFile))} class="credentials-modal__pdf" frameborder="0" data-v-e6182266></iframe>`);
          } else if (unref(currentFile)) {
            _push2(`<img${ssrRenderAttr("src", unref(currentFile))}${ssrRenderAttr("alt", unref(selectedTitle))} class="credentials-modal__image" data-v-e6182266>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="credentials-modal__mobile-wrapper" data-v-e6182266><div class="credentials-modal__mobile-header" data-v-e6182266><button class="credentials-modal__close" data-v-e6182266>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "ph:x",
            size: "24"
          }, null, _parent));
          _push2(`</button><div class="credentials-modal__mobile-title" data-v-e6182266>${ssrInterpolate(unref(selectedTitle))}</div><div style="${ssrRenderStyle({ "width": "40px" })}" data-v-e6182266></div></div><div class="credentials-modal__viewer" data-v-e6182266>`);
          if (unref(isPdfFile)) {
            _push2(`<iframe${ssrRenderAttr("src", unref(currentFile))} class="credentials-modal__pdf" frameborder="0" data-v-e6182266></iframe>`);
          } else if (unref(currentFile)) {
            _push2(`<img${ssrRenderAttr("src", unref(currentFile))}${ssrRenderAttr("alt", unref(selectedTitle))} class="credentials-modal__image" data-v-e6182266>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
          if (unref(currentFiles).length > 1) {
            _push2(`<div class="credentials-modal__nav" data-v-e6182266><button class="credentials-modal__nav-btn credentials-modal__nav-btn--prev"${ssrIncludeBooleanAttr(unref(currentFileIndex) === 0) ? " disabled" : ""} data-v-e6182266>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:caret-left",
              size: "32"
            }, null, _parent));
            _push2(`</button><div class="credentials-modal__counter" data-v-e6182266>${ssrInterpolate(unref(currentFileIndex) + 1)} / ${ssrInterpolate(unref(currentFiles).length)}</div><button class="credentials-modal__nav-btn credentials-modal__nav-btn--next"${ssrIncludeBooleanAttr(unref(currentFileIndex) === unref(currentFiles).length - 1) ? " disabled" : ""} data-v-e6182266>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:caret-right",
              size: "32"
            }, null, _parent));
            _push2(`</button></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CredentialsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CredentialsSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-e6182266"]]), { __name: "HomeCredentialsSection" });
const useParallax = (element, options = {}) => {
  const { speed = 0.5, fadeOut = false, maxDistance = 0 } = options;
  let ticking = false;
  let lastScroll = 0;
  const handleScroll = () => {
    if (!ticking) {
      (void 0).requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  };
  const updateParallax = () => {
    if (!element.value) return;
    const currentScroll = (void 0).scrollY;
    if (Math.abs(currentScroll - lastScroll) < 1) return;
    lastScroll = currentScroll;
    const windowHeight = (void 0).innerHeight;
    const maxScroll = maxDistance || windowHeight;
    if (currentScroll < maxScroll) {
      const translateY = currentScroll * speed;
      let opacity = 1;
      if (fadeOut && maxScroll > 0) {
        opacity = Math.max(0, 1 - currentScroll / maxScroll);
      }
      element.value.style.setProperty("--parallax-y", `${translateY}px`);
      if (fadeOut) {
        element.value.style.setProperty("--parallax-opacity", `${opacity}`);
      }
    }
  };
  const init = () => {
    return;
  };
  const destroy = () => {
    if (element.value) {
      element.value.style.willChange = "auto";
    }
    (void 0).removeEventListener("scroll", handleScroll);
  };
  return {
    init,
    destroy
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const titleWords = ref([
      "Создаю",
      "современные",
      "сайты",
      "и",
      "веб-приложения"
    ]);
    const heroSection = ref();
    const heroContent = ref();
    const scrollToSection = inject(
      "scrollToSection",
      (id) => {
        const element = (void 0).getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + (void 0).scrollY;
          (void 0).scrollTo({
            top: elementPosition - offset,
            behavior: "smooth"
          });
        }
      }
    );
    const handleButtonHover = (event) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width * 100;
      const y = (event.clientY - rect.top) / rect.height * 100;
      button.style.setProperty("--ripple-x", `${x}%`);
      button.style.setProperty("--ripple-y", `${y}%`);
    };
    ref();
    useParallax(heroContent, {
      speed: 0.5,
      // Скорость параллакса
      fadeOut: true,
      // Fade out при скролле
      maxDistance: 0
      // Будет использована высота секции
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        ref_key: "heroSection",
        ref: heroSection,
        class: "hero"
      }, _attrs))} data-v-0b89fb6b><div class="hero__gradient" data-v-0b89fb6b></div><canvas class="hero__particles" data-v-0b89fb6b></canvas><div class="hero__shapes" data-v-0b89fb6b><div class="shape shape--1" data-v-0b89fb6b></div><div class="shape shape--2" data-v-0b89fb6b></div><div class="shape shape--3" data-v-0b89fb6b></div></div><div class="container" data-v-0b89fb6b><div class="hero__content" data-v-0b89fb6b><h1 class="hero__title text-gradient" data-v-0b89fb6b><!--[-->`);
      ssrRenderList(unref(titleWords), (word, index2) => {
        _push(`<span class="word" style="${ssrRenderStyle({ animationDelay: `${0.1 + index2 * 0.1}s` })}" data-v-0b89fb6b>${ssrInterpolate(word)}  </span>`);
      });
      _push(`<!--]--></h1><p class="hero__subtitle" data-v-0b89fb6b> Превращаю бизнес-идеи в быстрые и масштабируемые веб-решения с премиальным UX </p><div class="hero__cta" data-v-0b89fb6b>`);
      _push(ssrRenderComponent(Button, {
        variant: "primary",
        onClick: ($event) => unref(scrollToSection)("portfolio"),
        onMousemove: handleButtonHover
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:briefcase-duotone",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Посмотреть работы `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:briefcase-duotone",
                size: "20"
              }),
              createTextVNode(" Посмотреть работы ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        variant: "secondary",
        onClick: ($event) => unref(scrollToSection)("contact"),
        onMousemove: handleButtonHover
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:rocket-launch-duotone",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Заказать разработку `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:rocket-launch-duotone",
                size: "20"
              }),
              createTextVNode(" Заказать разработку ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero__scroll" data-v-0b89fb6b><span class="scroll-text" data-v-0b89fb6b>Прокрути вниз</span><div class="scroll-line" data-v-0b89fb6b></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-0b89fb6b"]]), { __name: "HomeHeroSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioSection",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        id: 1,
        title: "Kremlin Neurology",
        description: "Веб-платформа медицинской библиотеки с научными публикациями по неврологии",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        role: "Frontend разработчик",
        image: "/images/kremlin.jpg",
        link: "https://www.kremlin-neurology.ru/index1.html"
      },
      {
        id: 2,
        title: "HouseSeeker",
        description: "Платформа для поиска и аренды недвижимости с расширенными фильтрами и системой бронирования",
        technologies: ["Vue 3", "Laravel", "PostgreSQL", "Redis", "Docker"],
        role: "Full-stack разработчик",
        image: "/images/HouseSeeker.jpg"
      },
      {
        id: 3,
        title: "E-commerce платформа",
        description: "Современный интернет-магазин с корзиной, оплатой и личным кабинетом",
        technologies: ["Vue 3", "Laravel", "Stripe"],
        role: "Full-stack разработчик",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
      },
      {
        id: 4,
        title: "CRM система",
        description: "Система управления клиентами с аналитикой и отчётами",
        technologies: ["Nuxt", "PostgreSQL", "Docker"],
        role: "Backend разработчик",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      },
      {
        id: 5,
        title: "Финтех приложение",
        description: "Мобильное приложение для управления финансами",
        technologies: ["Vue", "Node.js", "MongoDB"],
        role: "Frontend разработчик",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      }
    ];
    const activeProject = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "portfolio",
        class: "portfolio section"
      }, _attrs))} data-v-6c45a4b1><div class="container" data-v-6c45a4b1><h2 class="portfolio__title text-gradient text-center" data-v-6c45a4b1>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:briefcase-duotone",
        size: "32"
      }, null, _parent));
      _push(` Портфолио </h2><p class="portfolio__subtitle text-secondary text-center" data-v-6c45a4b1> Избранные проекты, над которыми я работал </p><div class="portfolio__list" data-v-6c45a4b1><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="${ssrRenderClass([{ "portfolio__item--active": unref(activeProject) === project.id }, "portfolio__item"])}" data-v-6c45a4b1><button class="${ssrRenderClass([{ "portfolio__header--external": project.link }, "portfolio__header"])}" data-v-6c45a4b1><div class="portfolio__header-left" data-v-6c45a4b1>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:folder-duotone",
          size: "24",
          class: "portfolio__icon"
        }, null, _parent));
        _push(`<h3 class="portfolio__item-title" data-v-6c45a4b1>${ssrInterpolate(project.title)}</h3></div><div class="portfolio__header-right" data-v-6c45a4b1>`);
        if (project.link) {
          _push(`<a${ssrRenderAttr("href", project.link)} target="_blank" rel="noopener noreferrer" class="portfolio__external-link" data-v-6c45a4b1>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:arrow-square-out-duotone",
            size: "20"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(activeProject) === project.id ? "ph:caret-up-bold" : "ph:caret-down-bold",
          size: "20",
          class: "portfolio__chevron"
        }, null, _parent));
        _push(`</div></button><div class="portfolio__content" style="${ssrRenderStyle(unref(activeProject) === project.id ? null : { display: "none" })}" data-v-6c45a4b1><div class="portfolio__image-wrapper" data-v-6c45a4b1><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="portfolio__image" loading="lazy" data-v-6c45a4b1></div><p class="portfolio__description" data-v-6c45a4b1>${ssrInterpolate(project.description)}</p><div class="portfolio__meta" data-v-6c45a4b1>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:user-duotone",
          size: "18"
        }, null, _parent));
        _push(`<span data-v-6c45a4b1>${ssrInterpolate(project.role)}</span></div><div class="portfolio__technologies" data-v-6c45a4b1><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(ssrRenderComponent(Badge, {
            key: tech,
            variant: "secondary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tech)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tech), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/PortfolioSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PortfolioSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-6c45a4b1"]]), { __name: "HomePortfolioSection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        icon: "ph:code-duotone",
        title: "Разработка под ключ",
        description: "Сайты, SPA-приложения, SaaS-сервисы — от идеи до продакшена"
      },
      {
        icon: "ph:database-duotone",
        title: "Backend-разработка",
        description: "API, интеграции, система авторизации, админ-панели, автоматизация"
      },
      {
        icon: "ph:palette-duotone",
        title: "Frontend-разработка",
        description: "Современные интерфейсы на Vue 3 / Nuxt / Pinia, адаптивная верстка"
      },
      {
        icon: "ph:rocket-launch-duotone",
        title: "Оптимизация и поддержка",
        description: "Ускорение загрузки, настройка SEO, технический аудит, исправление ошибок"
      },
      {
        icon: "ph:package-duotone",
        title: "DevOps / Docker / Nginx",
        description: "Сборка и деплой проектов, CI/CD, мониторинг, настройка серверов"
      },
      {
        icon: "ph:lightbulb-duotone",
        title: "Консультации",
        description: "Технический аудит, выбор стека, архитектурные решения"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "services section",
        id: "services"
      }, _attrs))} data-v-961a6625><div class="container" data-v-961a6625><h2 class="services__title text-center" data-v-961a6625>🛠 Что я делаю</h2><p class="services__subtitle text-center text-secondary" data-v-961a6625> Полный спектр разработки от идеи до продакшена </p><div class="services__grid grid grid--3" data-v-961a6625><!--[-->`);
      ssrRenderList(services, (service, index2) => {
        _push(`<div class="service-card" data-v-961a6625><div class="service-card__icon" data-v-961a6625>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          size: "48"
        }, null, _parent));
        _push(`</div><h3 class="service-card__title" data-v-961a6625>${ssrInterpolate(service.title)}</h3><p class="service-card__description" data-v-961a6625>${ssrInterpolate(service.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ServicesSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicesSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-961a6625"]]), { __name: "HomeServicesSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dan Koshevoy - Full Stack разработчик",
      meta: [
        {
          name: "description",
          content: "Создаю современные сайты и веб-приложения. Frontend + Backend разработка на Vue, Laravel, Docker."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-b2763542>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(`<div class="section-divider" data-v-b2763542></div>`);
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      _push(`<div class="section-divider" data-v-b2763542></div>`);
      _push(ssrRenderComponent(CredentialsSection, null, null, _parent));
      _push(`<div class="section-divider" data-v-b2763542></div>`);
      _push(ssrRenderComponent(ServicesSection, null, null, _parent));
      _push(`<div class="section-divider" data-v-b2763542></div>`);
      _push(ssrRenderComponent(PortfolioSection, null, null, _parent));
      _push(`<div class="section-divider" data-v-b2763542></div>`);
      _push(ssrRenderComponent(CaseStudiesSection, null, null, _parent));
      _push(`<div class="section-divider" data-v-b2763542></div>`);
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2763542"]]);

export { index as default };
//# sourceMappingURL=index-DRZj3rbZ.mjs.map
