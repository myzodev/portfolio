import type Project from "@/types/project";

const projectsData: Project[] = [
	{
		title: "Marker",
		slug: "marker",
		role: "Development",
		url: "https://marker.sk",
		color: "green",
		year: "2025",
		active: true,
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Marker is a modern, performance-driven digital platform. My responsibility was leading the frontend architecture and development. By focusing on a clean development process, I was able to deliver the first fully usable MVP in just one month.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Performance</h3>
        <p>
          The core of the application is built on <strong>Next.js</strong> utilizing <strong>Incremental Static Regeneration (ISR)</strong>. To ensure maximum reliability and lightning-fast load times, I engineered a robust fallback strategy: maintaining an identical, fully statically generated version of the app. To manage both applications and share core components efficiently, I structured the project as a <strong>Turbo monorepo</strong>. This guarantees seamless uptime, exceptional SEO performance, and a highly streamlined development workflow.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Challenges</h3>
        <ul>
          <li><strong>Custom CMS Integration:</strong> Built a dynamic and reliable data pipeline connecting the frontend to a custom-built headless CMS, handling complex data fetching and typical blog functionalities.</li>
          <li><strong>Article Lock & Permissions:</strong> Implemented a secure "article lock" feature, managing complex user states and access permissions specifically tailored for content contributors.</li>
          <li><strong>UI & State Management:</strong> Translated the high-end design into a fully responsive interface using <strong>Tailwind CSS</strong> and <strong>Headless UI</strong>, while handling global state seamlessly with <strong>Zustand</strong>.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>Next.js, TypeScript, Turborepo, Tailwind CSS, Headless UI, Zustand</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://marker.sk" target="_blank" rel="noopener noreferrer">marker.sk</a>
        </p>
      </div>
    `,
	},
	{
		title: "Mafert",
		slug: "mafert",
		role: "Development",
		url: "https://mafert.sk",
		color: "red",
		year: "2025",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Mafert is a comprehensive production management and optimization software designed for the manufacturing and engineering sector. My role was to build its fully dynamic presentation website - a visually engaging platform that effectively communicates the software's value, showcases its various modules (such as Quality Control, Maintenance, and Calibrations), and drives business conversions.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          To ensure smooth content management, the backend is powered by <strong>OctoberCMS</strong>. For the frontend, I chose a lightweight approach, utilizing <strong>Alpine.js</strong> paired with <strong>Tailwind CSS</strong>. This strategic combination allowed me to deliver rich interactivity without the overhead of a heavy JavaScript framework, keeping the site exceptionally fast and responsive.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Interactive ROI Calculator:</strong> Developed a custom, real-time calculator that allows potential clients to estimate their financial savings based on their employee count and selected software modules.</li>
          <li><strong>Fully Dynamic Content:</strong> Architected the OctoberCMS backend with custom components, ensuring that every section of the presentation site is easily editable by the client without touching the codebase.</li>
          <li><strong>Engaging UI & Animations:</strong> Brought the unique, high-end design to life with fluid animations and interactive elements, utilizing Alpine.js for clean and efficient reactivity.</li>
          <li><strong>Performance First:</strong> Maintained a minimal frontend footprint. By avoiding heavy libraries, the site achieves excellent performance scores and delivers a seamless user experience.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>OctoberCMS, PHP, Tailwind CSS, Alpine.js</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://mafert.sk" target="_blank" rel="noopener noreferrer">mafert.sk</a>
        </p>
      </div>
    `,
	},
	{
		title: "Legro",
		slug: "legro",
		role: "Development",
		url: "https://legro.sk",
		color: "red",
		year: "2025",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Legro is an established industrial manufacturing company specializing in heavy steel structures and machine parts. I was responsible for the fullstack development of their new presentation website. The goal was to create a modern digital presence that reflects their 20 years of expertise and provides a clear, professional overview of their services, product catalogs, and career opportunities.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          Following a proven and highly efficient architecture, the backend is driven by <strong>OctoberCMS</strong>. For the frontend, I utilized <strong>Alpine.js</strong> and <strong>Tailwind CSS</strong>. This setup ensures the client has complete control over their content while keeping the frontend exceptionally lightweight, fast, and fully responsive.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Dynamic Content Management:</strong> Developed custom OctoberCMS components to allow the client to easily manage company news, job postings, and product catalogs (such as their safety fences) without any coding knowledge.</li>
          <li><strong>Industrial & Modern UI:</strong> Translated the robust, heavy-industry nature of the business into a clean, modern, and highly accessible user interface using Tailwind CSS.</li>
          <li><strong>Performance & SEO:</strong> By keeping the JavaScript footprint to a minimum with Alpine.js, the site achieves blazing-fast load times, ensuring an optimal user experience and strong B2B search engine visibility.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>OctoberCMS, PHP, Tailwind CSS, Alpine.js</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://legro.sk" target="_blank" rel="noopener noreferrer">legro.sk</a>
        </p>
      </div>
    `,
	},
	{
		title: "Audilun",
		slug: "audilun",
		role: "Development",
		url: "https://audilun.com",
		color: "lime-green",
		year: "2025",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Audilun is a specialized portfolio and service platform for a professional audio engineer offering Spotify - ready mixing and mastering. The objective was to create a high-converting landing page that not only explains the service but allows potential clients to directly "hear the difference" through seamless audio demonstrations.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          Staying consistent with a highly reliable architecture, the backend is powered by <strong>OctoberCMS</strong>. The frontend was built using <strong>Tailwind CSS</strong> and <strong>Alpine.js</strong>. This stack was chosen to handle custom interactive elements - like the audio players - without slowing down the site, ensuring a premium feel from the moment the page loads.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Interactive Audio Showcase:</strong> Developed a custom, Alpine.js-powered audio player that allows users to effortlessly switch between genres (Dance, Pop/Rock, Pop Punk) and compare raw vs. mastered tracks in real-time.</li>
          <li><strong>Conversion-Optimized Flow:</strong> Designed and developed a clear, step-by-step onboarding UI (Upload -> Free Preview -> Finish) to maximize client inquiries and fill the limited monthly availability spots.</li>
          <li><strong>Dynamic Content Management:</strong> Engineered the OctoberCMS backend so the client can easily upload new audio stems, update text content, and manage portfolio examples independently.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>OctoberCMS, PHP, Tailwind CSS, Alpine.js</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://audilun.com" target="_blank" rel="noopener noreferrer">audilun.com</a>
        </p>
      </div>
    `,
	},
	{
		title: "Racetime",
		slug: "racetime",
		role: "Development & Design",
		url: "https://racetime.sk",
		color: "red",
		wip: true,
		year: "2025",
	},
	{
		title: "Bavimi",
		slug: "bavimi",
		role: "Template Customization",
		url: "https://bavimi.sk",
		color: "yellow",
		year: "2025",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Bavimi is an e-commerce store specializing in premium teas. My role focused on customizing an existing Shopify template to perfectly align with the brand's identity, ensuring a warm, inviting, and seamless shopping experience for their customers.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Customization & Development</h3>
        <p>
          Working deeply within the <strong>Shopify</strong> ecosystem, I modified the core <strong>Liquid</strong> templates, adjusted the frontend styling, and restructured key layout elements. The goal was to elevate the standard template into a bespoke digital storefront without compromising the platform's underlying reliability and performance.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Brand Alignment:</strong> Tailored the theme's color palette, typography, and visual hierarchy to match the calming, organic aesthetic of a premium tea brand.</li>
          <li><strong>UX/UI Enhancements:</strong> Refined product pages, navigation menus, and the cart drawer to ensure a frictionless customer journey from product discovery to checkout.</li>
          <li><strong>Responsive Optimization:</strong> Extensively tested and adjusted the custom layout to ensure the store looks and functions flawlessly across all mobile, tablet, and desktop devices.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>Shopify, Liquid, HTML, CSS, JavaScript</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://bavimi.sk" target="_blank" rel="noopener noreferrer">bavimi.sk</a>
        </p>
      </div>
    `,
	},
	{
		title: "Hypur",
		slug: "hypur",
		role: "Development & Design",
		url: "https://hypur.sk",
		color: "sky-blue",
		wip: true,
		year: "2025",
	},
	{
		title: "STUDIO PARADA",
		slug: "studio-parada",
		role: "Development",
		url: "https://studioparada.com",
		color: "gray",
		year: "2024",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Studio Parada is a premium branding and UX studio with deep expertise in media and digital transformation. My role was to develop their official presentation website, ensuring their high-profile case studies (such as projects for Marker.sk, Denník Štandard, and CTP) were showcased in a sleek, professional, and highly performant environment.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          To give the studio full control over their portfolio, the backend was built on <strong>OctoberCMS</strong>. For the frontend, I utilized <strong>Tailwind CSS</strong> and <strong>Alpine.js</strong>. This combination allowed me to execute their sophisticated design requirements with pixel-perfect precision while keeping the overall codebase lightweight and incredibly fast.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Dynamic Portfolio Showcase:</strong> Built a custom CMS structure that allows the studio to effortlessly manage and display diverse case studies, ranging from brand identities to complex digital workflows.</li>
          <li><strong>Pixel-Perfect Execution:</strong> As a branding agency, visual accuracy was paramount. I meticulously translated their UI/UX designs into a fluid, responsive frontend that perfectly reflects their premium brand positioning.</li>
          <li><strong>Performance Optimization:</strong> Despite being a media-heavy site showcasing video and motion design, the use of Alpine.js ensures that interactivity is handled smoothly without the overhead of larger JavaScript frameworks.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>OctoberCMS, PHP, Tailwind CSS, Alpine.js</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://studioparada.com" target="_blank" rel="noopener noreferrer">studioparada.com</a>
        </p>
      </div>
    `,
	},
	{
		title: "Volita",
		slug: "volita",
		role: "Development & Design",
		url: "https://volita.sk",
		color: "sky-blue",
		year: "2023",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Volita Group specializes in the professional service, repair, and maintenance of windows, doors, and garage doors. For this project, I took complete ownership of the entire digital lifecycle - acting as both the lead UI/UX designer and the fullstack developer. My goal was to create a trustworthy, high-converting digital presence from scratch.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          The website's backend is powered by <strong>OctoberCMS</strong> to allow the client easy management of their services and content. For the frontend, I opted for a highly optimized, dependency-free approach using <strong>SASS</strong> and <strong>Vanilla JavaScript</strong>. This ensures maximum performance and a lightweight footprint.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>End-to-End UI/UX Design:</strong> Designed the complete visual identity of the website in <strong>Figma</strong>. I carefully crafted the color palette, typography, and layout to evoke trust, reliability, and professionalism.</li>
          <li><strong>Dynamic CMS Integration:</strong> Engineered the OctoberCMS backend to dynamically manage diverse content types, including a complex portfolio of services, customer reviews, blog posts, and regional availability.</li>
          <li><strong>Lightweight Performance:</strong> By relying on Vanilla JS and structured SASS instead of heavy frontend frameworks, the site achieves blazing-fast load times, which is crucial for users seeking immediate emergency repair services.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>Figma, OctoberCMS, PHP, SASS, Vanilla JS</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://volita.sk" target="_blank" rel="noopener noreferrer">volita.sk</a>
        </p>
      </div>
    `,
	},
	{
		title: "TESTAR",
		slug: "testar",
		role: "Development & Design",
		url: "https://testar.sk",
		color: "blue",
		year: "2022",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          TESTAR is an engineering and construction company specializing in structural projection, engineering, and physical realizations. This project holds a special place in my portfolio as my first major end-to-end freelance endeavor. I took full ownership of the product, delivering everything from the initial UI/UX design to the final fullstack implementation.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          To provide the client with an easy way to manage their growing portfolio of construction projects, I built the backend on <strong>OctoberCMS</strong>. For the frontend, I made a conscious decision to avoid heavy frameworks, relying entirely on <strong>SASS</strong> and <strong>Vanilla JavaScript</strong>. This approach ensured a rock-solid, incredibly fast, and future-proof foundation.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Complete UI/UX Design:</strong> Crafted a professional, trustworthy visual identity and user interface from scratch, perfectly tailored to the heavy engineering and construction sector.</li>
          <li><strong>Dynamic Project Portfolio:</strong> Engineered a custom CMS structure to showcase their physical realizations (such as steel structures, staircases, and custom gates), making it effortless for the client to upload new work.</li>
          <li><strong>Lightweight Performance:</strong> By utilizing Vanilla JS and well-architected SASS, the website achieves outstanding load times and remains highly maintainable without dependency bloat.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>Figma, OctoberCMS, PHP, SASS, Vanilla JS</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://testar.sk" target="_blank" rel="noopener noreferrer">testar.sk</a>
        </p>
      </div>
    `,
	},
	{
		title: "Nivy",
		slug: "nivy",
		role: "Optimization & Refactoring",
		url: "https://nivy.com",
		color: "orange",
		year: "2021",
		content: `
      <div class="project-section">
        <h2>Project Overview</h2>
        <p>
          Nivy is a landmark multi-functional center in Bratislava, combining a massive shopping mall, a modern bus terminal, an indoor market, and an active green roof. Working on this large-scale digital platform, my primary focus was on establishing a solid frontend structure.
        </p>
      </div>
      
      <div class="project-section">
        <h3>Architecture & Development</h3>
        <p>
          The platform's data is managed via <strong>OctoberCMS</strong>. On the frontend, I worked extensively with <strong>Vue.js components</strong> and <strong>SASS</strong>. Because of the project's sheer size and complexity, my main objective was to ensure the code was highly modular.
        </p>
      </div>

      <div class="project-section">
        <h3>Core Features & Highlights</h3>
        <ul>
          <li><strong>Data-Heavy Functionality:</strong> Engineered the frontend logic to smoothly process and display varied data streams, such as real-time bus terminal schedules, dynamic opening hours for different zones, and localized content mapping.</li>
          <li><strong>Scalable Styling Architecture:</strong> Structured the <strong>SASS</strong> architecture to keep stylesheets organized and maintainable despite the massive scale of the application, ensuring visual consistency across hundreds of pages.</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Tech Stack</h3>
        <p>
          <strong>OctoberCMS, Vue.js, SASS, JavaScript, HTML</strong>
        </p>
      </div>

      <div class="project-section">
        <h3>Live Website</h3>
        <p>
          Visit <a href="https://nivy.com" target="_blank" rel="noopener noreferrer">nivy.com</a>
        </p>
      </div>
    `,
	},
	{
		title: "Powerlogy",
		slug: "powerlogy",
		role: "Frontend Development",
		url: "https://powerlogy.com",
		color: "lime-green",
		year: "2021",
	},
	{
		title: "ŠARMDENT",
		slug: "sarmdent",
		role: "Frontend Development",
		url: "https://sarmdent.sk",
		color: "pink",
		year: "2021",
	},
];

export default projectsData;
