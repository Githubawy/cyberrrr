export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  type: "Completed" | "Prototype" | "Demonstration" | "Lab Exercise";
  size: "large" | "medium" | "small";
  caseStudy: {
    objective: string;
    architecture: string[];
    methodology: string[];
    outcome: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "faculty-network-infrastructure",
    title: "Faculty Network Infrastructure",
    category: "Network Engineering & Web-Based Network Management",
    description:
      "A university faculty network project involving Cisco Packet Tracer, routers, switches, and wireless infrastructure.",
    tags: ["Cisco Packet Tracer", "VLANs", "Networking", "PHP", "MySQL"],
    type: "Completed",
    size: "large",
    caseStudy: {
      objective:
        "Design a complete, segmented campus network for a university faculty building — covering wired labs, staff offices, and campus-wide wireless — using only structured design methodology and simulated hardware in Cisco Packet Tracer.",
      architecture: [
        "Three-layer hierarchical design: core, distribution, and access layers with concentration of routing at the distribution tier",
        "Departmental VLAN segmentation (labs, staff, administration, guest Wi-Fi) to contain broadcast domains and simplify policy",
        "Inter-VLAN routing via layer 3 switches with default gateways per VLAN, plus trunk links over the access layer",
        "DHCP scopes per segment with static addressing reserved for printers, servers, and management planes",
        "Redundant uplinks modeled between access and distribution for fault-tolerance discussion",
      ],
      methodology: [
        "Mapped requirements to a topology plan before touching Packet Tracer, defining addressing tables and VLAN matrix first",
        "Built the network iteratively — access layer first, then trunks, then routing — validating each stage with end-to-end pings",
        "Documented the full configuration per device (running-config exports) and produced a final topology diagram with labeling standards",
        "Verified DHCP allocation, NAT-less internal routing behavior, and wireless client association across SSIDs",
      ],
      outcome:
        "A fully working simulated faculty network with clean segmentation, per-department isolation, and a reusable documentation pack (topology, IP schema, VLANs, device configs) suitable as a template for similar campus deployments.",
    },
  },
  {
    slug: "network-management-system",
    title: "Network Management System",
    category: "Software Development",
    description:
      "Web application for network device inventory, port management, and topology visualization.",
    tags: ["PHP", "MySQL", "Python", "Nmap"],
    type: "Prototype",
    size: "medium",
    caseStudy: {
      objective:
        "Replace spreadsheet-based device tracking with a lightweight web system that keeps a live inventory of network devices, their switch ports, and a mapable topology.",
      architecture: [
        "PHP (Apache/XAMPP) backend with MySQL schema for devices, interfaces, ports, and location records",
        "Python discovery worker that runs scheduled Nmap sweeps and reconciles results against the inventory",
        "Dashboard views by building, switch, and device type with search and filtering",
      ],
      methodology: [
        "Modeled the database around switches and their ports first, since upstream devices report ownership through the port they plug into",
        "Wrote the discovery worker to parse nmap output into structured JSON, then upsert devices with last-seen timestamps",
        "Marked stale devices instead of deleting them, preserving audit history",
        "Built the UI with plain PHP templates to keep the prototype deployable on any existing XAMPP server",
      ],
      outcome:
        "A working prototype demonstrating automated inventory reconciliation: discovered devices appear in the dashboard with their ports, IPs, and last-seen state, forming the base for a future topology graph module.",
    },
  },
  {
    slug: "web-app-security-assessment",
    title: "Web Application Security Assessment",
    category: "Security Assessment",
    description:
      "Penetration testing and vulnerability assessment focused on OWASP risks.",
    tags: ["OWASP", "Pentesting", "Vulnerability Assessment"],
    type: "Demonstration",
    size: "medium",
    caseStudy: {
      objective:
        "Assess a deliberately vulnerable web application and demonstrate a structured methodology for finding, validating, and reporting OWASP Top 10 class issues in a controlled environment.",
      architecture: [
        "Deliberately vulnerable target app isolated in a local lab (Juice Shop-style target)",
        "Kali attack box with Burp Suite as the interception proxy and workflow hub",
        "Supporting tooling: sqlmap, gobuster/directory fuzzer, curl, and browser dev tools",
      ],
      methodology: [
        "Passive recon: mapping routes, technologies, and authentication flows before sending a single intrusive request",
        "Mapped trust boundaries and annotated every request where user input reached the server or reflected to the client",
        "Manual testing of injection, broken access control, and business-logic cases — automated only where manual was impractical",
        "Each finding validated with a minimal proof-of-concept request, severity-rated, and written up with remediation guidance",
      ],
      outcome:
        "A reproducible assessment workflow and a sample report showing finding, evidence, severity rationale, and fix recommendation — the template I reuse for assessments today.",
    },
  },
  {
    slug: "educenter-management-system",
    title: "EduCenter Management System",
    category: "Web Application",
    description:
      "Education management application involving student records, payments, and role-based access.",
    tags: ["Web Dev", "RBAC", "Database"],
    type: "Completed",
    size: "small",
    caseStudy: {
      objective:
        "Digitize the daily paper workflow of a small education center — student enrollment, group tracking, and payment recording — with different views for admins and staff.",
      architecture: [
        "Server-rendered web app on a classic PHP/MySQL stack deployed on XAMPP locally",
        "Role-based access control (admin/staff) enforced at route level, not just in templates",
        "Normalized schema covering students, groups, enrollments, and payment records",
      ],
      methodology: [
        "Interviewed the daily workflow first and modeled the schema around it — students join groups, not payments",
        "Enforced RBAC through a single authorization check layer so no hidden UI could bypass the rules",
        "Payment records are append-only, keeping a clean audit trail rather than editing balances directly",
        "Trained staff with a simple written usage guide as part of the handover",
      ],
      outcome:
        "A dependable internal tool that survived real daily use — enrollments, receipts, and role separation all handled in one place instead of scattered notebooks.",
    },
  },
  {
    slug: "cybersecurity-home-lab",
    title: "Cybersecurity Home Lab",
    category: "Security Research",
    description:
      "Practical lab work involving Docker, OWASP Juice Shop, and network security experiments.",
    tags: ["Docker", "Juice Shop", "Linux"],
    type: "Lab Exercise",
    size: "medium",
    caseStudy: {
      objective:
        "Build a safe, reproducible playground at home for practicing offensive security techniques without touching any real target.",
      architecture: [
        "Linux host with Docker running OWASP Juice Shop and other deliberately vulnerable containers",
        "Isolated Docker bridge network for targets so experiments never touch the LAN",
        "Kali VM as the attack platform, with snapshot-based rollback for clean exercises",
      ],
      methodology: [
        "Reproduced classic attack classes (injection, XSS, broken auth) against target containers, then reviewed the source to understand the fix",
        "Practiced both directions: attacked from Kali, then hardened the target in the container build and re-ran the same attacks to verify",
        "Kept a lab log — every exercise with commands, expected vs actual behavior, and lessons",
      ],
      outcome:
        "A permanent, always-available practice environment: spin up a target, attack it, revert, and try a different technique — the muscle memory behind all my assessment work.",
    },
  },
];

export type CaseStudyMedia = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type FeaturedCaseStudy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  meta: { label: string; value: string }[];
  overview: {
    heading: string;
    paragraphs: string[];
    pillars: { title: string; description: string }[];
  };
  physical: {
    id: string;
    heading: string;
    paragraphs: string[];
    primary: CaseStudyMedia;
    gallery: CaseStudyMedia[];
  };
  design: {
    heading: string;
    paragraphs: string[];
    primary: CaseStudyMedia;
    secondary: CaseStudyMedia;
    disclaimer: string;
  };
  application: {
    heading: string;
    paragraphs: string[];
    features: string[];
    primary: CaseStudyMedia;
    gallery: CaseStudyMedia[];
  };
  role: {
    heading: string;
    description: string;
    areas: { title: string; description: string }[];
  };
  takeaways: { title: string; description: string }[];
};

export const FEATURED_CASE_STUDIES: Record<string, FeaturedCaseStudy> = {
  "faculty-network-infrastructure": {
    eyebrow: "Graduation Project / Network Engineering",
    title: "Faculty Network Infrastructure",
    subtitle: "Campus Network Design, Physical Infrastructure & Network Management",
    description:
      "An academic engineering project focused on improving the Faculty of Science network at Benha University through practical infrastructure maintenance, structured network simulation, and a web-based network management application.",
    meta: [
      { label: "Role", value: "Team Leader" },
      { label: "Institution", value: "Faculty of Science, Benha University" },
      { label: "Focus", value: "Network Engineering & Management" },
      { label: "Tools", value: "Cisco Packet Tracer, PHP, MySQL" },
    ],
    overview: {
      heading: "Building a More Structured Campus Network",
      paragraphs: [
        "The existing network at the Faculty of Science suffered from disorganized cabling, frequent data collisions, service interruptions, and difficulty maintaining reliable connectivity between departments and labs.",
        "The graduation project approached these problems from three practical directions — the first two documented below with photos and topology evidence from the actual project.",
      ],
      pillars: [
        {
          title: "Practical Infrastructure Maintenance",
          description:
            "On-site work in the computer labs on the fourth and fifth floors and in the conference hall — cable connections, network-port repairs, and computer network configuration.",
        },
        {
          title: "Campus Design in Cisco Packet Tracer",
          description:
            "A structured campus network modeled and tested in simulation, exploring VLAN segmentation, EtherChannel, and inter-VLAN routing.",
        },
        {
          title: "Web-Based Network Management",
          description:
            "A PHP/MySQL web application to organize device and port information and display network-status statistics.",
        },
      ],
    },
    physical: {
      id: "evidence",
      heading: "Understanding the Existing Infrastructure",
      paragraphs: [
        "Before designing anything, the team documented and worked directly on the faculty's existing cabling plant — re-terminating cable connections, repairing damaged network ports, and configuring lab computers so they joined the network reliably.",
        "The report documents an HP E8206 core switch sitting in the main cabinet with a fiber-optic connection to a distant distribution switch, feeding the access switches distributed across departments and rooms.",
      ],
      primary: {
        src: "/projects/faculty-network-infrastructure/physical-network.png",
        width: 479,
        height: 674,
        alt: "Photograph of a network cabinet containing a patch cabinet shelf with a D-Link Ethernet switch and many labeled grey patch cables with white number tags.",
        caption: "Department network cabinet — patch panel and D-Link switch with numbered cable tags.",
      },
      gallery: [
        {
          src: "/projects/faculty-network-infrastructure/cabinet-247.png",
          width: 525,
          height: 234,
          alt: "Network cabinet shelf with a patch panel and a cabled switch, with a hand-written 247 label on the rack rail.",
        },
        {
          src: "/projects/faculty-network-infrastructure/cabinet-rack.png",
          width: 549,
          height: 454,
          alt: "Floor cabinet with three stacked patch panels, an RJ-45 switch module and a TG-NET router connected by grey and white cables.",
        },
        {
          src: "/projects/faculty-network-infrastructure/cabinet-unitek.png",
          width: 481,
          height: 382,
          alt: "UNITEK CAT.6 patch panel on the cabinet front with a full row of patched cables feeding a 24-port switch below.",
        },
      ],
    },
    design: {
      heading: "Campus Network Design & Simulation",
      paragraphs: [
        "The structured future of the network was modeled in Cisco Packet Tracer — a full campus topology converted into simulated devices covering the main campus buildings, a small campus segment, and a Health & Science building.",
        "The simulation explored VLAN segmentation (with per-department subnets visible on the topology), EtherChannel uplinks between switches, and inter-VLAN routing through multilayer switches and ISR routers — validated with simulated traffic between departments before any design decision was written up.",
      ],
      primary: {
        src: "/projects/faculty-network-infrastructure/campus-topology.webp",
        width: 1919,
        height: 1031,
        alt: "Cisco Packet Tracer screenshot showing the full simulated campus topology: Main Campus with Building A, B and C, each containing access switches, PCs, printers and servers; a Small Campus segment; ISR4331 routers connected over serial links with addressing labels.",
        caption: "Cisco Packet Tracer simulation — Main Campus (Buildings A/B/C with departmental VLANs) linked to the Small Campus segment.",
      },
      secondary: {
        src: "/projects/faculty-network-infrastructure/virtual-network-figure.png",
        width: 932,
        height: 426,
        alt: "Report figure showing a Packet Tracer virtual network diagram for the Faculty of Science: DMZ with domain and database server, core and distribution switches, and Chemistry, Physics and Computer Science segments with IP phones, PCs and laptops.",
        caption: "Report Figure 3.1 — virtual network design for the Faculty of Science (DMZ + departmental segments).",
      },
      disclaimer:
        "Note: this topology is the simulated design produced in Cisco Packet Tracer. It documents what the team designed and validated in simulation — not every configuration from the simulation was deployed to the existing physical network.",
    },
    application: {
      heading: "A Centralized Network Management Interface",
      paragraphs: [
        "Alongside the physical and simulated work, the team built a PHP/MySQL web application documented in the project report — a centralized place to organize device and port records and to present network-status statistics to whoever operates the network.",
      ],
      features: [
        "Dashboard displaying device and port statistics",
        "Online/offline device-status visualization",
        "Device records management — add, edit and delete with type, IP and state",
        "Port records management — description, speed, VLAN ID and MAC address per port",
        "User registration and login",
        "Network-map view of rooms and their switches",
        "Network scan interface listing connected IP/MAC pairs",
      ],
      primary: {
        src: "/projects/faculty-network-infrastructure/dashboard.png",
        width: 970,
        height: 455,
        alt: "Screenshot of the application dashboard in Arabic: network control panel with statistic cards for devices, networks, open ports and IP addresses, and a status-distribution doughnut chart.",
        caption: "Network control panel — inventory counters and a status-distribution chart.",
      },
      gallery: [
        {
          src: "/projects/faculty-network-infrastructure/device-management.png",
          width: 1003,
          height: 583,
          alt: "Screenshot of the devices list page: a table of routers, switches and PCs with IP address, device type, state and working/stopped action buttons.",
          caption: "Device records — type, IP and live state per device.",
        },
        {
          src: "/projects/faculty-network-infrastructure/port-management.png",
          width: 1075,
          height: 536,
          alt: "Screenshot of the ports management page: a table listing port number, state, device, description, speed, VLAN ID and MAC address with edit, delete and add buttons.",
          caption: "Port records — speed, VLAN ID and MAC per port.",
        },
        {
          src: "/projects/faculty-network-infrastructure/room-overview.png",
          width: 863,
          height: 679,
          alt: "Screenshot of the network-map view: a grid of room cards (Conference Hall, A201, A301, A414, A224, A500 and more), each naming its switch and IP address with a Telnet button, around a central network illustration.",
          caption: "Network map view — room switches with their IPs and Telnet access.",
        },
        {
          src: "/projects/faculty-network-infrastructure/network-scan.png",
          width: 1040,
          height: 484,
          alt: "Screenshot of the network scan page: a table pairing IP addresses with discovered MAC addresses for the selected network, with a rescan button.",
          caption: "Network scan — connected IP/MAC pairs for the selected network.",
        },
        {
          src: "/projects/faculty-network-infrastructure/login.png",
          width: 887,
          height: 382,
          alt: "Screenshot of the application login screen on a dark blue background with username and password fields.",
          caption: "Access control — each operator signs in before the panels open.",
        },
      ],
    },
    role: {
      heading: "My Role as Team Leader",
      description:
        "As Team Leader, I helped coordinate the project's technical direction and organize work across the network infrastructure, network-design, and management-application components.",
      areas: [
        {
          title: "Team Coordination",
          description: "Organizing the team's split across the three project workstreams and keeping milestones visible.",
        },
        {
          title: "Practical Networking Activities",
          description: "Coordinating the on-site maintenance work in the labs and the conference hall.",
        },
        {
          title: "Network-Design Approach",
          description: "Contributing to the topology, VLAN plan and addressing approach designed in Packet Tracer.",
        },
        {
          title: "Cross-Component Alignment",
          description: "Keeping the physical inventory, simulated design and the management application consistent with each other.",
        },
        {
          title: "Documentation & Presentation",
          description: "Pulling the physical, design and application work into the final project documentation and presentation.",
        },
      ],
    },
    takeaways: [
      {
        title: "Practical Network Infrastructure",
        description: "Working hands-on with cabling, patch panels and ports — seeing how physical discipline decides network reliability.",
      },
      {
        title: "VLANs & Network Simulation",
        description: "Translating a design discipline — segmentation, EtherChannel, inter-VLAN routing — into a testable Packet Tracer model.",
      },
      {
        title: "PHP/MySQL Application Development",
        description: "Building a complete management application from schema to UI with Chart.js statistics.",
      },
      {
        title: "Technical Coordination & Teamwork",
        description: "Leading a multi-track engineering project end-to-end — from rack rooms to routing tables to web panels.",
      },
    ],
  },
};

export type SoftwareCaseStudyArchitectureComponent = {
  index: string;
  title: string;
  description: string;
  status: "Visible in system screenshots" | "Documented in project description";
};

export type SoftwareCaseStudyFeature = {
  title: string;
  description: string;
  image?: CaseStudyMedia;
  placeholder?: string;
};

export type SoftwareCaseStudy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  meta: { label: string; value: string }[];
  objective: {
    heading: string;
    paragraphs: string[];
    note: string;
  };
  architecture: {
    heading: string;
    flow: SoftwareCaseStudyArchitectureComponent[];
  };
  features: {
    heading: string;
    cards: SoftwareCaseStudyFeature[];
  };
  contribution: {
    heading: string;
    areas: { title: string; description: string }[];
  };
  outcome: {
    heading: string;
    paragraphs: string[];
    futureWorkLabel: string;
    futureWork: string[];
  };
  lessons: { title: string; description: string }[];
};

export const SOFTWARE_CASE_STUDIES: Record<string, SoftwareCaseStudy> = {
  "network-management-system": {
    eyebrow: "Software Development / Network Management",
    title: "Network Management System",
    subtitle: "Network Device Inventory, Port Management & Network Discovery",
    description:
      "A web-based network management prototype designed to organize device inventory, manage network-port information, discover devices on a local network, and present network information through a centralized interface.",
    meta: [
      { label: "Category", value: "Software Development" },
      { label: "Stack", value: "PHP, MySQL, Python, Nmap" },
      { label: "Environment", value: "Apache / XAMPP" },
      { label: "Status", value: "Working prototype, as described in the project documentation" },
    ],
    objective: {
      heading: "From Manual Tracking to Centralized Management",
      paragraphs: [
        "The project aimed to provide a more structured alternative to spreadsheet-based network-device tracking. It combined a web interface for managing device and port records with a scanning component intended to identify devices on the local network.",
        "The system organizes network information and presents device status, IP-address details, port records, and a network-map interface in one place.",
      ],
      note:
        "The screenshots in this case study verify the device inventory, port records, scanning interface, dashboard statistics, and network-map view. Reconciling scan results automatically against the inventory — with last-seen timestamps and stale-device handling — is documented in the project description as a design goal, not confirmed behavior of the prototype.",
    },
    architecture: {
      heading: "How the System Fits Together",
      flow: [
        {
          index: "01",
          title: "Web Interface",
          description:
            "PHP pages provide the dashboard, device management, port management, scanning interface, and network-map view.",
          status: "Visible in system screenshots",
        },
        {
          index: "02",
          title: "Application Backend",
          description:
            "PHP handles requests and application logic within an Apache/XAMPP environment.",
          status: "Documented in project description",
        },
        {
          index: "03",
          title: "MySQL Database",
          description:
            "Stores device records, port information, and user-account data. The documented schema includes devices, ports, and users.",
          status: "Documented in project description",
        },
        {
          index: "04",
          title: "Python Scanning Component",
          description:
            "The documented scanning implementation invokes Python from PHP and uses Nmap or ARP information to discover devices, extracting details such as IP and MAC addresses.",
          status: "Documented in project description",
        },
        {
          index: "05",
          title: "Results & Visualization",
          description:
            "Scanning results are presented in the interface, while stored inventory data supports device and port management and dashboard statistics.",
          status: "Visible in system screenshots",
        },
      ],
    },
    features: {
      heading: "Core System Features",
      cards: [
        {
          title: "Device Inventory",
          description:
            "Organizes network-device records and their attributes, including device name, type, IP address, and status.",
          image: {
            src: "/projects/network-management-system/device-management.png",
            width: 1003,
            height: 583,
            alt: "Screenshot of the device management page: a table of devices with names, types, IP addresses and active/inactive status, with edit and delete actions.",
            caption: "Device records — name, type, IP and status.",
          },
        },
        {
          title: "Port Management",
          description:
            "Maintains port records associated with network devices, including port number, status, speed, VLAN information, and MAC address where available.",
          image: {
            src: "/projects/network-management-system/port-management.png",
            width: 1075,
            height: 536,
            alt: "Screenshot of the port management page: a table listing port number, state, device, description, speed, VLAN ID and MAC address with add, edit and delete controls.",
            caption: "Port records — number, state, speed, VLAN ID and MAC.",
          },
        },
        {
          title: "Network Discovery",
          description:
            "The scanning component uses Python with Nmap or ARP information to identify devices and present discovery results, including available IP and MAC address details.",
          image: {
            src: "/projects/network-management-system/network-scan.png",
            width: 1040,
            height: 484,
            alt: "Screenshot of the network scanning page: a table pairing discovered IP addresses with MAC addresses for the selected network, with a rescan button.",
            caption: "Scan interface — discovered IP/MAC pairs on the local network.",
          },
        },
        {
          title: "Dashboard & Status Visualization",
          description:
            "Provides a centralized view of device statistics, active and inactive device status, and port-related information.",
          image: {
            src: "/projects/network-management-system/dashboard.png",
            width: 970,
            height: 455,
            alt: "Screenshot of the application dashboard: statistic cards for devices, networks, open ports and IP addresses, alongside a status-distribution chart.",
            caption: "Dashboard — inventory counters and status distribution.",
          },
        },
        {
          title: "Network Map",
          description:
            "Provides a location-oriented view of network areas and associated switch information, supported by a network diagram.",
          image: {
            src: "/projects/network-management-system/network-map.png",
            width: 863,
            height: 679,
            alt: "Screenshot of the network map view: a grid of room cards (Conference Hall, A201, A301, A414 and more), each listing its switch and IP address with a Telnet button, arranged around a network diagram illustration.",
            caption: "Network map — rooms, switches and the supporting diagram.",
          },
        },
        {
          title: "Database Design",
          description:
            "Organizes device, port, and user information through a relational MySQL schema.",
          placeholder: "Database ERD diagram — schema screenshot to be added",
        },
      ],
    },
    contribution: {
      heading: "Designing the Management Workflow",
      areas: [
        {
          title: "Data Modeling",
          description:
            "Organize device and port information so that port records can be associated with their corresponding devices.",
        },
        {
          title: "Discovery Integration",
          description:
            "Connect the web application to a Python-based scanning script and process the available discovery output.",
        },
        {
          title: "Inventory Management",
          description:
            "Provide interfaces for viewing and maintaining device and port records.",
        },
        {
          title: "Application Interface",
          description:
            "Use PHP templates and web technologies to present network information through a centralized dashboard.",
        },
      ],
    },
    outcome: {
      heading: "A Foundation for Network Visibility",
      paragraphs: [
        "The project demonstrates how a web application, a relational database, and network-discovery tooling can be combined to organize network information and provide a centralized management interface.",
        "The system provides a foundation for extending device inventory and network visualization capabilities.",
      ],
      futureWorkLabel: "Future work — not implemented in the documented prototype",
      futureWork: [
        "Fully connected topology graph visualization of the network",
        "Scheduled background discovery runs",
        "Automatic reconciliation of scanned devices with the inventory (last-seen and stale-device states)",
      ],
    },
    lessons: [
      {
        title: "Relational Data Modeling",
        description:
          "Designing devices and ports as related tables — and why a port record is what ties an upstream device to the switch it plugs into.",
      },
      {
        title: "PHP and MySQL Integration",
        description:
          "Building a working PHP/MySQL application inside Apache/XAMPP, from schema design to server-rendered templates.",
      },
      {
        title: "Python-Based Network Discovery",
        description:
          "Using Python with Nmap/ARP information to turn raw network probing into readable IP and MAC results.",
      },
      {
        title: "Network Information Visualization",
        description:
          "Turning rows of inventory data into dashboard statistics and a location-oriented map view operators can scan at a glance.",
      },
    ],
  },
};

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
