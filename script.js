const projects = [
  {
    title: "QuickMerch",
    url: "https://quickmerch.com.au/",
    category: "Ecommerce",
    summary:
      "Branded merchandise ecommerce experience with product discovery, promotional content, and conversion paths for quote-driven buying.",
    tags: ["WordPress", "WooCommerce", "SEO", "Ecommerce"],
  },
  {
    title: "Greatrex Marketing",
    url: "https://greatrexmarketing.com.au/",
    category: "Brand Marketing",
    summary:
      "Promotional merchandise and apparel website with catalog navigation, supplier references, recent projects, and inquiry journeys.",
    tags: ["WordPress", "SEO", "Ecommerce"],
  },
  {
    title: "Greatrex Goodmates",
    url: "https://greatrex-marketing.myshopify.com/",
    category: "Shopify Storefront",
    summary:
      "Shopify apparel storefront featuring collections, product cards, cart flows, promotional messaging, and responsive shopping paths.",
    tags: ["Shopify", "Liquid", "Ecommerce"],
  },
  {
    title: "Clark Outsourcing",
    url: "https://clarkoutsourcing.com/",
    category: "Corporate Website",
    summary:
      "Remote outsourcing website focused on service positioning, lead generation, content structure, and brand trust signals.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Clark Staff",
    url: "https://clarkstaff.com/",
    category: "BPO Website",
    summary:
      "Staffing and outsourcing web presence supporting service discovery, credibility, and customer acquisition for remote teams.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "The Branding Bees",
    url: "https://thebrandingbees.com/",
    category: "Outsourcing Website",
    summary:
      "Promotional merchandise outsourcing site with service storytelling, partner sections, location details, and consultation calls.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Nectar BPO",
    url: "https://nectarbpo.com/",
    category: "BPO Website",
    summary:
      "Modern BPO website with service and industry pathways for contact center, finance ops, trust and safety, IT, and AI services.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Architect Outsourcing",
    url: "https://architectoutsourcing.com/",
    category: "Industry Website",
    summary:
      "Architecture outsourcing website for AEC talent, service pages, studio extension messaging, and global delivery positioning.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Outsource Your Accounting",
    url: "https://outsourceyouraccounting.com/",
    category: "Niche Service Site",
    summary:
      "Accounting outsourcing website with payroll, AP and AR, tax preparation, consulting, and role-focused service content.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Angeles City Call Center",
    url: "https://angelescitycallcenter.com/",
    category: "Lead Generation Site",
    summary:
      "Call center service website with pricing, facility details, trust-building sections, and clear quote request paths.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Outsourced Medical",
    url: "https://outsourcedmedical.com/",
    category: "Healthcare Outsourcing",
    summary:
      "Healthcare outsourcing website highlighting medical transcription, EMR management, insurance liaison, and RN staffing.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Pampanga Call Center",
    url: "https://pampangacallcenter.com/",
    category: "BPO Website",
    summary:
      "Regional call center website presenting voice, non-voice, seat leasing, office capacity, and service trust signals.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Philippine Seat Leasing",
    url: "https://philippinesseatleasing.com/",
    category: "Service Website",
    summary:
      "Seat leasing site for Clark, Angeles, and Bacolod with BPO consulting, call center outsourcing, and digital media services.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Clark Office Space",
    url: "https://clarkofficespace.com/",
    category: "Office Space Website",
    summary:
      "Office space and remote staffing website covering coworking, facilities, seat leasing, and service inquiry content.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "The Lead Tree",
    url: "https://theleadtree.com/",
    category: "Lead Generation",
    summary:
      "Lead generation website with service menus, lead categories, telemarketing scripts, testimonials, and contact conversion paths.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "Realty Outsourcing",
    url: "https://realtyoutsourcing.com/",
    category: "Real Estate Outsourcing",
    summary:
      "Real estate outsourcing site for property management, transaction coordination, lead generation, and Airbnb management.",
    tags: ["WordPress", "BPO", "SEO"],
  },
  {
    title: "RM Consulting",
    url: "https://russellmeiselman.com/",
    category: "Consulting Website",
    summary:
      "Consulting website for process excellence, offshore implementation, scalability playbooks, industries, and lead capture.",
    tags: ["WordPress", "BPO", "SEO"],
  },
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const spotlightImage = document.querySelector("#spotlightImage");
const spotlightCategory = document.querySelector("#spotlightCategory");
const spotlightTitle = document.querySelector("#spotlightTitle");
const spotlightSummary = document.querySelector("#spotlightSummary");
const spotlightTags = document.querySelector("#spotlightTags");
const spotlightLink = document.querySelector("#spotlightLink");

function screenshotUrl(url, width = 1200) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

function initials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function renderTags(tags, container) {
  container.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
}

function setSpotlight(project) {
  spotlightImage.src = screenshotUrl(project.url, 1400);
  spotlightImage.alt = `${project.title} website preview`;
  spotlightCategory.textContent = project.category;
  spotlightTitle.textContent = project.title;
  spotlightSummary.textContent = project.summary;
  spotlightLink.href = project.url;
  renderTags(project.tags, spotlightTags);

  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.title === project.title);
  });
}

spotlightImage.addEventListener("error", (event) => {
  event.currentTarget.style.display = "none";
});

spotlightImage.addEventListener("load", (event) => {
  event.currentTarget.style.display = "block";
});

function projectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.title = project.title;
  card.innerHTML = `
    <div class="project-media">
      <div class="project-fallback" aria-hidden="true">${initials(project.title)}</div>
      <img src="${screenshotUrl(project.url)}" alt="${project.title} website preview" loading="lazy">
    </div>
    <div class="project-card-body">
      <p class="eyebrow">${project.category}</p>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="project-actions">
        <button class="text-button" type="button">Highlight</button>
        <a class="live-link" href="${project.url}" target="_blank" rel="noreferrer">Live site</a>
      </div>
    </div>
  `;

  card.querySelector(".text-button").addEventListener("click", () => {
    setSpotlight(project);
    document.querySelector(".spotlight").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  card.querySelector("img").addEventListener("error", (event) => {
    event.currentTarget.style.display = "none";
  });

  return card;
}

function renderProjects(filter = "All") {
  const visibleProjects =
    filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter));

  projectGrid.innerHTML = "";
  visibleProjects.forEach((project) => projectGrid.appendChild(projectCard(project)));
  setSpotlight(visibleProjects[0] || projects[0]);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
} else {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
