/* empty css                         */
import { k as createComponent, l as renderTemplate, m as addAttribute, n as renderHead, o as createAstro, p as maybeRenderHead, q as renderComponent, s as renderSlot } from './astro/server_Dep7ZBsA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './_astro_assets_BX3Zt8GI.mjs';

const $$Astro$7 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="/fav-icon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- FONTS --><link rel="preload" href="/fonts/SpaceGrotesk-Medium.woff" as="font" type="font/woff" crossorigin=""><link rel="preload" href="/fonts/SpaceGrotesk-Regular.woff" as="font" type="font/woff" crossorigin="">${renderHead()}</head>`;
}, "C:/Users/layun/kreatif-software/src/layouts/baseHead.astro", void 0);

const bars = new Proxy({"src":"/_astro/bars.Bj-bk8AJ.svg","width":26,"height":19,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/bars.svg";
							}
							
							return target[name];
						}
					});

const brand = new Proxy({"src":"/_astro/brand.LzheVyia.svg","width":220,"height":36,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/brand.svg";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    {
      name: "About us",
      href: "#about"
    },
    {
      name: "Services",
      href: "#services"
    },
    {
      name: "Use cases",
      href: "#cases"
    },
    {
      name: "Testimonials",
      href: "#testimonials"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#fff] fixed w-full top-0 z-10 py-[30px] h-auto flex justify-center"> <nav aria-label="Main Navigation" role="navigation" class="w-full flex h-full items-center justify-between" style="max-width: 1280px"> <div class="pl-4 xl:flex-none"> <a href="#home"> ${renderComponent($$result, "Image", $$Image, { "src": brand, "alt": "Brand logo", "class": "w-[219px]", "loading": "eager" })} </a> </div> <div id="navMenu" class="bg-[#fff] w-full absolute top-full z-10 xl:static xl:flex xl:flex-grow xl:items-center xl:justify-center overflow-hidden transition-height duration-500 h-0 xl:h-auto"> <!-- Nav Links --> <ul class="xl:flex xl:flex-grow xl:justify-center xl:gap-10"> ${navLinks.map((link) => {
    return renderTemplate`<li class="mx-4 p-4 xl:mx-0 px-0"> <a${addAttribute(link.name, "id")}${addAttribute(link.href, "href")} class="block"> ${link.name} </a> </li>`;
  })} </ul> <!-- Login --> <div class="flex xl:flex-row xl:items-center px-4 xl:gap-4 flex-col"> <button class="btn-secondary">Request a quote</button> </div> </div> <button aria-label="menu" role="button" aria-controls="navmenu" aria-expanded="false" id="menuButton" class="w-12 h-12 xl:hidden pr-4 cursor-pointer"> ${renderComponent($$result, "Image", $$Image, { "src": bars, "alt": "hamburgerIcon", "class": "hamburgerIcon" })} </button> </nav> </div> `;
}, "C:/Users/layun/kreatif-software/src/components/ui/Navbar.astro", void 0);

const Logo = new Proxy({"src":"/_astro/logo-alt.g2asEovs.svg","width":220,"height":36,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/logo-alt.svg";
							}
							
							return target[name];
						}
					});

const Facebook = new Proxy({"src":"/_astro/facebook.D0JOV-zG.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/facebook.svg";
							}
							
							return target[name];
						}
					});

const Linkedin = new Proxy({"src":"/_astro/linkedin.eKpMB-Du.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/linkedin.svg";
							}
							
							return target[name];
						}
					});

const Twitter = new Proxy({"src":"/_astro/twitter.CkIHlicD.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/twitter.svg";
							}
							
							return target[name];
						}
					});

const $$ShortForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="bg-[#292A32] px-10 py-14 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center"> <div class="w-full sm:w-[55%]"> <input type="text" id="email" name="email" placeholder="Email" class="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none"> </div> <button type="submit" name="submit" class="w-full sm:w-[45%] btn-tertiary">Talk with us</button> </form>`;
}, "C:/Users/layun/kreatif-software/src/components/ui/ShortForm.astro", void 0);

const $$Astro$6 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const logos = [
    { name: "Facebook", src: Facebook, link: "https://facebook.com" },
    { name: "Linkedin", src: Linkedin, link: "https://linkedin.com" },
    { name: "Twitter", src: Twitter, link: "https://twitter.com" }
  ];
  const links = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#cases" },
    { name: "Pricing", href: "#Testimonials" },
    { name: "Blog", href: "#Home" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="sm:px-5"> <div class="w-full max-w-[1240px] mx-auto"> <div class="px-[15px] bg-dark text-white py-[55px] lg:px-[60px] sm:rounded-t-[45px]"> <div> <div class="flex flex-col lg:flex-row gap-7 items-center justify-between"> <picture> <a href="#home"> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Logo for Kreatif Brand" })} </a> </picture> <ul class="flex flex-col sm:flex-row gap-5"> ${links.map((link) => {
    return renderTemplate`<li class="text-center"> <a class="underline"${addAttribute(link.href, "href")}> ${link.name} </a> </li>`;
  })} </ul> <ul class="flex gap-5"> ${logos.map((logo) => {
    return renderTemplate`<li> <a${addAttribute(logo.link, "href")} target="_blank"> <picture> ${renderComponent($$result, "Image", $$Image, { "src": logo.src, "alt": logo.name })} </picture> </a> </li>`;
  })} </ul> </div> <div class="flex flex-col lg:flex-row mt-[66px] mb-[51px]"> <div class="flex text-center lg:text-start flex-col w-full lg:w-[30%]"> <h3 class="mb-5">Contact us:</h3> <div class="flex flex-col justify-between gap-4"> <span> Email: examplemail.com </span> <span> Phone: +123 456 789 </span> <span class="lg:w-3/4">
Address: 1234 Street Name, City Name, Country Name
</span> </div> </div> <div class="flex-grow my-10 lg:my-0 lg:ml-12"> ${renderComponent($$result, "ShortForm", $$ShortForm, {})} </div> </div> </div> <div class="h-[1px] bg-white mb-5"></div> <div class="flex flex-col lg:flex-row h-20 justify-center mt-4 text-center md:justify-between md:mt-0"> <span>
2024 Positivus - Made With
<a class="underline" target="_blank" href="https://astro.build/">
Astro
</a> </span> </div> </div> </div> </section>`;
}, "C:/Users/layun/kreatif-software/src/components/ui/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Kreatif Software", "description": "Kreatif ofrece servicios de dise\xF1o y desarrollo de software", "data-astro-cid-sckkx6r4": true })}${maybeRenderHead()}<body data-astro-cid-sckkx6r4> <main data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </main> </body></html>`;
}, "C:/Users/layun/kreatif-software/src/layouts/Layout.astro", void 0);

const HeroIlust = new Proxy({"src":"/_astro/hero-pic.Cf7ZIw9T.png","width":601,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/hero-pic.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Section.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 grid-template md:grid-cols-2 md:grid-rows-1 mt-[135px]" data-astro-cid-anhloy43> <div class="flex flex-col w-full lg:w-[66.5%]" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>Navigating the digital landscape for success</h1> </div> <picture class="row-span-1 md:row-span-3 transition-all duration-200 " data-astro-cid-anhloy43> ${renderComponent($$result2, "Image", $$Image, { "src": HeroIlust, "alt": "Hero Ilust", "class": "w-full md:w-auto", "loading": "eager", "data-astro-cid-anhloy43": true })} </picture> <div class="w-full lg:w-[66.5%]" data-astro-cid-anhloy43> <p class="my-[35px]" data-astro-cid-anhloy43>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation. </p> <button class="btn-primary w-full md:w-auto" data-astro-cid-anhloy43>Book a consultation</button> </div> </div> ` })} `;
}, "C:/Users/layun/kreatif-software/src/components/sections/Hero.astro", void 0);

const s1 = new Proxy({"src":"/_astro/company-logo1.syO998vd.svg","width":111,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/company-logo1.svg";
							}
							
							return target[name];
						}
					});

const s2 = new Proxy({"src":"/_astro/company-logo2.CREQfids.svg","width":126,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/company-logo2.svg";
							}
							
							return target[name];
						}
					});

const s3 = new Proxy({"src":"/_astro/company-logo3.c2biK_9v.svg","width":147,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/company-logo3.svg";
							}
							
							return target[name];
						}
					});

const s4 = new Proxy({"src":"/_astro/company-logo4.COtkDUvM.svg","width":129,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/company-logo4.svg";
							}
							
							return target[name];
						}
					});

const s5 = new Proxy({"src":"/_astro/company-logo5.BbmFav3z.svg","width":127,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/company-logo5.svg";
							}
							
							return target[name];
						}
					});

const s6 = new Proxy({"src":"/_astro/company-logo6.BTRoJjnx.svg","width":125,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/company-logo6.svg";
							}
							
							return target[name];
						}
					});

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const sponsors = [
    { logo: s1, alt: "Zoom logo" },
    { logo: s2, alt: "Netflix logo" },
    { logo: s3, alt: "HubSpot logo" },
    { logo: s4, alt: "Notion logo" },
    { logo: s5, alt: "Dribble logo" },
    { logo: s6, alt: "Amazon logo" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "sponsors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-wrap justify-between gap-7 mt-[60px]"> ${sponsors.map((sponsor) => {
    return renderTemplate`<div> ${renderComponent($$result2, "Image", $$Image, { "src": sponsor.logo, "alt": sponsor.alt, "loading": "lazy" })} </div>`;
  })} </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Sponsors.astro", void 0);

const $$Astro$4 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]">${description}</p> </div>`;
}, "C:/Users/layun/kreatif-software/src/components/ui/SectionTitle.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "C:/Users/layun/kreatif-software/src/components/ui/Card.astro", void 0);

const gob = new Proxy({"src":"/_astro/icon6.gU4U-Esm.svg","width":41,"height":41,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/icon6.svg";
							}
							
							return target[name];
						}
					});

const wob = new Proxy({"src":"/_astro/icon7._oy4oYgP.svg","width":41,"height":41,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/icon7.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { index, titleTop, titleBottom, img, alt, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true, "data-astro-cid-qzn24t3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] ${index === 1 ? "bg-white" : index === 2 ? "bg-green" : "bg-dark text-white"}`, "class")} data-astro-cid-qzn24t3o> <h3 class="flex flex-col col-span-2 lg:col-span-1" data-astro-cid-qzn24t3o> <span${addAttribute(`w-[fit-content] ${index === 1 ? "greenhead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o> ${titleTop} </span> <span${addAttribute(`w-[fit-content] ${index === 1 ? "greenhead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o> ${titleBottom} </span> </h3> <picture class="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center" data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": img, "alt": alt, "class": "h-[100px] sm:h-auto sm:w-3/4 object-cover", "data-astro-cid-qzn24t3o": true })} </picture> <div class="flex items-end" data-astro-cid-qzn24t3o> <a${addAttribute(link, "href")} class="flex items-center gap-3.5 " data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": index === 1 || index === 2 ? gob : wob, "alt": alt, "data-astro-cid-qzn24t3o": true })} <span data-astro-cid-qzn24t3o>Service Info</span> </a> </div> </div> ` })} `;
}, "C:/Users/layun/kreatif-software/src/components/ui/ServiceCard.astro", void 0);

const c1 = new Proxy({"src":"/_astro/card-pic1.LmmlwL7_.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/card-pic1.png";
							}
							
							return target[name];
						}
					});

const c2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

const c3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

const c4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

const c5 = new Proxy({"src":"/_astro/card-pic5.CqK5dBMJ.png","width":210,"height":196,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/card-pic5.png";
							}
							
							return target[name];
						}
					});

const c6 = new Proxy({"src":"/_astro/card-pic6.CXJkFMY0.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/card-pic6.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Search Engine",
      titleBottom: "Optimization",
      img: c1,
      alt: "SEO",
      link: "https://www.google.com"
    },
    {
      index: 2,
      titleTop: "Pay-per-click",
      titleBottom: "advertising",
      img: c2,
      alt: "SEO",
      link: "https://www.google.com"
    },
    {
      index: 3,
      titleTop: "Social Media",
      titleBottom: "Marketing",
      img: c3,
      alt: "SEO",
      link: "https://www.google.com"
    },
    {
      index: 1,
      titleTop: "Email",
      titleBottom: "Marketing",
      img: c4,
      alt: "SEO",
      link: "https://www.google.com"
    },
    {
      index: 2,
      titleTop: "Content",
      titleBottom: "Creation",
      img: c5,
      alt: "SEO",
      link: "https://www.google.com"
    },
    {
      index: 3,
      titleTop: "Analytics and",
      titleBottom: "Tracking",
      img: c6,
      alt: "SEO",
      link: "https://www.google.com"
    }
  ];
  const description = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Services", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-3 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Services.astro", void 0);

const propImg = new Proxy({"src":"/_astro/proposal-pic.DC7YnBHg.png","width":494,"height":395,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/proposal-pic.png";
							}
							
							return target[name];
						}
					});

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-[#F3F3F3] rounded-[45px] p-[60px] relative mt-[123px] mb-[163px]"> <div class="w-full md:w-[40%] flex flex-col gap-[26px]"> <h2>Let's make things happen</h2> <p>
Contact us today to learn more about how our digital marketing
                    services can help your business grow and succeed online.
</p> <button class="btn-primary">Get your free proposal</button> </div> <picture class="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[450px] items-center justify-center"> ${renderComponent($$result3, "Image", $$Image, { "src": propImg, "alt": "This is an illustration", "class": "hidden md:flex lg:h-full lg:w-auto" })} </picture> </div> ` })} ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Proposal.astro", void 0);

const larrow = new Proxy({"src":"/_astro/icon3.C2Kx7sAW.svg","width":21,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/icon3.svg";
							}
							
							return target[name];
						}
					});

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 0,
      title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "https://google.com"
    },
    {
      index: 1,
      title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "https://google.com"
    },
    {
      index: 1,
      title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "https://google.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "cases" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Case Studies", "description": "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-white rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <p>${card.title}</p> <a${addAttribute(card.link, "href")} class="flex items-center gap-[15px]"> <span class="text-green">Case Info</span> <picture> ${renderComponent($$result3, "Image", $$Image, { "src": larrow, "alt": "Arrow poiting up right" })} </picture> </a> </div> </div> ` })}`)} </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Cases.astro", void 0);

const $$Astro$1 = createAstro();
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-white w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 maw-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs>${description}</p> </div> </div>  `;
}, "C:/Users/layun/kreatif-software/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const content = [
    {
      index: 1,
      title: "First Item",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. "
    },
    {
      index: 2,
      title: "Second Item",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. "
    },
    {
      index: 3,
      title: "Third Item",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. "
    },
    {
      index: 4,
      title: "Fourth Item",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. "
    },
    {
      index: 5,
      title: "Fifth Item",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. "
    },
    {
      index: 6,
      title: "Sixth Item",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. "
    }
  ];
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
  })}`;
}, "C:/Users/layun/kreatif-software/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "Step-by-Step Guide to Achieving Your Business Goals";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Our Working Process", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Process.astro", void 0);

const linkd = new Proxy({"src":"/_astro/profile-in.CjyVQDgO.svg","width":34,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/profile-in.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { pic, name, role, description, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-[60px]"> <div class="flex flex-col sm:flex-row relative"> <picture>${renderComponent($$result2, "Image", $$Image, { "src": pic, "alt": name })}</picture> <div class="flex flex-col justify-end sm:ml-5"> <h3>${name}</h3> <p>${role}</p> </div> <a${addAttribute(link, "href")} class="absolute right-0 top-0"> ${renderComponent($$result2, "Image", $$Image, { "src": linkd, "alt": "LinkedIn logo" })} </a> </div> <div class="w-full h-[1px] bg-black my-7"></div> <div>${description}</div> </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/ui/TeamCard.astro", void 0);

const p6 = new Proxy({"src":"/_astro/profile-pic.BXGiH5YH.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/profile-pic.png";
							}
							
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const description = "Meet the skilled and experienced team behind our successful digital marketing strategies";
  const team = [
    {
      pic: p6,
      name: "Maria Katz",
      role: "CEO",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    },
    {
      pic: p6,
      name: "Maria Katz",
      role: "CTO",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    },
    {
      pic: p6,
      name: "Maria Katz",
      role: "COO",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    },
    {
      pic: p6,
      name: "Maria Katz",
      role: "CFO",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    },
    {
      pic: p6,
      name: "Maria Katz",
      role: "CMO",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    },
    {
      pic: p6,
      name: "Maria Katz",
      role: "CIO",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Team", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10"> ${team.map((member, index) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { "key": index, "pic": member.pic, "name": member.name, "role": member.role, "description": member.description, "link": member.link })}`)} </div> <div class="flex justify-end mt-10"> <button class="btn-primary">See all team</button> </div> </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Team.astro", void 0);

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { index: 1, name: "John Johnson", description: "Marketing Director at XYZ" },
    { index: 2, name: "Ana Banana", description: "Marketing Director at XYZ" },
    {
      index: 3,
      name: "Camilo Corintio",
      description: "Marketing Director at XYZ"
    },
    { index: 4, name: "Karla Jaz", description: "Marketing Director at XYZ" },
    { index: 5, name: "Johanna Jana", description: "Marketing Director at XYZ" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "var(--green)",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${slides.map((slide) => renderTemplate`<div class="swiper-slide text-white flex flex-col" role="group"${addAttribute(`${slide.index} / ${slides.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-green font-medium" data-astro-cid-klye6o2m>${slide.name}</div> <div data-astro-cid-klye6o2m>${slide.description}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div>  `;
}, "C:/Users/layun/kreatif-software/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} <div class="rounded-[45px] bg-dark mb-[150px] text-white"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Testimonials.astro", void 0);

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/layun/kreatif-software/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <form class="bg-white sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10" data-astro-cid-2lkv3ujd> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" name="checkbox1" id="checkbox1" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox1" class="text-black" data-astro-cid-2lkv3ujd>Say Hi</label> </div> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" name="checkbox2" id="checkbox2" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox2" class="text-black" data-astro-cid-2lkv3ujd>Get a Quote</label> </div> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Name *</label> <input type="text" id="name" name="name" placeholder="Name" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Email *</label> <input type="email" id="email" name="email" placeholder="Email" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Message *</label> <textarea name="message" id="message" placeholder="Message" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" name="submit" class="btn-primary w-full" data-astro-cid-2lkv3ujd>Send</button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  `;
}, "C:/Users/layun/kreatif-software/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[140px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Contact Us", "description": "Connect with Us: Let's Discuss Your Digital Marketing Needs" })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "C:/Users/layun/kreatif-software/src/components/sections/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/layun/kreatif-software/src/pages/index.astro", void 0);

const $$file = "C:/Users/layun/kreatif-software/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
