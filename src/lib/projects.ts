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
    phpMyAdmin?: {
      heading: string;
      items: SoftwareCaseStudyFeature[];
    };
    moreViews?: {
      heading: string;
      items: SoftwareCaseStudyFeature[];
    };
  };
  contribution: {
    heading: string;
    intro?: string;
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
      { label: "Team", value: "Graduation project — built by the full project team" },
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
          status: "Visible in system screenshots",
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
            "Organizes device, port, and user information through a relational MySQL schema — captured from the phpMyAdmin interface of the documented database. A device connects to many ports; users hold accounts alongside the inventory tables.",
          image: {
            src: "/projects/network-management-system/database-erd.png",
            width: 1085,
            height: 489,
            alt: "Database schema diagram showing three related tables: devices (id, name, ip_address, status, type), ports (id, port_number, status, device_id foreign key, description, last_updated, speed, vlan_id, mac_address) and users (id, username, email, password, role, created_at), with a link from ports.device_id to devices.id.",
            caption: "Schema diagram — devices ↔ ports (via device_id) ↔ users.",
          },
        },
      ],
      phpMyAdmin: {
        heading: "The Schema in phpMyAdmin — Tables & Accounts",
        items: [
          {
            title: "Ports Table",
            description: "Port rows with number, status, device link, description, speed, VLAN ID and MAC address.",
            image: {
              src: "/projects/network-management-system/db-ports-table.png",
              width: 1081,
              height: 527,
              alt: "Screenshot of the phpMyAdmin ports table in the networkpro_db database: columns port_number, status, device_id, description, speed, vlan_id and mac_address with several active and inactive port rows.",
              caption: "Ports table — active and inactive port records in the documented schema.",
            },
          },
          {
            title: "Users Table",
            description: "Team accounts with hashed passwords — username, email and password values are blurred for privacy.",
            image: {
              src: "/projects/network-management-system/db-users-table.png",
              width: 1143,
              height: 543,
              alt: "Screenshot of the phpMyAdmin users table in the networkpro_db database: columns id, username, email, password, role and created_at, with the personal data values blurred for privacy while the role and account-creation date columns remain visible.",
              caption: "Users table — eight team accounts with hashed passwords; personal values redacted.",
            },
          },
        ],
      },
      moreViews: {
        heading: "Working With the Records — Forms & Accounts",
        items: [
          {
            title: "Adding a New Device",
            description: "Create form capturing the new device's name, type, IP address, and starting status.",
            image: {
              src: "/projects/network-management-system/device-add.png",
              width: 634,
              height: 384,
              alt: "Screenshot of the add-device page: a form titled Enter the new device data with fields for device name, device type, IP address and status.",
            },
          },
          {
            title: "Editing a Device",
            description: "Edit form for updating an existing device's name, IP address and status in place.",
            image: {
              src: "/projects/network-management-system/device-edit.png",
              width: 709,
              height: 357,
              alt: "Screenshot of the edit-device page: a form with device name, device type Switch, IP address 192.168.1.2 and a status selector.",
            },
          },
          {
            title: "Adding a Port",
            description: "Create form for a new port record — port number, state, device, speed, VLAN ID and MAC address.",
            image: {
              src: "/projects/network-management-system/port-add.png",
              width: 698,
              height: 327,
              alt: "Screenshot of the add-port form: empty fields for port number, state, device, description, speed, VLAN ID and MAC address with a submit button.",
            },
          },
          {
            title: "Editing a Port",
            description: "Edit form with prefilled port details — description, speed, VLAN ID and MAC address.",
            image: {
              src: "/projects/network-management-system/port-edit.png",
              width: 701,
              height: 344,
              alt: "Screenshot of the edit-port form prefilled for port 1 of switch-core01: description core switch, speed 1Gbps, VLAN ID 10 and MAC address AA:BB:CC:DD:EE:01.",
            },
          },
          {
            title: "Personal Profile",
            description: "Each operator's account page — name, email, role and join date.",
            image: {
              src: "/projects/network-management-system/profile.png",
              width: 658,
              height: 361,
              alt: "Screenshot of the personal profile page: account fields for username roaa, email roaa@email.com, role user and creation date 2025/04/17, with delete and save buttons.",
            },
          },
          {
            title: "Editing the Profile",
            description: "Profile form for updating the operator's account details.",
            image: {
              src: "/projects/network-management-system/profile-edit.png",
              width: 664,
              height: 277,
              alt: "Screenshot of the profile editing page: a form with username and email fields and save and cancel buttons.",
            },
          },
        ],
      },
    },
    contribution: {
      heading: "Designing the Management Workflow",
      intro:
        "The system was built as a team graduation project — a shared effort across its components. The areas below describe the documented implementation workflow of that team project rather than individually claimed responsibilities.",
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

export type AssessmentCaseStudy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  meta: { label: string; value: string }[];
  problem: {
    heading: string;
    quote: string;
  };
  environment: {
    heading: string;
    nodes: { title: string; description: string }[];
  };
  methodology: {
    heading: string;
    areas: { title: string; description: string }[];
    note: string;
  };
  outcome: {
    heading: string;
    quote: string;
    paragraph: string;
  };
  takeaways: { title: string; description: string }[];
  evidence: {
    heading: string;
    note: string;
    primary: CaseStudyMedia | null;
    gallery: CaseStudyMedia[];
  };
};

export const ASSESSMENT_CASE_STUDIES: Record<string, AssessmentCaseStudy> = {
  "web-app-security-assessment": {
    eyebrow: "Security Assessment / Demonstration",
    title: "Web Application Security Assessment",
    subtitle: "Penetration testing and vulnerability assessment focused on OWASP risks.",
    description:
      "A controlled-environment demonstration of a structured web application assessment workflow — from reconnaissance to validation and reporting — organized around OWASP security principles.",
    technologies: ["OWASP", "Burp Suite", "Kali Linux", "Nmap", "Gobuster", "sqlmap", "curl"],
    meta: [
      { label: "Category", value: "Security Assessment" },
      { label: "Status", value: "Demonstration" },
      { label: "Environment", value: "Isolated local security lab" },
      {
        label: "Focus",
        value: "Web application penetration testing and vulnerability assessment",
      },
    ],
    problem: {
      heading: "Objective",
      quote:
        "Demonstrate a structured web application security assessment workflow in a controlled lab environment. The objective is to identify potential security weaknesses, validate findings safely, understand their impact, and document actionable remediation recommendations based on OWASP security principles.",
    },
    environment: {
      heading: "Architecture & Environment",
      nodes: [
        {
          title: "Testing Environment",
          description:
            "A deliberately vulnerable web application running in an isolated local lab, such as OWASP Juice Shop.",
        },
        {
          title: "Security Testing Workstation",
          description:
            "Kali Linux provides the testing environment, with Burp Suite used to intercept, inspect, and modify HTTP requests during authorized testing.",
        },
        {
          title: "Reconnaissance & Discovery Tools",
          description:
            "Nmap for authorized service discovery where applicable, Gobuster for directory and endpoint discovery, curl for HTTP request testing, and browser developer tools for examining client-side behavior. sqlmap may be used to investigate suspected SQL injection in the controlled lab.",
        },
        {
          title: "Evidence & Documentation",
          description:
            "Record relevant requests and responses, document reproducible observations, assess potential impact, and prepare remediation recommendations.",
        },
      ],
    },
    methodology: {
      heading: "Contribution & Methodology",
      areas: [
        {
          title: "Reconnaissance",
          description:
            "Map application routes, identify technologies, understand authentication flows, and establish the application's observable attack surface.",
        },
        {
          title: "Application Mapping",
          description:
            "Trace how user-controlled input moves through requests, application endpoints, and client-side rendering. Identify trust boundaries and areas that need further testing.",
        },
        {
          title: "Vulnerability Assessment",
          description:
            "Evaluate relevant OWASP risk categories, including injection, broken access control, authentication weaknesses, and security misconfiguration. Use manual testing first and automated tools where appropriate.",
        },
        {
          title: "Validation & Reporting",
          description:
            "Validate suspected issues using minimal, controlled proof-of-concept requests. Document the affected component, reproduction steps, evidence, potential impact, and recommended remediation.",
        },
      ],
      note: "Findings are documented only where genuine evidence exists. This page describes a controlled demonstration and assessment workflow — not a professional client engagement.",
    },
    outcome: {
      heading: "Outcome",
      quote:
        "A repeatable web application security assessment workflow for a controlled testing environment, supported by structured evidence collection and a report format covering findings, impact, severity rationale, and remediation.",
      paragraph:
        "The demonstration establishes a foundation for conducting more systematic web application security assessments and communicating technical findings clearly.",
    },
    takeaways: [
      {
        title: "HTTP & Request Analysis",
        description: "Understanding requests, responses, headers, parameters, cookies, and sessions.",
      },
      {
        title: "OWASP-Based Testing",
        description: "Using recognized web application security principles to organize assessment activities.",
      },
      {
        title: "Manual & Automated Testing",
        description: "Combining hands-on validation with carefully scoped security tools.",
      },
      {
        title: "Technical Reporting",
        description: "Turning observations into reproducible findings and practical remediation advice.",
      },
    ],
    evidence: {
      heading: "Project Evidence",
      note: "Every image below is a genuine screenshot from the lab. The Burp Suite and Kali Linux captures come from authorized testing sessions in the isolated lab, and the PortSwigger Web Security Labs advisory shows what a documented finding looks like in practice — severity, issue detail, and remediation. No claims are made beyond what the screenshots show.",
      primary: {
        src: "/projects/web-app-security-assessment/juice-shop.jpg",
        width: 2778,
        height: 1590,
        alt: "Screenshot of the OWASP Juice Shop application running in the lab: an e-commerce storefront with an All Products heading and product cards for juices and a fruit press.",
        caption: "The isolated lab target — OWASP Juice Shop, a deliberately vulnerable web application.",
      },
      gallery: [
        {
          src: "/projects/web-app-security-assessment/kali-workstation.jpg",
          width: 1080,
          height: 810,
          alt: "Screenshot of a Kali Linux desktop running as root with a file manager, terminal windows, a neofetch system readout and system-resource monitors.",
          caption: "The testing workstation — Kali Linux hosting the assessment tooling.",
        },
        {
          src: "/projects/web-app-security-assessment/burp-repeater.jpg",
          width: 955,
          height: 801,
          alt: "Screenshot of Burp Suite's Repeater tab: an intercepted GET request for a product page alongside the raw HTTP response with server headers and HTML.",
          caption: "Burp Suite in action — intercepting, inspecting, and replaying requests during authorized testing.",
        },
        {
          src: "/projects/web-app-security-assessment/xss-advisory.jpg",
          width: 860,
          height: 557,
          alt: "Screenshot of a PortSwigger Web Security Labs advisory for reflected cross-site scripting: severity High/Certain, issue detail explaining the injection, and issue remediation guidance.",
          caption:
            "A documented finding from PortSwigger's Web Security Labs — severity, issue detail, and remediation as an assessment write-up.",
        },
      ],
    },
  },
};

export type LabCaseStudy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  meta: { label: string; value: string }[];
  objective: {
    heading: string;
    lead: string;
    quote: string;
  };
  architecture: {
    heading: string;
    nodes: { title: string; description: string }[];
    flow: string[];
    flowNote: string;
  };
  methodology: {
    heading: string;
    activities: { title: string; description: string }[];
  };
  outcome: {
    heading: string;
    quote: string;
    paragraph: string;
  };
  evidence: {
    heading: string;
    note: string;
    primary: CaseStudyMedia | null;
    gallery: CaseStudyMedia[];
  };
};

export const LAB_CASE_STUDIES: Record<string, LabCaseStudy> = {
  "cybersecurity-home-lab": {
    eyebrow: "Security Research / Lab Exercise",
    title: "Cybersecurity Home Lab",
    subtitle:
      "A containerized cybersecurity environment for practicing web application security, offensive security techniques, and network security experiments in a controlled lab.",
    description:
      "The environment behind my day-to-day security practice — deliberately vulnerable applications on demand, a dedicated lab network, and a Kali workstation with clean snapshots between exercises.",
    technologies: ["Docker", "OWASP Juice Shop", "Linux", "Kali Linux"],
    meta: [
      { label: "Category", value: "Security Research" },
      { label: "Status", value: "Lab Exercise" },
      { label: "Technologies", value: "Docker, OWASP Juice Shop, Linux, Kali Linux" },
    ],
    objective: {
      heading: "Building a Controlled Security Testing Environment",
      lead: "Designed and configured a reproducible home lab to practice offensive security techniques against deliberately vulnerable applications without targeting real-world systems.",
      quote:
        "The objective was to create an environment where security exercises could be performed, repeated, documented, and reviewed safely.",
    },
    architecture: {
      heading: "A Containerized Testing Environment",
      nodes: [
        {
          title: "Linux Host & Docker",
          description:
            "Linux host running Docker containers, including OWASP Juice Shop and other deliberately vulnerable applications.",
        },
        {
          title: "Isolated Lab Network",
          description:
            "A dedicated Docker bridge network for lab targets, separating experimental services from the normal network environment.",
        },
        {
          title: "Kali Linux Testing Platform",
          description:
            "Kali Linux virtual machine used as the testing platform, with VM snapshots available to restore a clean state between exercises.",
        },
      ],
      flow: ["Kali Linux VM", "Isolated Docker Network", "Vulnerable Applications"],
      flowNote:
        "The Docker bridge network separates the lab target containers from the host's normal network environment. The Kali VM's own network placement depends on the lab configuration, so it is not presented here as automatically isolated from the LAN.",
    },
    methodology: {
      heading: "Practical Security Exercises",
      activities: [
        {
          title: "Vulnerability Testing",
          description:
            "Practiced common web application vulnerability classes, including injection, Cross-Site Scripting (XSS), and authentication weaknesses, against deliberately vulnerable lab applications.",
        },
        {
          title: "Validation & Remediation",
          description:
            "Reviewed application behavior and relevant source code to understand the underlying vulnerabilities. Practiced applying security improvements and repeating tests to evaluate whether the changes addressed the original issue.",
        },
        {
          title: "Documentation & Repeatability",
          description:
            "Maintained a lab journal documenting exercise objectives, commands, expected behavior, observed results, and technical lessons learned.",
        },
      ],
    },
    outcome: {
      heading: "A Reusable Cybersecurity Practice Environment",
      quote:
        "Established a repeatable environment for launching vulnerable applications, conducting controlled security exercises, restoring clean snapshots, and testing different techniques.",
      paragraph:
        "The lab provides a practical foundation for developing web application security assessment skills and understanding vulnerabilities from both offensive and defensive perspectives.",
    },
    evidence: {
      heading: "Visual Evidence",
      note: "The screenshots below are genuine captures from this lab. A Docker container listing and pages from the lab journal are described in the Architecture and Methodology sections rather than shown — no illustrative stand-ins are presented as lab evidence.",
      primary: {
        src: "/projects/web-app-security-assessment/juice-shop.jpg",
        width: 2778,
        height: 1590,
        alt: "Screenshot of OWASP Juice Shop running in the lab browser: an e-commerce storefront with an All Products heading and product cards for juices and a fruit press.",
        caption:
          "OWASP Juice Shop running in the lab browser — one of the deliberately vulnerable applications on the Docker network.",
      },
      gallery: [
        {
          src: "/projects/web-app-security-assessment/kali-workstation.jpg",
          width: 1080,
          height: 810,
          alt: "Screenshot of the Kali Linux testing platform: a desktop with a file manager, terminal windows, a neofetch system readout and system-resource monitors.",
          caption: "The Kali Linux testing platform — terminals ready for exercises, with snapshots to restore a clean state.",
        },
        {
          src: "/projects/web-app-security-assessment/burp-repeater.jpg",
          width: 955,
          height: 801,
          alt: "Screenshot of Burp Suite's Repeater tab showing HTTP request and response analysis for a lab application.",
          caption: "Burp Suite request and response analysis during a lab exercise.",
        },
      ],
    },
  },
};

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
