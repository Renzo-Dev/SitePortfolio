import { defineComponent, provide, mergeProps, computed, unref, withCtx, createTextVNode, toDisplayString, ref, inject, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DrGNBtzb.mjs';
import __nuxt_component_0$1 from './index-BX0WJbDy.mjs';
import { _ as _export_sfc } from './server.mjs';
import { B as Button } from './Button-BQ0utCTJ.mjs';
import '../nitro/nitro.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-qJeKCimw.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const navLinks = [
      { label: "Обо мне", href: "#about" },
      { label: "Портфолио", href: "#portfolio" },
      { label: "Услуги", href: "#services" },
      { label: "Контакты", href: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-4db2f00a><div class="footer__divider" data-v-4db2f00a></div><div class="container" data-v-4db2f00a><div class="footer__content" data-v-4db2f00a><div class="footer__column" data-v-4db2f00a><h4 class="footer__title" data-v-4db2f00a>Dan Koshevoy</h4><p class="footer__text" data-v-4db2f00a> Full Stack разработчик с опытом создания современных веб-приложений </p></div><div class="footer__column" data-v-4db2f00a><h4 class="footer__title" data-v-4db2f00a>Навигация</h4><nav class="footer__nav" data-v-4db2f00a><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.href,
          to: link.href,
          class: "footer__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="footer__column" data-v-4db2f00a><h4 class="footer__title" data-v-4db2f00a>Контакты</h4><div class="footer__contacts" data-v-4db2f00a><a href="mailto:dankoshevoy@gmail.com" class="footer__link" data-v-4db2f00a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:envelope-duotone",
        size: "20"
      }, null, _parent));
      _push(` dankoshevoy@gmail.com </a><a href="https://t.me/renzo_pw" target="_blank" rel="noopener" class="footer__link" data-v-4db2f00a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:telegram-logo-duotone",
        size: "20"
      }, null, _parent));
      _push(` Telegram: @renzo_pw </a><a href="https://github.com/Renzo-Dev" target="_blank" rel="noopener" class="footer__link" data-v-4db2f00a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:github-logo-duotone",
        size: "20"
      }, null, _parent));
      _push(` GitHub: Renzo-Dev </a></div></div></div><div class="footer__bottom" data-v-4db2f00a><p class="footer__copyright" data-v-4db2f00a> © ${ssrInterpolate(unref(currentYear))} Dan Koshevoy — Built with Nuxt &amp; Vue </p><p class="footer__made-with-love" data-v-4db2f00a> Сделано с душой <svg class="footer__heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-v-4db2f00a><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-v-4db2f00a></path></svg></p></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-4db2f00a"]]), { __name: "LayoutFooter" });
const useHeaderScroll = (threshold = 100) => {
  {
    return {
      scrollY: ref(0),
      isScrolled: ref(false)
    };
  }
};
const useMobileMenu = () => {
  const isMobileMenuOpen = ref(false);
  const isClosing = ref(false);
  const menuElement = ref(null);
  let scrollPosition = 0;
  const lockScroll = () => {
    scrollPosition = (void 0).scrollY || (void 0).pageYOffset;
    const scrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
    (void 0).documentElement.style.setProperty(
      "--scrollbar-compensation",
      `${scrollbarWidth}px`
    );
    (void 0).body.style.overflow = "hidden";
    (void 0).body.style.position = "fixed";
    (void 0).body.style.top = `-${scrollPosition}px`;
    (void 0).body.style.left = "0";
    (void 0).body.style.right = "0";
    (void 0).body.style.paddingRight = `${scrollbarWidth}px`;
    const header = (void 0).querySelector(".header");
    if (header) {
      header.style.paddingRight = `${scrollbarWidth}px`;
    }
    (void 0).documentElement.style.overflow = "hidden";
  };
  const unlockScroll = () => {
    (void 0).body.style.overflow = "";
    (void 0).body.style.position = "";
    (void 0).body.style.top = "";
    (void 0).body.style.left = "";
    (void 0).body.style.right = "";
    (void 0).body.style.paddingRight = "";
    const header = (void 0).querySelector(".header");
    if (header) {
      header.style.paddingRight = "";
    }
    (void 0).documentElement.style.overflow = "";
    (void 0).documentElement.style.removeProperty("--scrollbar-compensation");
    (void 0).scrollTo(0, scrollPosition);
  };
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen.value) {
      closeWithAnimation();
    } else {
      openMenu();
    }
  };
  const animateOpen = (element) => {
    const duration = 500;
    const startTime = performance.now();
    const startPosition = 100;
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutCubic = (t) => {
        return 1 - Math.pow(1 - t, 3);
      };
      const easedProgress = easeOutCubic(progress);
      const currentPosition = startPosition * (1 - easedProgress);
      element.style.transform = `translateX(${currentPosition}%)`;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.transform = "translateX(0%)";
      }
    };
    requestAnimationFrame(animate);
  };
  const animateClose = (element, callback) => {
    const duration = 350;
    const startTime = performance.now();
    const startPosition = 0;
    const endPosition = 100;
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInCubic = (t) => t * t * t;
      const easedProgress = easeInCubic(progress);
      const currentPosition = startPosition + (endPosition - startPosition) * easedProgress;
      element.style.transform = `translateX(${currentPosition}%)`;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.transform = "translateX(100%)";
        callback();
      }
    };
    requestAnimationFrame(animate);
  };
  const openMenu = () => {
    isMobileMenuOpen.value = true;
    isClosing.value = false;
    lockScroll();
    nextTick(() => {
      if (menuElement.value) {
        menuElement.value.style.transition = "none";
        menuElement.value.style.transform = "translateX(100%)";
        menuElement.value.style.opacity = "1";
        void menuElement.value.offsetHeight;
        nextTick(() => {
          if (menuElement.value) {
            requestAnimationFrame(() => {
              if (menuElement.value) {
                animateOpen(menuElement.value);
              }
            });
          }
        });
      }
    });
  };
  const closeWithAnimation = () => {
    isClosing.value = true;
    if (menuElement.value) {
      animateClose(menuElement.value, () => {
        isMobileMenuOpen.value = false;
        isClosing.value = false;
        unlockScroll();
      });
    } else {
      isMobileMenuOpen.value = false;
      isClosing.value = false;
      unlockScroll();
    }
  };
  const closeMobileMenu = () => {
    if (isMobileMenuOpen.value) {
      closeWithAnimation();
    }
  };
  return {
    isMobileMenuOpen,
    isClosing,
    toggleMobileMenu,
    closeMobileMenu,
    unlockScroll,
    menuElement
    // Экспортируем ref для привязки к элементу
  };
};
const useNavigation = () => {
  const navLinks = [
    { id: "about", label: "Обо мне", href: "#about" },
    { id: "credentials", label: "Образование", href: "#credentials" },
    { id: "portfolio", label: "Портфолио", href: "#portfolio" },
    { id: "services", label: "Услуги", href: "#services" },
    { id: "contact", label: "Контакты", href: "#contact" }
  ];
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
  const navigateToSection = (sectionId, offset = -80) => {
    scrollToSection(sectionId, offset);
  };
  return {
    navLinks,
    scrollToSection,
    navigateToSection
  };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScrolled } = useHeaderScroll(100);
    const {
      isMobileMenuOpen,
      closeMobileMenu,
      unlockScroll
    } = useMobileMenu();
    const { navLinks, navigateToSection } = useNavigation();
    const handleMobileNavClick = (id) => {
      closeMobileMenu();
      setTimeout(() => {
        unlockScroll();
      }, 100);
      setTimeout(() => {
        navigateToSection(id, -80);
      }, 400);
    };
    const scrollToContact = () => {
      navigateToSection("contact", -80);
    };
    const getLinkIcon = (id) => {
      const icons = {
        about: "ph:user-circle-duotone",
        credentials: "ph:certificate-duotone",
        portfolio: "ph:briefcase-duotone",
        services: "ph:rocket-duotone",
        contact: "ph:envelope-duotone"
      };
      return icons[id] || "ph:circle-duotone";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { "header--scrolled": unref(isScrolled) }]
      }, _attrs))} data-v-b9d8e129><div class="container" data-v-b9d8e129><div class="header__content" data-v-b9d8e129>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header__logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dan Koshevoy `);
          } else {
            return [
              createTextVNode(" Dan Koshevoy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="header__nav-desktop" data-v-b9d8e129><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="header__link-desktop" data-v-b9d8e129>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></nav>`);
      _push(ssrRenderComponent(Button, {
        variant: "primary",
        class: "header__cta",
        onClick: scrollToContact
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Связаться `);
          } else {
            return [
              createTextVNode(" Связаться ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([{ "header__burger--open": unref(isMobileMenuOpen) }, "header__burger"])}" aria-label="Меню" data-v-b9d8e129><span class="header__burger-line" data-v-b9d8e129></span><span class="header__burger-line" data-v-b9d8e129></span><span class="header__burger-line" data-v-b9d8e129></span></button></div></div>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="header__overlay" data-v-b9d8e129></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isMobileMenuOpen)) {
        _push(`<nav class="header__mobile-menu" data-v-b9d8e129><div class="header__mobile-content" data-v-b9d8e129><div class="header__mobile-links" data-v-b9d8e129><!--[-->`);
        ssrRenderList(unref(navLinks), (link, index) => {
          _push(`<a${ssrRenderAttr("href", link.href)} class="header__mobile-link" style="${ssrRenderStyle({ "--item-index": index })}" data-v-b9d8e129><span class="header__mobile-link-icon" data-v-b9d8e129>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: getLinkIcon(link.id),
            size: "24"
          }, null, _parent));
          _push(`</span><span class="header__mobile-link-text" data-v-b9d8e129>${ssrInterpolate(link.label)}</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:caret-right",
            size: "20",
            class: "header__mobile-link-arrow"
          }, null, _parent));
          _push(`</a>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(Button, {
          variant: "primary",
          class: "header__mobile-cta",
          onClick: ($event) => handleMobileNavClick("contact")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Связаться со мной `);
            } else {
              return [
                createTextVNode(" Связаться со мной ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-b9d8e129"]]), { __name: "LayoutHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    inject(
      "scrollTo",
      null
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      if (unref(isVisible)) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          "aria-label": "Scroll to top",
          class: "scroll-to-top"
        }, _attrs))} data-v-95bf6a85>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:arrow-up",
          size: "24"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/ScrollToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollToTop = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-95bf6a85"]]), { __name: "LayoutScrollToTop" });
const useSmoothScroll = () => {
  let lenis = null;
  const init = () => {
    return;
  };
  const destroy = () => {
  };
  const scrollTo = (target, options) => {
    return;
  };
  const scrollToSection = (id, offset = -80) => {
    const element = (void 0).getElementById(id);
    if (element && !lenis) {
      const elementPosition = element.getBoundingClientRect().top + (void 0).scrollY;
      (void 0).scrollTo({
        top: elementPosition + offset,
        behavior: "smooth"
      });
    }
  };
  const stop = () => {
  };
  const start = () => {
  };
  return {
    lenis: computed(() => lenis),
    scrollTo,
    scrollToSection,
    stop,
    start,
    init,
    destroy
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { scrollToSection, scrollTo } = useSmoothScroll();
    provide("scrollToSection", scrollToSection);
    provide("scrollTo", scrollTo);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-cb511dc8>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="layout__main" data-v-cb511dc8>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(ScrollToTop, null, null, _parent));
      _push(`<div class="noise-overlay" data-v-cb511dc8></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb511dc8"]]);

export { _default as default };
//# sourceMappingURL=default-D3IhTdxl.mjs.map
