"use client"

import React from "react"
import { XIcon } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from "@/components/ui/morphing-dialog"

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

const PROJECTS: Project[] = [
  {
    name: 'Market Analysis & Insights',
    description:
      'Deep dive into current market events and their impact on your investment portfolio, with clear explanations and actionable insights.',
    link: 'https://youtu.be/59HwOOpXte8?si=qzPUYz89pxOxZdiL',
    video:
      'https://res.cloudinary.com/dheri3wii/video/upload/v1739023067/WhatsApp_Video_2025-02-08_at_1.57.01_PM_drha19.mp4',
    id: 'project1',
  },
  {
    name: 'Financial Planning Tools',
    description: 'Discover practical tools and strategies to help you take control of your financial future and achieve your goals.',
    link: 'https://youtu.be/YubENiTC-Ho?si=hzy1SGHqpQ_uz3iO',
    video:
      'https://res.cloudinary.com/dheri3wii/video/upload/v1739023179/WhatsApp_Video_2025-02-08_at_1.57.03_PM_qyxnke.mp4',
    id: 'project2',
  },
]

function ProjectVideo({ src }: { src: string }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative mx-4 aspect-video max-h-[90vh] w-[90vw] max-w-5xl rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 sm:mx-6">
          <video
            src={src}
            autoPlay
            loop
            controls
            playsInline
            className="h-full w-full rounded-xl object-contain"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed right-4 top-4 h-8 w-8 rounded-full bg-white p-1.5 sm:right-6 sm:top-6 sm:h-10 sm:w-10 sm:p-2"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-full w-full text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function VideoShowcaseSection() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-between px-4 md:px-6">
        <div className="flex w-full flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Financial Education Hub
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our educational content designed to help you navigate the financial markets and make informed decisions.
            </p>
          </div>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div key={project.name} className="flex flex-col space-y-4">
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectVideo src={project.video} />
                </div>
                <div className="flex flex-col space-y-2 px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 