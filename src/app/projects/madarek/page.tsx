import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  CalendarCheck,
  GraduationCap,
  BellRing,
  ExternalLink,
} from "lucide-react";
import { MadarekGallery } from "@/components/MadarekGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Madarek مدارِك — Student Management Product Case Study",
  description:
    "Product case study of Madarek (مدارِك): Arabic desktop and web student management platform built for private teachers and educational tutoring centers.",
};

export default function MadarekProjectPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Back navigation */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header & Product Identity */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-violet-950/50 text-violet-300 border border-violet-800/60 font-medium">
            Product Case Study
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
            Educational Center Software
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
            Native Arabic RTL
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
              Madarek
            </h1>
            <span
              className="text-3xl sm:text-5xl font-bold text-emerald-400 font-arabic"
              dir="rtl"
            >
              مدارِك
            </span>
          </div>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            A comprehensive student management software built around the real workflows
            of private tutors and educational centers in Egypt.
          </p>
        </div>

      </section>

      {/* Interactive UI Gallery Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-200">
            Product Interface & Workflow Previews
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            Captured from actual application builds
          </span>
        </div>

        <MadarekGallery />
      </section>

      {/* The Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
          <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
            <span className="text-red-400 font-mono text-sm">01.</span>
            The Problem for Educators
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Many private teachers and educational centers manage dozens of study groups
            and hundreds of students using disjointed Excel sheets or paper registers.
            When a student moves between groups, attendance records get lost, exam grades
            are difficult to aggregate, and communicating attendance to parents becomes a
            chaotic manual task.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
          <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">02.</span>
            How Madarek Solves It
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Madarek provides a unified system with an intuitive Arabic interface designed
            for teachers and administrative operators. It links student identity, multiple
            centers, academic stages, attendance logs, and exam marks without losing historic
            data when students switch batches or groups.
          </p>
        </div>
      </section>

      {/* Arabic Context Section */}
      <section
        className="rounded-xl border border-emerald-950/60 bg-gradient-to-b from-emerald-950/20 to-zinc-950 p-6 sm:p-8 space-y-4"
        dir="rtl"
      >
        <div className="flex items-center gap-2 text-emerald-400 font-arabic text-sm font-semibold">
          <span>عن منصة مدارِك</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-arabic">
          تصميم موجه لخدمة المعلم والمراكز التعليمية
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-arabic max-w-3xl">
          صُممت مدارِك لتلائم الطبيعة اليومية للدروس والمجموعات في مصر والعالم العربي:
          تسجيل سريع لحضور وغياب الطلاب، متابعة أرقام أولياء الأمور، رصد درجات الامتحانات
          بمرونة، ومراجعة رسائل المتابعة قبل إرسالها دون أي تعقيد تقني أو تشتيت للمعلم.
        </p>
      </section>

      {/* Four Core Product Modules */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
            {"// CORE CAPABILITIES"}
          </span>
          <h2 className="text-2xl font-bold text-zinc-100">
            Implemented System Modules
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Detailed breakdown of actual capabilities built into the Madarek platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module 1: Student Management */}
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 text-base">
                  1. Student Management
                </h3>
                <span className="text-xs font-arabic text-emerald-400" dir="rtl">
                  إدارة الطلاب والمجموعات
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">▹</span>
                <span>
                  <strong>Comprehensive Student Records:</strong> Student codes, names,
                  school stages, primary contact, and guardian phone numbers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">▹</span>
                <span>
                  <strong>Grades & Educational Stages:</strong> Hierarchical grouping across
                  primary, preparatory, and secondary stages.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">▹</span>
                <span>
                  <strong>Safe Group Transfers:</strong> Reassign students between groups or centers
                  with zero data loss.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">▹</span>
                <span>
                  <strong>Historical Placements:</strong> Preserves past group associations so
                  archived attendance and exam sheets remain accurate.
                </span>
              </li>
            </ul>
          </div>

          {/* Module 2: Classes & Attendance */}
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-cyan-400">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 text-base">
                  2. Classes & Attendance
                </h3>
                <span className="text-xs font-arabic text-cyan-400" dir="rtl">
                  تسجيل الحصص والغياب
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>
                  <strong>Fast Session Recording:</strong> Open a class roster and toggle attendance
                  status for all enrolled group members with minimal clicks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>
                  <strong>Status Classification:</strong> Explicitly tracks Present, Absent, and
                  Excused statuses with optional excuse reason notes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>
                  <strong>Attendance History:</strong> Immediate lookup of individual student attendance
                  rates, frequent absences, and date logs.
                </span>
              </li>
            </ul>
          </div>

          {/* Module 3: Examinations */}
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 text-base">
                  3. Examination Management
                </h3>
                <span className="text-xs font-arabic text-amber-400" dir="rtl">
                  إدارة الامتحانات والدرجات
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">▹</span>
                <span>
                  <strong>Exam Setup:</strong> Define exam titles, maximum scores, passing thresholds,
                  and target groups.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">▹</span>
                <span>
                  <strong>Batch Score Recording:</strong> Rapid numeric score entry with boundary
                  validation to prevent invalid entries.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">▹</span>
                <span>
                  <strong>Score Editing & Audit:</strong> Modify erroneous grades anytime with instant
                  recalculation of group percentiles.
                </span>
              </li>
            </ul>
          </div>

          {/* Module 4: Notification Review Workflow */}
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-violet-400">
                <BellRing className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 text-base">
                  4. Notification Review Workflow
                </h3>
                <span className="text-xs font-arabic text-violet-400" dir="rtl">
                  مراجعة واعتماد الإشعارات
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-violet-400">▹</span>
                <span>
                  <strong>Prepared Notification Review:</strong> Generates formatted message previews
                  for attendance reports or exam results before any sending occurs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400">▹</span>
                <span>
                  <strong>Eligibility & Exclusion Audit:</strong> Automatically flags students missing
                  phone numbers, disabled notifications, or excused statuses.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400">▹</span>
                <span>
                  <strong>Operator Approval Step:</strong> The operator explicitly reviews and approves
                  the recipient list, preventing accidental mass spam.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-8 border-t border-zinc-800 flex items-center justify-between text-xs">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Explore More Projects</span>
        </Link>
        <a
          href="https://github.com/Sief-Ali"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>Sief&apos;s GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </section>
    </div>
  );
}
