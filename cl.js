const register = document.getElementById("regbtn");
const descr = document.getElementById("descripcion");

const estudios = document.getElementById("estudios");

const currentYearElement = document.getElementById("currentYear");

const currentYear = new Date().getFullYear();

currentYearElement.textContent = currentYear;
estudios.innerHTML = `<li>Ingenieria Electronica.Instituto Politecnico Santiago Marino/2011</li> <li>Desarrollador WEB.2023</li>`;

descr.innerHTML = `Soy Ingeniero Electronico con experiencia en telecomunicaciones y 
conocimientos sólidos en GNU/Linux, seguridad informática, redes IP y Telefonia IP. Cuento con
 habilidades como desarrollador web en JavaScript y Node.js para soluciones en VoIP y Asterisk y otras soluciones. 
 Puedo ayudarte implementar soluciones de comunicación de alta calidad en tu empresa. 
 Puedo llevar tus soluciones de comunicación al siguiente nivel, 
 la combinacion de mis habilidades en telecomunicaciones, seguridad informática y desarrollo de software 
 te permitirá mejorar la eficiencia y efectividad de tus sistemas de comunicación de manera significativa.`;

register.addEventListener("click", async (e) => {
  const apiUrl = "http://localhost:4001/api/call";
  // Crear un objeto con los datos a enviar
  const ObjDatos = {
    phone: 2001,
    pass: "ccs123",
    exten: 3001,
  };

  // Realizar una solicitud POST a la API remota
  //const apiUrl = "http://45e4028ea1f5.sn.mynetname.net:41347/api";

  try {
    /* const res = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(ObjDatos),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });*/
    const res = axios
      .post(apiUrl, ObjDatos)
      .then(function (response) {
        //console.log(response.data.teclado);
        window.location.href = response.data.teclado;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error("Error:", error);
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.add("navbar-shrink");
    } else {
      navbarCollapsible.classList.remove("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // // Collapse responsive navbar when toggler is visible
  // const navbarToggler = document.body.querySelector(".navbar-toggler");
  // const responsiveNavItems = [].slice.call(
  //   document.querySelectorAll("#navbarResponsive .nav-link")
  // );
  // responsiveNavItems.map(function (responsiveNavItem) {
  //   responsiveNavItem.addEventListener("click", () => {
  //     if (window.getComputedStyle(navbarToggler).display !== "none") {
  //       navbarToggler.click();
  //     }
  //   });
  // });

  // // Activate SimpleLightbox plugin for portfolio items
  // new SimpleLightbox({
  //   elements: "#portfolio a.portfolio-box",
  // });
});
