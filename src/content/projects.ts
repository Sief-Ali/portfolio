import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "spst",
    title: "SPST — Solar Panel Sun Tracker",
    repoName: "spst",
    tagline: "FreeRTOS-driven dual-axis sun tracking firmware on ATmega32 with sensor fault protection",
    description:
      "A complete embedded systems project developed for DECI Level 5 simulating an automated solar panel tracker using an ATmega32 microcontroller, layered MCAL/HAL drivers, and FreeRTOS multitasking.",
    category: "Embedded Systems & Robotics",
    githubUrl: "https://github.com/Sief-Ali/spst",
    featured: true,
    pinned: true,
    order: 1,
    status: "Completed",
    technologies: [
      "Embedded C",
      "FreeRTOS",
      "ATmega32",
      "SimulIDE",
      "CMake",
      "AVR-GCC",
      "MCAL/HAL",
      "UART",
    ],
    highlights: [
      "Layered MCAL (Microcontroller Abstraction Layer) and HAL (Hardware Abstraction Layer) architecture",
      "Differential dual-LDR light tracking with hysteresis deadbands to eliminate servo jitter",
      "Autonomous night parking: parks the solar panel at east-facing baseline upon prolonged darkness",
      "Cloud detection and hold behavior to avoid erratic hunting under overcast skies",
      "Sensor fault diagnosis detecting disconnected or shorted LDRs with safe fallback states",
      "UART diagnostic telemetry streaming real-time tracking states at 9600 baud (8N1)",
    ],
    hardware: {
      mcu: "ATmega32 (8-bit AVR RISC)",
      peripherals: [
        "ADC (10-bit differential sampling for LDRs)",
        "Timer1 (16-bit Fast PWM for Servo control)",
        "USART (System telemetry and state logging)",
        "GPIO (Status LEDs and limit feedback)",
      ],
      simulation: "SimulIDE v1.1 circuit with simulated LDR voltage dividers and servo response",
      architectureType: "Layered Driver Stack + FreeRTOS Preemptive Tasks",
    },
    circuitImage: "/images/projects/spst-circuit.png",
    detailedOverview:
      "Solar Panel Sun Tracker (SPST) is an embedded firmware application created for the Digital Egypt Cubs Initiative (DECI) Level 5. The project simulates an automated solar panel tracker on an ATmega32 microcontroller. Rather than simply driving a servo based on raw sensor thresholds, SPST is engineered with a strict layered architecture: separating low-level register manipulation (MCAL) from device peripherals (HAL) and high-level tracking logic (App).\n\nThe firmware uses FreeRTOS tasks to concurrently handle sensor sampling, position calculation, fault detection, and telemetry without blocking the microcontroller or missing real-time deadlines.",
    engineeringDecisions: [
      {
        title: "Layered MCAL and HAL Abstraction",
        rationale:
          "Register writes to ADMUX, ADCSRA, and TCCR1A are encapsulated inside MCAL drivers. High-level tracking logic operates purely on abstract sensor lux readings and degree angles, allowing the firmware to be ported or simulated without changing business logic.",
      },
      {
        title: "Hysteresis Deadbands & Cloud Hold Logic",
        rationale:
          "Small illumination fluctuations often cause continuous servo jitter, wearing out mechanical actuators. SPST enforces a configurable ADC deadband and detects cloud cover (diffuse light where both LDRs drop below a threshold), freezing servo orientation until direct sunlight returns.",
      },
      {
        title: "Fault Tolerant State Machine",
        rationale:
          "If either LDR produces an out-of-bounds voltage (indicating a broken wire or shorted sensor), the system triggers a fault state, illuminates a diagnostic LED, logs the anomaly over UART, and locks the panel in a safe position.",
      },
    ],
  },
  {
    slug: "madarek",
    title: "Madarek — مدارِك",
    repoName: "student-management-system",
    tagline: "A comprehensive student and educational center management platform designed for teachers",
    description:
      "A modern Arabic desktop and web student management software built for private teachers and educational tutoring centers. Features complete student profiles, class attendance, examination grading, and an intuitive review workflow.",
    category: "Product Engineering",
    githubUrl: "https://github.com/Sief-Ali",
    featured: true,
    pinned: false,
    order: 2,
    status: "In Active Development",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tauri",
      "Tailwind CSS",
      "RTL Arabic Typography",
    ],
    highlights: [
      "Native Right-to-Left (RTL) Arabic user interface tailored for educators and centers",
      "Comprehensive student profiles, phone contacts, guardian info, and academic history",
      "Educational center, grade stage, and group management with historical placement retention",
      "Class session recording with fast attendance logging (Present, Absent, Excused)",
      "Examination management with custom grading scales, score editing, and result tracking",
      "Notification review workflow allowing operators to audit student/parent updates before sending",
    ],
    image: "/madarek/1.png",
    detailedOverview:
      "Madarek (مدارِك) addresses a widespread everyday problem for teachers and educational centers: managing student cohorts, daily attendance, exam scores, and parent communication without chaotic spreadsheets or paper notebooks.\n\nMadarek is designed with an intuitive, RTL-first Arabic interface that is comfortable for educators, offering structured group management, attendance tracking, and examination analysis.",
    engineeringDecisions: [
      {
        title: "RTL-First Arabic Design System",
        rationale:
          "Designed from the ground up for Arabic typography, natural reading eye-flow, aligned form inputs, and culturally intuitive icons.",
      },
      {
        title: "Preserving Historical Group Assignments",
        rationale:
          "When a group finishes or a student transfers, past attendance records and exam marks remain intact without breaking past logs.",
      },
    ],
  },
  {
    slug: "taskwarrior-web",
    title: "Taskwarrior Web",
    repoName: "taskwarrior-web",
    tagline: "Modern web user interface for the Taskwarrior CLI task management system",
    description:
      "A responsive, keyboard-friendly web interface for Taskwarrior built with Next.js and TypeScript, integrating directly with the taskwarrior-api backend.",
    category: "Web Applications",
    githubUrl: "https://github.com/Sief-Ali/taskwarrior-web",
    featured: true,
    pinned: true,
    order: 3,
    status: "Completed",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "REST API", "Taskwarrior"],
    highlights: [
      "Fluid web interface featuring keyboard shortcuts, tag filtering, priority management, and responsive layouts",
      "Seamless communication with the taskwarrior-api backend service",
      "Real-time task synchronization with local Taskwarrior CLI storage",
    ],
    detailedOverview:
      "Taskwarrior Web provides a fluid, accessible interface for power users who love Taskwarrior CLI but also want a visual, responsive web dashboard across devices.",
    engineeringDecisions: [
      {
        title: "Clean Decoupling from the CLI",
        rationale:
          "The frontend communicates strictly with a dedicated REST API service rather than executing system commands directly in browser contexts.",
      },
    ],
  },
  {
    slug: "taskwarrior-api",
    title: "Taskwarrior API",
    repoName: "taskwarrior-api",
    tagline: "Express & TypeScript REST API service for Taskwarrior task management",
    description:
      "A lightweight, typed backend HTTP service providing structured RESTful endpoints over local Taskwarrior data for web clients and automation workflows.",
    category: "Backend & Systems",
    githubUrl: "https://github.com/Sief-Ali/taskwarrior-api",
    featured: false,
    pinned: false,
    order: 4,
    status: "Completed",
    technologies: ["TypeScript", "Node.js", "Express", "REST API", "Taskwarrior"],
    highlights: [
      "RESTful CRUD routes for task retrieval, filtering, creation, and status transitions",
      "Typed request validation ensuring safe task parameter inputs",
      "Designed as a backend service for Taskwarrior Web",
    ],
    detailedOverview:
      "Taskwarrior API wraps the local task data and CLI operations into standardized JSON endpoints, allowing any HTTP client to interface with Taskwarrior.",
    engineeringDecisions: [
      {
        title: "Typed Route Architecture",
        rationale:
          "Ensures all filter parameters, project tags, and due dates adhere to strict TypeScript definitions before touching the adapter layer.",
      },
    ],
  },
  {
    slug: "taskwarrior-adapter",
    title: "Taskwarrior Adapter (npm package)",
    repoName: "taskwarrior-adapter",
    tagline: "Typed Node.js adapter for Taskwarrior CLI — published on npm",
    description:
      "A small, independently published npm package providing a typed programmatic API over the Taskwarrior CLI with safe subprocess execution and JSON stream parsing.",
    category: "Backend & Systems",
    githubUrl: "https://github.com/Sief-Ali/taskwarrior-adapter",
    npmUrl: "https://www.npmjs.com/package/taskwarrior-adapter",
    featured: true,
    pinned: false,
    order: 5,
    status: "Completed",
    technologies: ["TypeScript", "Node.js", "npm Package", "Child Process", "Taskwarrior CLI"],
    highlights: [
      "Published as a reusable open-source library on npm (`taskwarrior-adapter`)",
      "Safe parameterized command invocation preventing arbitrary shell injection",
      "Exports complete TypeScript interfaces for Taskwarrior items, filters, and reports",
    ],
    detailedOverview:
      "Instead of writing messy shell scripts to query Taskwarrior, `taskwarrior-adapter` was built and published as a standalone npm library that any developer can import.",
    engineeringDecisions: [
      {
        title: "Standalone Open Source Packaging",
        rationale:
          "Published independently to npm so that Discord bots, CLI tools, and web dashboards can reuse the same battle-tested execution layer.",
      },
    ],
  },
  {
    slug: "metro-express",
    title: "MetroExpress — Ticket Machine",
    repoName: "metro-express",
    tagline: "Finite State Machine railway ticketing firmware for ATmega32 with analog quantity selection",
    description:
      "A modular embedded ticket machine simulation running on an ATmega32 microcontroller in SimulIDE, implementing an event-driven Finite State Machine (FSM), ADC ticket selection, and external interrupt safety handling.",
    category: "Embedded Systems & Robotics",
    githubUrl: "https://github.com/Sief-Ali/metro-express",
    featured: true,
    pinned: true,
    order: 6,
    status: "Completed",
    technologies: [
      "Embedded C",
      "ATmega32",
      "SimulIDE",
      "FSM",
      "ADC",
      "Timers & Interrupts",
      "CMake",
      "UART",
    ],
    highlights: [
      "Rigorous Finite State Machine (Idle, Destination Selection, Quantity Input, Payment, Dispense, Cancel)",
      "Continuous analog sampling using ADC potentiometer to dynamically select ticket counts",
      "Hardware timer-based inactivity timeout returning the terminal to Idle if abandoned",
      "External interrupt (INT0) for immediate emergency cancellation and state rollback",
      "UART audit logger recording transactions, state transitions, and cancellation events",
    ],
    hardware: {
      mcu: "ATmega32",
      peripherals: [
        "ADC (Channel 0 for potentiometer ticket count selection)",
        "Timer0 (Periodic tick for inactivity timeout countdown)",
        "INT0 (External falling-edge interrupt for emergency cancel button)",
        "USART (Maintenance and audit trail logging at 9600 baud)",
        "PORTC/PORTD (LED indicators for destination line and dispensing status)",
      ],
      simulation: "SimulIDE circuit with push buttons, LED status array, potentiometer, and serial monitor",
      architectureType: "Layered Architecture (App, Controller, Passenger, Logger, HAL, MCAL)",
    },
    circuitImage: "/images/projects/metro-express-circuit.png",
    detailedOverview:
      "MetroExpress simulates a self-service railway ticket machine. Developed for DECI Level 5, the firmware emphasizes reliable user interaction through embedded peripherals. The software is organized into distinct sub-modules (App, Controller, Passenger Interface, Logger) built on top of MCAL register drivers.\n\nIt features deterministic state management via an FSM, ensuring that passenger actions (destination button presses, quantity adjustment, payment confirmation, or cancellations) only execute when valid for the current state.",
    engineeringDecisions: [
      {
        title: "Deterministic Finite State Machine (FSM)",
        rationale:
          "To avoid race conditions or invalid transitions, all user inputs are evaluated through an explicit transition matrix.",
      },
      {
        title: "Hardware Interrupt for Emergency Actions",
        rationale:
          "The cancel operation is wired to the ATmega32 INT0 pin, halting transaction processing immediately regardless of current operations.",
      },
    ],
  },
  {
    slug: "sensor-robot",
    title: "Sensor Robot",
    repoName: "sensor-robot",
    tagline: "Autonomous obstacle avoidance and orientation sensing robot built on ESP32 & MicroPython",
    description:
      "An autonomous mobile robot using an ESP32 microcontroller programmed in MicroPython. Integrates ultrasonic distance measurement, dual stepper motors, tilt sensing via accelerometer, and OLED status visualization.",
    category: "Embedded Systems & Robotics",
    githubUrl: "https://github.com/Sief-Ali/sensor-robot",
    featured: true,
    pinned: true,
    order: 7,
    status: "Completed",
    technologies: [
      "MicroPython",
      "ESP32",
      "Robotics",
      "I2C / SPI",
      "Sensors & Actuators",
      "Stepper Motors",
    ],
    highlights: [
      "Autonomous obstacle detection and clearance calculation via ultrasonic sonar sensor",
      "Precision dual stepper motor trajectory control for exact wheel rotation and angles",
      "Accelerometer tilt and pitch monitoring to identify inclines, drops, or tip-over hazards",
      "Real-time visual telemetry and status feedback displayed on an I2C SSD1306 OLED screen",
      "Buzzer and multi-LED diagnostic signals for state changes and collision warnings",
    ],
    hardware: {
      mcu: "ESP32 (Dual-core 32-bit Xtensa)",
      peripherals: [
        "HC-SR04 (Ultrasonic distance sensor with microsecond pulse timing)",
        "MPU6050 (6-axis accelerometer/gyroscope over I2C)",
        "SSD1306 (128x64 OLED graphic display over I2C)",
        "ULN2003 / 28BYJ-48 (Stepper motor drivers and 4-phase motors)",
      ],
      architectureType: "Non-blocking event loop in MicroPython",
    },
    detailedOverview:
      "Sensor Robot demonstrates the combination of electromechanical actuators with sensor fusion. Running on an ESP32 with MicroPython, the robot scans its surroundings with an ultrasonic distance transducer, calculates navigation headings, and drives stepper motors for precise positional movement.",
    engineeringDecisions: [
      {
        title: "MicroPython for Rapid Hardware Prototyping",
        rationale:
          "MicroPython enabled rapid iterative tuning of the obstacle-avoidance algorithm, sensor calibration curves, and OLED layout rendering.",
      },
      {
        title: "Precise Stepper Control vs. Open-loop DC Motors",
        rationale:
          "Stepper motors allow exact step counting and repeatable 90-degree spin turns in indoor mapping tests.",
      },
    ],
  },
];
