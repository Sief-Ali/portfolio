export const profile = {
  name: "Sief Ali",
  tagline: "Embedded Systems & Full-Stack Developer",
  location: "Egypt",
  avatarUrl: "/images/avatar.png",
  githubUsername: "Sief-Ali",
  githubUrl: "https://github.com/Sief-Ali",
  linkedInUrl: "https://www.linkedin.com/in/sief-ali-480968254/",
  headline: "From microcontrollers to full-stack products.",
  subheadline:
    "I'm Sief Ali, a student developer working across embedded systems, backend architecture, and web applications. I enjoy building systems from firmware-level logic to complete software products.",
  about: {
    lead:
      "I am an ambitious student developer driven by curiosity about how computing systems operate at every layer. Rather than specializing exclusively in high-level web interfaces or isolated low-level firmware, I build across both worlds.",
    paragraphs: [
      "My journey spans writing low-level C firmware for 8-bit and 32-bit microcontrollers (ATmega32, ESP32), designing layered MCAL and HAL architectures with FreeRTOS, all the way to engineering typed TypeScript backends, realtime communication pipelines, and full-stack web applications with Next.js.",
      "In embedded systems, I focus on clean abstraction boundaries, deterministic timing, peripheral interfacing (ADC, Timers, UART, Interrupts), and state machines. In software and web engineering, I build robust REST/WebSocket APIs, relational databases, CLI adapters, and intuitive user interfaces.",
      "As a student participating in Egypt's top technology initiatives like DECI (Digital Egypt Cubs Initiative), I continuously study core engineering principles, build real projects, and hold myself to high software craft standards.",
    ],
  },
  focusAreas: [
    {
      id: "embedded",
      title: "Embedded Systems & Robotics",
      description:
        "Microcontroller programming, layered MCAL/HAL drivers, real-time operating systems (FreeRTOS), sensor interfacing, and hardware simulation.",
      technologies: ["Embedded C", "ATmega32", "ESP32", "FreeRTOS", "MCAL/HAL", "SimulIDE", "CMake"],
    },
    {
      id: "backend",
      title: "Backend & Systems Architecture",
      description:
        "Typed REST & WebSocket APIs, event-driven architectures, relational database schema design, CLI tool wrappers, and systemd service daemons.",
      technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Socket.IO", "CLI Integration"],
    },
    {
      id: "fullstack",
      title: "Full-Stack Web Applications",
      description:
        "Accessible, responsive web applications built with Next.js App Router, React, and Tailwind CSS, emphasizing modular architecture and clean state management.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST/GraphQL", "RTL/i18n"],
    },
  ],
};
